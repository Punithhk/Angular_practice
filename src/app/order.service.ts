import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  getOrders(): import('./order/order').Order[] {
    throw new Error('Method not implemented.');
  }
  id!: number;
  name!: string;
}
