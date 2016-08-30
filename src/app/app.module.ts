import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganizationComponent } from './organization/organization.component';
import { TopicComponent } from './topic/topic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MydashboardsComponent } from './mydashboards/mydashboards.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ExplorerComponent } from './shared/explorer/explorer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { routing, appRoutingProviders } from './app.routing';
import { AutocompleteComponent } from './shared/explorer/autocomplete/autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganizationComponent,
    TopicComponent,
    DashboardComponent,
    MydashboardsComponent,
    AboutComponent,
    SubscribeComponent,
    NavbarComponent,
    ExplorerComponent,
    PagenotfoundComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
