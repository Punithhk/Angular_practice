import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  name: string = 'Punith';
  company!: string;
  inputvalue: string = 'Value';
  username: string = '';
  password: string = '';
  credentials: string[][] = [['punith', 'password']];
  result: string = '';
  constructor(private http: HttpClient, private router: Router) {
    //called first time before ngOnInit()
  }

  verify() {
    for (var i in this.credentials) {
      if (this.credentials[i][0] === this.username) {
        console.log('reached this point');
        console.log(this.password);
        if (this.credentials[i][1] === this.password) {
          this.result = 'Credentials are valid';
          break;
        }
        this.result = 'Password is wrong';
        break;
      } else {
        this.result = 'Username not found';
      }
    }
  }
  navigateroute(): void {
    this.router.navigate(['/form']);
  }
  displayComp() {
    this.company = '3V';
  }

  ngOnInit() {
    //called after constructor and after ngOnChanges()
  }
}
