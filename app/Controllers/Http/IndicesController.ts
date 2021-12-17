// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Edge from "../../../helpers/edge";

export default class IndicesController {
  public admin({ view }) {
    return view.render('admin', Edge({
      url: "http://localhost:3002/src/bundle.js"
    }))
  }

  public loginView({ view }) {
    return view.render('login')
  }

  public async login({ auth, request }) {
  const email = request.input('email')
  const password = request.input('password')

  await auth.use('web').attempt(email, password)
  }
}
