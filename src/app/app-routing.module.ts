import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { NotFoundModule } from './not-found/not-found.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'inicio', loadChildren: () => HomeModule},
  {path: 'usuario', loadChildren: () => UserModule},
  {path: 'carrito', loadChildren: () => ShoppingCartModule},
  {path: 'contacto', loadChildren: () => ContactModule},
  {path: '**', loadChildren: () => NotFoundModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
