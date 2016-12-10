import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../service/api.service";
import {Duel} from "../model/duel";
import {Observable} from "rxjs";

@Component({
    selector: 'app-duel',
    templateUrl: './duel.component.html',
    styleUrls: ['./duel.component.css']
})
export class DuelComponent {

    public duel: Observable<Duel>;

    private duelId:number;

    constructor(private api: ApiService, private route: ActivatedRoute) {
        this.duel = this.route.params.flatMap(params => {
            this.duelId = +params['id_duel'];
            return this.api.get<Duel>('duel/' + params['id_duel']);
        });
    }

    vote(id:number):void{
        if(localStorage.getItem("vote_"+this.duelId) !== null){
            Materialize.toast("Vous avez déjà voté dans ce duel", 3000);
            return;
        }
        this.api.post('duel/'+this.duelId+'/vote', {id_meme:id}).subscribe(() => {
            localStorage.setItem("vote_"+this.duelId, Date.now().toString());
        })
    }
}
