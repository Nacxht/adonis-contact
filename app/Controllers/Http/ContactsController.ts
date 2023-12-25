import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema } from '@ioc:Adonis/Core/Validator'
import Contact from 'App/Models/Contact'

export default class ContactsController {
  public async index({ view, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 8

    const contacts = await Database.from('contacts').paginate(page, limit)
    contacts.baseUrl('/contacts')

    return view.render('contacts', { contacts })
  }

  public async store({ request, response, session }: HttpContextContract) {
    const dataSchema = schema.create({
      name: schema.string(),
      email: schema.string(),
      phonenum: schema.number(),
    })

    const data = await request.validate({
      schema: dataSchema,
    })
    const contact = new Contact()

    await contact
      .fill({
        name: data.name,
        email: data.email,
        phonenum: String(data.phonenum),
      })
      .save()

    if (contact.$isPersisted) {
      session.flash('success', 'Contact added successfully!')
    }

    response.redirect().toRoute('contact')
  }

  public async show({ view, params }: HttpContextContract) {
    const contact = await Contact.findOrFail(params.id)

    return view.render('contact-detail', { contact })
  }

  public async update({ request, response, session }: HttpContextContract) {
    const dataSchema = schema.create({
      id: schema.string(),
      name: schema.string(),
      email: schema.string(),
      phonenum: schema.number(),
    })

    const data = await request.validate({
      schema: dataSchema,
    })
    const contact = await Contact.findOrFail(data.id)

    await contact
      .merge({
        name: data.name,
        email: data.email,
        phonenum: String(data.phonenum),
      })
      .save()

    session.flash('success', 'Contact edited successfully!')
    response.redirect().toRoute('contact.detail', { id: data.id })
  }

  public async destroy({ params, response, session }: HttpContextContract) {
    const contact = await Contact.findOrFail(params.id)
    await contact.delete()

    session.flash('success', 'Contact deleted successfully!')
    response.redirect().toRoute('contact')
  }
}
