import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

const routes: Routes = [
  // Home page route (example)
  { path: '', redirectTo: '/register', pathMatch: 'full' },

  // User registration form route
  { path: 'register', component: UserRegistrationFormComponent },

  // Wildcard route for 404 - optional
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
