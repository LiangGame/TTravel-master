import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogin:any;
  constructor(private router: Router) {

  }
  ngAfterContentChecked(){
    this.isLogin = sessionStorage.getItem('isLogin');
  }
  back(){
    window.history.back();
  }
  signOut(){
    sessionStorage.removeItem('isLogin');
    this.router.navigate(['/login']);
  }

}
