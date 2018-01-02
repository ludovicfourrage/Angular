import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(inputfeedback: Feedback): Observable<Feedback>{
    console.log(inputfeedback)
    return this.restangular.all('feedback').post(inputfeedback);
  }
}