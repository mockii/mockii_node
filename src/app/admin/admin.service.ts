/**
 * Created by Billa on 12/24/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import "rxjs/add/operator/toPromise";

import {Topic} from "../model/Topic";

@Injectable()
export class AdminService {
  private baseServiceUrl = 'https://mockii.herokuapp.com';  // URL to web api

  constructor(private http: Http) { }

  getTopics(): Promise<Topic[]> {
    const url = `${this.baseServiceUrl}/findAllTopics`;
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
