import { createProductsWorkflow } from "@medusajs/medusa/core-flows"

createProductsWorkflow.hooks.productsCreated(
  async ({ products }, { container }) => {
    // TODO perform an action
    console.log("Created products")
  }
)