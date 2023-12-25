import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ContactsFactory } from 'Database/factories/ContactsFactory'

export default class extends BaseSeeder {
  public async run() {
    await ContactsFactory.createMany(20)
  }
}
