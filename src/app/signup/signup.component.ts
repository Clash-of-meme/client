import {Component} from "@angular/core";
import {ApiService} from "../service/api.service";
import {Inscription} from "../model/inscription";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    public username: string;
    public email: string;
    public password1: string;
    public password2: string;

    constructor(private api: ApiService) {
    }

    public signup(): void {
        if(this.password1 !== this.password2){
            Materialize.toast("Les mots de passe ne correspondent pas.", 3000);
            return;
        }
        let data: Inscription = {
            login: this.username,
            email: this.email,
            password: this.password1
        };
        this.api.post<void>('user', data);
    }
}
