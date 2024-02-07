import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../../shared/models/customer/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersLarge() {
      return this.http.get<any>('assets/mock-data/mock-data.ts')
          .toPromise()
          .then(res => <Customer[]>res.data)
          .then(data => { return data; });
  }
}
