import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  readonly baseURL = 'https://localhost:7171/api/PaymentDetails'; 
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  constructor(private http:HttpClient) { 
    this.list = [];
  }

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(result => this.list = result as PaymentDetail[]);
  }
}
