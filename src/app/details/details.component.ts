import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service'
import {PanelService} from "../services/panel.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [PanelService]
})
export class DetailsComponent implements OnInit {
  notesId: any;
  notes: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private glo: GlobalPropertyService,
              private panelSer: PanelService) {
    this.getNotes();
  }

  ngOnInit() {
  }

  getNotes() {
    this.route.params.subscribe((params: Params) => {
      let id = (<Params>this.route.queryParams).value['key'];
      this.notesId = {notesId: id}
      if (id) {
        let that = this;
        id = {"id": id};
        that.panelSer.getnotesItem(id, function (result) {
          if (result) {
            result[0].content = (result[0].content).replace(/&nbsp;/ig, '');
            that.notes = result[0];
            // console.log(that.notes);
            // that.images = result[0].url.split(',');
          }
        })
      }
    });
  }

  ischeck(notesId,type){
    let body = {notesId:notesId,type:type};
    // console.log(body);
    let  that = this;
    if(body){
      that.panelSer.ischeck(body,function (result) {
        if(result == 1){
          alert('审核成功!')
        }else {
          alert('审核失败!')
        }
        // console.log(result);
      })
    }
  }

}
