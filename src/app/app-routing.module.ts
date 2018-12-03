import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {HomeComponent} from "./home/home.component";
import {ProfilesListComponent} from "./home/components/profiles-list/profiles-list.component";
import {ProfileDetailComponent} from "./home/components/profiles-list/profile-detail/profile-detail.component";
import {MusiciansComponent} from "./musicians/musicians.component";
import {MusicainsResolver} from "./shared/musicains-resolver.service";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {CanDeactivateGuard} from "./auth/can-deactivate-guard.service";
import {AuthGuard} from "./auth-guard.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignUpComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'signin', component: SignInComponent},
  {
    path: 'musicians', canActivate: [AuthGuard],
    resolve: {musResolver: MusicainsResolver},
    loadChildren: 'src/app/musicians/musician.module#MusicianModule'
  },
  {path: 'app-profiles-list', component: ProfilesListComponent},
  {path: 'app-profiles-list/:id', component: ProfileDetailComponent},
  {path: 'forbidden', component: ForbiddenComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
