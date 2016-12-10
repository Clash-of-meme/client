import {Component} from "@angular/core";
import {ApiService} from "../service/api.service";
import {Meme} from "../model/meme";
import {Observable, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {User} from "../model/user";

@Component({
    selector: 'app-user-memes',
    templateUrl: './user-memes.component.html',
    styleUrls: ['./user-memes.component.css']
})
export class UserMemesComponent {

    public memes: Observable<Meme[]>;
    public user: Observable<User>;

    private reloader: Subject<void> = new Subject<void>();

    constructor(private api: ApiService, private route: ActivatedRoute) {
        this.memes = this.route.params.flatMap(params => {
            return this.api.get<Meme[]>('user/' + params['id_user'] + '/meme');
        });

        this.user = this.route.params.flatMap(params => {
            return this.api.get<User>('user/' + params['id_user']);
        });
    }

    public modal(): void {
        console.log("modal");
        console.log($('#modal1').openModal());
    }
}
