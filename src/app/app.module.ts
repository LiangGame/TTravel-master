import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng2PaginationModule} from "ng2-pagination"


import {AppComponent} from './master/app.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';

// 导入服务
import {GlobalPropertyService} from './services/global-property.service';
// 导入管道
import {LocaleDatePipe} from './Pipes/locale-date.pipe'

import {AppRoutingModule} from './app-routing.module';
// 解决不能刷新
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    ListComponent,
    DetailsComponent,
    LocaleDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2PaginationModule,
    AppRoutingModule
  ],
  providers: [GlobalPropertyService,
    // 解决不能刷新问题
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
