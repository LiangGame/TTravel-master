//导入模块
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

// 导入组件
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
// 配置路由表
const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
