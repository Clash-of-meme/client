import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private returnUrl: string;

    constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

    login(username: string, password: string): void {
        this.auth.login(username, password).subscribe(() => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            Materialize.toast(error, 1500);
        })
    }
}
