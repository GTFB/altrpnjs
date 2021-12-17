// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TemplatesController {
  public async index({ params }) {
    const page = parseInt(params.page) | 1
    // const search = params.s

    // const orderType = params.order || "DESC"
    // const orderBy = params.order_by || "id"

    const pageSize = params.pageSize


  }
}
