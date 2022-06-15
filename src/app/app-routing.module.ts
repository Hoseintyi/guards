import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';


const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'adminpanel' , component:AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'notauthenticated' , component:NotAuthenticatedComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
