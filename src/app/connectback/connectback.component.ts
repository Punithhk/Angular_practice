import { Component } from '@angular/core';
import { DataService } from './connectback.service';
import { Data } from './data';

@Component({
  selector: 'app-connectback',
  templateUrl: './connectback.component.html',
  styleUrls: ['./connectback.component.css'],
})
export class ConnectbackComponent {
  addmsg!: string;
  SHOW!: boolean;
  data!: Data[];
  errmsg!: string;
  msg!: string;
  constructor(private dataService: DataService) {}
  getData() {
    this.dataService.getData().subscribe({
      next: (data) => (this.data = data),
      error: (error) => (this.errmsg = error),
    });
  }
  addData(tid: string, desc: string, tprice: string): void {
    let id = parseInt(tid);
    let price = parseInt(tprice);
    this.dataService.addData({ id, desc, price }).subscribe({
      next: (data) => (this.msg = data),
      error: (error) => (this.errmsg = error),
    });
  }
}
