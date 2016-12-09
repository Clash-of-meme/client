import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<void> {
        return this.http.post('/api/login', JSON.stringify({login: username, password: password}))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                localStorage.setItem('currentUser', JSON.stringify(token));
            });
    }

    public get token(): string {
        return localStorage.getItem('currentUser');
    }

    // signup(username:string, password:string):Observable<void>{
    //
    // }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
