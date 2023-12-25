/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts q
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'DashboardController.index')

Route.group(() => {
  Route.get('/', 'ContactsController.index').as('contact')
  Route.post('/', 'ContactsController.store').as('contact.create')
  Route.post('/edit', 'ContactsController.update').as('contact.edit')
  Route.get('/detail/:id', 'ContactsController.show').as('contact.detail')
  Route.get('/delete/:id', 'ContactsController.destroy').as('contact.delete')
}).prefix('/contacts')
