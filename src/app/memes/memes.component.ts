import {Component} from "@angular/core";
import {ApiService} from "../service/api.service";
import {Meme} from "../model/meme";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Component({
    selector: 'app-memes',
    templateUrl: './memes.component.html',
    styleUrls: ['./memes.component.css']
})
export class MemesComponent {

    public memes: Observable<Meme[]>;

    constructor(private api: ApiService) {
        this.memes = this.api.get<Meme[]>('meme')
            .map(memes => {
                return memes.sort((a, b) => {
                    return a.elo > b.elo ? 1 : -1;
                });
            });
    }

    public getMemeAuthor(meme: Meme): string {
        return meme.login_user;
    }
}
