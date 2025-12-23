import { 
  defineMiddlewares,
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
  validateAndTransformQuery, 
} from "@medusajs/framework/http"
import { PostStoreCustomSchema } from "./custom/route"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/custom*",
      middlewares: [
        validateAndTransformQuery(PostStoreCustomSchema, {})
      ],
    },
  ],
})