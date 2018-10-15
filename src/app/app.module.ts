import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './home/components/components.component';
import { HeaderComponent } from './home/components/header/header.component';
import { SearchComponent } from './home/components/search/search.component';
import { ProfilesListComponent } from './home/components/profiles-list/profiles-list.component';
import { ProfilesItemComponent } from './home/components/profiles-list/profiles-item/profiles-item.component';
import { CitiesComponent } from './home/components/cities/cities.component';
import { CityItemComponent} from './home/components/cities/city-item/city-item.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { CatalogComponent } from './home/components/catalog/catalog.component';
import { CatalogItemComponent } from './home/components/catalog/catalog-item/catalog-item.component';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    HeaderComponent,
    SearchComponent,
    ProfilesListComponent,
    ProfilesItemComponent,
    CitiesComponent,
    CityItemComponent,
    FooterComponent,
    CatalogComponent,
    CatalogItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
