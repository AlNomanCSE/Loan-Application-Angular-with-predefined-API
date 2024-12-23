import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, ApplicationApiResponse } from '../models/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterxerviceService {
  constructor(private http: HttpClient) {}

  addNewApplication(applicationObj: Application):Observable<ApplicationApiResponse> {
    return this.http.post<ApplicationApiResponse>(
      'https://projectapi.gerasim.in/api/Loan/AddNewApplication',
      applicationObj
    );
  }
}
