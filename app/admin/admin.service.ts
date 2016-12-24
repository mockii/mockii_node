/**
 * Created by Billa on 12/24/16.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Topic} from "../model/Topic";

@Injectable()
export class AdminService {
  private baseServiceUrl = 'https://mockii.herokuapp.com';  // URL to web api

  constructor(private http: Http) { }

  getTopics(): Promise<Topic[]> {
    const url = `${this.baseServiceUrl}/findAllTopics`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Topic[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
