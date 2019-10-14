import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NetworthComponent } from './networth/networth.component';
import { CashComponent } from './networth/assets/cash/cash.component';
import { AssetComponent } from './networth/assets/asset/asset.component';
import { InvestmentsComponent } from './networth/assets/investments/investments.component';
import { UseassetComponent } from './networth/assets/useasset/useasset.component';
import { CurrentComponent } from './networth/liabilities/current/current.component';
import { LiabilitiesComponent } from './networth/liabilities/liabilities.component';

const APP_ROUTES = [
  {path:'networth', component: NetworthComponent},
  {path:'networth/cash', component: CashComponent},
  {path:'networth/assets', component: AssetComponent},
  {path:'networth/investments', component: InvestmentsComponent},
  {path:'networth/useassets', component: UseassetComponent}
//   {path:'', redirectTo: 'networth/cash', pathMatch:'full'},
//   {path:'**', redirectTo: 'networth/cash', pathMatch:'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(APP_ROUTES, {enableTracing:true})
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    NetworthComponent,
    CashComponent,
    AssetComponent,
    InvestmentsComponent,
    UseassetComponent,
    CurrentComponent,
    LiabilitiesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
