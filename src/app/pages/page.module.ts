import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '@shared';
import { PagesRoutingModule } from './page.routing';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [LoginComponent, NotFoundComponent],

})

export class PageModule { }
