import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Data } from './data';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>('http://localhost:8000/getData').pipe(
      tap((data: any) => console.log('Data received: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addData(data: Data): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:8000/addDat', data, { responseType: 'text' })
      .pipe(
        tap((data) => console.log(data.length)),
        catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
    let msg = '';
    if (err.error instanceof Error) {
      //Client side/network err
      console.log('An error occured: ', err.error.message);
      msg = err.error.message;
    } else {
      //failed response code
      console.log(`Backend returned code ${err.status}`);
    }
    return throwError(() => msg);
  }
}
