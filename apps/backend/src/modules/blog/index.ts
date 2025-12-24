import helloWorldLoader from "./loaders/test"
import BlogModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const BLOG_MODULE = "blog"

export default Module(BLOG_MODULE, {
  service: BlogModuleService,
  loaders: [helloWorldLoader]
})