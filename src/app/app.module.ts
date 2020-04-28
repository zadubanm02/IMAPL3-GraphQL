import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatapageComponent } from './datapage/datapage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartComponent } from './start/start.component';
import { CardsComponent } from './cards/cards.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatapageComponent,
    NavigationComponent,
    StartComponent,
    CardsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
