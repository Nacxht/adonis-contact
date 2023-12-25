import Contacts from 'App/Models/Contact'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const ContactsFactory = Factory.define(Contacts, ({ faker }) => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phonenum: '08123456789',
  }
}).build()
