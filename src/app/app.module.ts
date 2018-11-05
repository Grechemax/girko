import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './home/components/components.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './home/components/search/search.component';
import { ProfilesListComponent } from './home/components/profiles-list/profiles-list.component';
import { ProfilesItemComponent } from './home/components/profiles-list/profiles-item/profiles-item.component';
import { CitiesComponent } from './home/components/cities/cities.component';
import { CityItemComponent} from './home/components/cities/city-item/city-item.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './home/components/catalog/catalog.component';
import { CatalogItemComponent } from './home/components/catalog/catalog-item/catalog-item.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {AppRoutingModule} from "./app-routing.module";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import { ProfileDetailComponent } from './home/components/profiles-list/profile-detail/profile-detail.component';
import {DefaultPipe} from "./default.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MusiciansComponent } from './musicians/musicians.component';
import {MusicainsResolver} from "./shared/musicains-resolver.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    HeaderComponent,
    SearchComponent,
    ProfilesListComponent,
    ProfilesItemComponent,
    ProfileDetailComponent,
    CitiesComponent,
    CityItemComponent,
    FooterComponent,
    CatalogComponent,
    CatalogItemComponent,
    SignInComponent,
    SignUpComponent,
    ProfileDetailComponent,
    DefaultPipe,
    MusiciansComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [MusicainsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
