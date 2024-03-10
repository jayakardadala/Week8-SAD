import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'transactions', component: TransactionHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import and add RouterModule.forRoot(routes)
  exports: [RouterModule]
})
export class AppRoutingModule { }
