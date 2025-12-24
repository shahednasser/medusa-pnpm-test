import { 
  ExecArgs,
  IProductModuleService,
} from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export default async function myScript({ container }: ExecArgs) {
  const productModuleService: IProductModuleService = container.resolve(
    Modules.PRODUCT
  )

  const [, count] = await productModuleService
    .listAndCountProducts()

  console.log(`You have ${count} product(s)`)
}