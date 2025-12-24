import { 
  createStep, 
  createWorkflow, 
  StepResponse, 
  transform, 
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { BLOG_MODULE } from "../modules/blog"
import BlogModuleService from "../modules/blog/service"
import { createRemoteLinkStep, useQueryGraphStep } from "@medusajs/medusa/core-flows"
import { Modules } from "@medusajs/framework/utils"

type CreatePostWorkflowInput = {
  title: string
}

const createPostStep = createStep(
  "create-post",
  async ({ title }: CreatePostWorkflowInput, { container }) => {
    const blogModuleService: BlogModuleService = container.resolve(BLOG_MODULE)

    const post = await blogModuleService.createPosts({
      title,
    })

    return new StepResponse(post, post)
  },
  async (post, { container }) => {
    if (!post) {
      return
    }
    const blogModuleService: BlogModuleService = container.resolve(BLOG_MODULE)

    await blogModuleService.deletePosts(post.id)
  }
)

export const createPostWorkflow = createWorkflow(
  "create-post",
  (postInput: CreatePostWorkflowInput) => {
    const post = createPostStep(postInput)

    const link = transform({
      post,
    }, (data) => {
      return [
        {
          [Modules.PRODUCT]: {
            product_id: "prod_01KD4ZMKAWFETFK7TA6PHKTVQN"
          },
          [BLOG_MODULE]: {
            post_id: data.post.id
          }
        },
      ]
    })

    createRemoteLinkStep(link)

    const { data: posts } = useQueryGraphStep({
      entity: "post",
      fields: ["*", "product.title"],
      filters: {
        id: post.id,
      }
    })

    return new WorkflowResponse({
      post: posts[0]
    })
  }
)