import { Container, Heading } from "@medusajs/ui"
import {
  useLoaderData,
} from "react-router-dom"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { ChatBubbleLeftRight } from "@medusajs/icons"
import { useTranslation } from "react-i18next"

export async function loader() {
  // TODO fetch products

  return {
    products: [],
  }
}

const CustomPage = () => {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const { t } = useTranslation()

  return (
    <div>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading level="h2">Products count: {products.length}</Heading>
        </div>
        {t("custom_page.welcome_message", "Welcome to the custom page!")}
      </Container>
    </div>
  )
}

export const config = defineRouteConfig({
  label: "Custom Route",
  icon: ChatBubbleLeftRight,
})

export default CustomPage