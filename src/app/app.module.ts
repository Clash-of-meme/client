import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {ApiService} from "./service/api.service";
import {AuthGuardService} from "./service/auth-guard.service";
import {AuthService} from "./service/auth.service";
import {MemesComponent} from "./memes/memes.component";
import {DuelComponent} from "./duel/duel.component";
import {MemeCardComponent} from "./duel/meme-card/meme-card.component";
import {UserMemesComponent} from "./user-memes/user-memes.component";
import "materialize-css";

@NgModule({
    declarations: [
        AppComponent,

        MemesComponent,
        LoginComponent,
        SignupComponent,
        MemeCardComponent,
        DuelComponent,
        MemeCardComponent,
        UserMemesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,

        routing,
    ],
    providers: [
        ApiService,
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
