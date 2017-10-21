import {Injectable} from '@angular/core';
import {GlobalPropertyService} from './global-property.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PanelService {
  url: string;

  constructor(private http: HttpClient,
              private glo: GlobalPropertyService,) {
    this.url = glo.serverUrl;
  }
  getAllnotes(e,callback){
    this.http.post(this.url+'/admin/getAll','').subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  //获取指定游记
  getnotesItem(id, callback) {
    this.http.post(this.url + '/index/notesDetails', id).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  // 审核
  ischeck(body,callback){
    this.http.post(this.url + '/admin/isCheck', body).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

}
