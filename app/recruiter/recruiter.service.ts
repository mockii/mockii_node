/**
 * Created by Billa on 12/26/16.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {UserProfile} from "../model/UserProfile";

@Injectable()
export class RecruiterService {

  private baseServiceUrl = 'http://localhost:8080/createUser';  // URL to web api
  // private baseServiceUrl = 'https://mockii.herokuapp.com/createUser';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(user: UserProfile): Promise<UserProfile> {
    return this.http
      .post(this.baseServiceUrl, user, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
