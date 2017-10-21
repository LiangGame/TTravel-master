import {Injectable} from '@angular/core';
import {GlobalPropertyService} from './global-property.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable()
export class LoginService {
  url: string;

  constructor(private http: HttpClient,
              private glo: GlobalPropertyService,) {
    this.url = glo.serverUrl;
  }


  // 登录
  islogin(user, callback) {
    // console.log(user);
    this.http.post(this.url + '/admin/login', user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
}
