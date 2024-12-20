import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://api.4eloveg.ru/'
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(private http: HttpClient) {
  }


  createOrder(data: any): Observable<any> {
    return this.http.post(`https://api.4eloveg.ru/orders/help`, data)
  }
}

