import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<void> {
        let query: URLSearchParams = new URLSearchParams();

        query.append('login', username);
        query.append('password', password);

        return this.http.get('/api/login', {search: query})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                localStorage.setItem('currentUser', JSON.stringify(token));
            });
    }

    public get token(): string {
        return localStorage.getItem('currentUser');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
