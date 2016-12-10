import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {Routes, RouterModule} from "@angular/router";
import {MemesComponent} from "./memes/memes.component";
import {DuelComponent} from "./duel/duel.component";
import {UserMemesComponent} from "./user-memes/user-memes.component";

const appRoutes: Routes = [
    {path: '', component: MemesComponent}, //, canActivate: [AuthGuardService]
    {path: 'duel/:id_duel', component: DuelComponent},
    {path: 'user/:id_user/memes', component: UserMemesComponent},

    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);