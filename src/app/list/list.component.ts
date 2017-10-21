import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';


import {PanelService} from "../services/panel.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PanelService]
})
export class ListComponent implements OnInit {
  allNotes: any;
  _check:boolean = true;
  ischeck:boolean = true;
  nocheck:boolean = true;

  constructor(private panelSer: PanelService,
              private route: ActivatedRoute,
              private router: Router,) {
    this.getAllNotes();
  }

  ngOnInit() {
  }

  getAllNotes() {
    let that = this;
    this.panelSer.getAllnotes('', function (result) {
      if(result){
        that.allNotes = result;
        // console.log(that.allNotes);
      }
    })
  }

  getdetails(notesId){
    if (notesId) {
      this.router.navigate(['/details'], {queryParams: {'key': notesId}});
    }
  }

}
