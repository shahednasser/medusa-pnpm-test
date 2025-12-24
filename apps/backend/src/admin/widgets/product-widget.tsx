import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../lib/sdk"

const ProductWidget = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => sdk.admin.product.list(),
    queryKey: ["products"],
  })
  
  return (
    <Container className="divide-y p-0">
      {isLoading && <span>Loading...</span>}
      {data?.products && (
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.list.before",
})

export default ProductWidget