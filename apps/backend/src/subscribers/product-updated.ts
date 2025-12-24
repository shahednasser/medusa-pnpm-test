import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework"

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  console.log("Product created with ID:", data.id)
}

export const config: SubscriberConfig = {
  event: `product.updated`,
}