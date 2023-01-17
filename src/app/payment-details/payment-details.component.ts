import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: []
})
export class PaymentDetailsComponent implements OnInit {

  /**
   *
   */
  constructor(public service: PaymentDetailService, private toastr:ToastrService) { }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if(confirm('Czy na pewno chcesz usunąć wskazaną kartę?')) {
      this.service.deletePaymentDetail(id)
      .subscribe(
        result => {
          this.service.refreshlist();
          this.toastr.error("Wykonano pomyślne usunięcie karty", "Usunięto kartę")
        },
        error => {
          console.log(error);
        }
      )
    }
    
  }

  ngOnInit(): void {
    this.service.refreshlist();
  }
}
