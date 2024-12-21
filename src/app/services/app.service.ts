import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../components/authorization/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://api.4eloveg.ru'

  public account: Account = null

  constructor(private http: HttpClient) {
  }


  createOrder(data: any): Observable<any> {
    return this.http.post(`${this.url}/orders/help`, data)
  }
}

