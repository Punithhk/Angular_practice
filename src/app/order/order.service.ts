import { Injectable } from '@angular/core';
import { Orders } from './order-data';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  getOrders() {
    return Orders;
  }
}
