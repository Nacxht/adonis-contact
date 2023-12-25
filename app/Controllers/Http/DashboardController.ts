import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DashboardController {
  public async index({ view }: HttpContextContract) {
    const contacts = await Database.from('contacts').count('*', 'total')

    return view.render('dashboard', { contacts: contacts[0].total })
  }
}
