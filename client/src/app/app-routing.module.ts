import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [  
  { path: '', component: DashboardComponent, data: { title: 'User Dashboard' }},
  { path: 'register', component: RegisterComponent, data: { title: 'User Registration' }},
  { path: 'login', component: LoginComponent, data: { title: 'User Login' }},
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' }}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })], // <-- enableTracing is for debugging purposes only
  exports: [RouterModule]
})
export class AppRoutingModule {
}
