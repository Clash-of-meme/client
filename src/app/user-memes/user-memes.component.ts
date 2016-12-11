import {Component} from "@angular/core";
import {ApiService} from "../service/api.service";
import {Meme} from "../model/meme";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {User} from "../model/user";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-user-memes',
    templateUrl: './user-memes.component.html',
    styleUrls: ['./user-memes.component.css']
})
export class UserMemesComponent {

    public memes: Observable<Meme[]>;
    public user: Observable<User>;

    constructor(private api: ApiService, private route: ActivatedRoute, private auth: AuthService) {
        this.memes = this.route.params.flatMap(params => {
            return this.api.get<Meme[]>('user/' + params['id_user'] + '/meme');
        });

        this.user = this.route.params.flatMap(params => {
            return this.api.get<User>('user/' + params['id_user']);
        });
    }

    public startDuel(meme: Meme) {
        this.api.post("/duel/demande", {id_meme: meme.id}).subscribe(() => {
            Materialize.toast("Duel demandé, vous reçevrez un email à son lancement.", 3000);
        });
    }

    public userIsMe(): Observable<boolean> {
        return this.user.map(user => {
            return user.token == this.auth.token;
        });
    }
}
