import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ApiService} from "../../service/api.service";
import {Meme} from "../../model/meme";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import 'rxjs';

@Component({
    selector: 'app-meme-card',
    templateUrl: './meme-card.component.html',
    styleUrls: ['./meme-card.component.css']
})
export class MemeCardComponent {

    public memeDetails: Observable<Meme>;

    public author: Observable<User>;

    @Input() memeId: number;

    @Input() votes: number;

    @Output() vote$: EventEmitter<number> = new EventEmitter<number>();

    @Input() finished: boolean = false;

    constructor(private api: ApiService) {
        this.memeDetails = this.api.get<Meme>('meme/' + this.memeId);
        this.author = this.memeDetails.flatMap(meme => {
            return this.api.get<User>('user/' + meme.id_user);
        })
    }

    vote() {
        this.vote$.emit(this.memeId);
    }
}
