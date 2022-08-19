import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainAccountComponent } from 'app/modules/admin/finance-account/account/account.component';
import { CommonModule } from '@angular/common';

const accountRoutes: Route[] = [
  {
    path: '',
    component: MainAccountComponent
  }
];

@NgModule({
  declarations: [
    MainAccountComponent
  ],
  imports: [
    RouterModule.forChild(accountRoutes),
    CommonModule
  ]
})
export class AccountModule {
}
