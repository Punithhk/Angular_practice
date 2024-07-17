import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  forders: { id: Number; buyername: String }[] = [
    { id: 1, buyername: 'MS' },
    {
      id: 2,
      buyername: 'ASE',
    },
  ];
  constructor(private orderService: OrderService) {}
  getOrders2() {
    this.forders = this.orderService.getOrders();
  }
  ngOnInit() {
    this.getOrders2();
  }
}
