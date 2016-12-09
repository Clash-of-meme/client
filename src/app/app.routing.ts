import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuardService} from "./service/auth-guard.service";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);