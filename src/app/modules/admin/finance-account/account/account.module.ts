import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainAccountComponent } from 'app/modules/admin/finance-account/account/account.component';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { AgeDebtorsComponent } from './age-debtors/age-debtors.component';
import {NgxPaginationModule} from 'ngx-pagination'; 

const accountRoutes: Route[] = [
  {
    path: '',
    component: MainAccountComponent
  }
];

@NgModule({
  declarations: [
    MainAccountComponent,
    NavigationButtonsComponent,
    AgeDebtorsComponent
  ],
  imports: [
    RouterModule.forChild(accountRoutes),
    NgxPaginationModule,
    CommonModule,
  ]
})
export class AccountModule {
}
