import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
// import { z } from "zod"

// export const PostStoreCustomSchema = z.object({
//   a: z.number(),
//   b: z.number(),
// })

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
){
  res.json({
    message: "Hello, World!",
  })
}