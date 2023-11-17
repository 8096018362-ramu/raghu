import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root',
})

export class AppServices {

    constructor(
        public _http: HttpClient
    ) {

    }

    fetchUsers() {
        return this._http.get(environment.awsUrl + 'dev/okta/users')
            .pipe(map((res: any) => res))
    }

    fetchActons() {
        return this._http.get(environment.awsUrl + 'dev/okta/actions')
            .pipe(map((res: any) => res))
    }

    updateAction(payload) {
        return this._http.post(environment.awsUrl + 'dev/okta/actions', payload)
            .pipe(map((res: any) => res))
    }
}