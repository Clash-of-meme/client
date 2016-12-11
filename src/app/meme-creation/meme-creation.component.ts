import {Component} from "@angular/core";
import {ApiService} from "../service/api.service";
import {Picture} from "../model/picture";
import {Observable} from "rxjs";
import {MemePattern} from "../model/meme-pattern";

@Component({
    selector: 'app-meme-creation',
    templateUrl: './meme-creation.component.html',
    styleUrls: ['./meme-creation.component.css']
})
export class MemeCreationComponent {

    //Une grille d'images
    public pictures: Observable<Picture[][]>;

    public meme: MemePattern = {id_imgflip: '', name: '', text_bottom: '', text_top: ''};

    constructor(private api: ApiService) {
        this.pictures = this.api.get<Picture[]>("meme/picture").map(pictures => {
            let data = [[]];
            let height = 0;
            let width = 0;
            pictures.forEach(picture => {
                if (width >= 3) {
                    height++;
                    width = 0;
                }
                if (width == 0) {
                    data[height] = [];
                }
                if (width < 3) {
                    data[height].push(picture);
                    width++;
                }
            });
            return data;
        });
    }

    select(picture: Picture) {
        this.meme.id_imgflip = picture.id_imgflip;
        this.meme.name = picture.name;
    }

    save(): void {
        if (this.meme.id_imgflip !== '' && this.meme.name !== '') {
            this.api.post("meme", this.meme);
        } else {
            Materialize.toast('Merci de choisir une image', 3000);
        }
    }
}
