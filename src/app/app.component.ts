import { Component, ViewChild } from '@angular/core';
// import {
//   OnInit,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy,
// } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  data!: Observable<number>;
  array: number[] = [];
  navigateroute(): void {
    this.router.navigate(['/form']);
  }
  sendData(): void {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(11);
      }, 1000);
      setTimeout(() => {
        observer.next(22);
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    this.data.subscribe((value) => {
      this.array.push(value);
    });
  }
  //  implements OnInit,
  // DoCheck,
  // AfterContentChecked,
  // AfterContentInit,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy
  title = 'Cart';
  // ngOnInit(): void {
  //   console.log('Init');
  // }
  // ngDoCheck(): void {
  //   console.log('Change detected');
  // }
  // ngAfterContentInit(): void {
  //   console.log('After content init');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('After contnet checked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('After view init');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('After view checked');
  // }
  // ngOnDestroy(): void {
  //   console.log('Destroy');
  // }

  @ViewChild(HelloComponent) helloComponent!: HelloComponent;
  start() {
    this.helloComponent.displayComp();
  }
}
