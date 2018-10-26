import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {HomeComponent} from "./home/home.component";
import {ProfilesListComponent} from "./home/components/profiles-list/profiles-list.component";
import {ProfileDetailComponent} from "./home/components/profiles-list/profile-detail/profile-detail.component";
import {MusiciansComponent} from "./musicians/musicians.component";
import {MusicainsResolver} from "./shared/musicains-resolver.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {
    path: 'musicians',
    resolve: {musResolver: MusicainsResolver},
    component: MusiciansComponent
  },
  {path: 'app-profiles-list', component: ProfilesListComponent},
  {path: 'app-profiles-list/:id', component: ProfileDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
