import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from '../layout/default/default.component';
import { PageModule } from './page.module';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: DefaultComponent,
    children: [
      { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: '**', component: NotFoundComponent }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageModule,
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
