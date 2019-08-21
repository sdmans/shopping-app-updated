import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importing components */
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'account', component: AccountComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',
  redirectTo: 'main',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
