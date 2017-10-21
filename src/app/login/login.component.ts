import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  _telephone: any;
  _password: any;

  constructor(private loginSer: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(loginForm) {
    let that = this;
    let userInfo = loginForm.value;
    this.loginSer.islogin(userInfo,function (result) {
      if(result){
        if(result.stateCode==1){
          sessionStorage.setItem('isLogin','yes');
          that.router.navigate(['/list']);
        }else {
          alert('登录失败')
        }
      }
    })
  }
}
