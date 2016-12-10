import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, RequestMethod, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

    constructor(private http: Http,
                private auth: AuthService) {
    }

    public get<T>(uri: string): Observable<T> {
        return this.request<T>(uri, {method: RequestMethod.Get});
    }

    public post<T>(uri: string, data: any): Observable<T> {
        return this.request<T>(uri, {method: RequestMethod.Post, body: JSON.stringify(data)});
    }

    public put<T>(uri: string, data: any): Observable<T> {
        return this.request<T>(uri, {method: RequestMethod.Put, body: JSON.stringify(data)});
    }

    public delete<T>(uri: string): Observable<T> {
        return this.request<T>(uri, {method: RequestMethod.Delete});
    }

    public request<T>(uri: string, options: RequestOptionsArgs): Observable<T> {
        options.headers = new Headers();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Basic ' + this.auth.token);
        return this.http.request("/api/" + uri, options).map(response => {
            return response.json() as T;
        });
    }

}
