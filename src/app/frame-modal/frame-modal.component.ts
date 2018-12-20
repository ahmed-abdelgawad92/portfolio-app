import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-frame-modal',
  templateUrl: './frame-modal.component.html',
  styleUrls: ['./frame-modal.component.css'],
  animations: [
    trigger('displayContainer',[
      state('hide',style({ transform: 'translateY(-100%)'})),
      state('show', style({  transform: 'translateY(0)'})),
      transition('* => *', animate('300ms'))
    ])
  ]
})
export class FrameModalComponent implements OnInit {
  link: string;
  state = 'hide';
  hide = true;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.openModal.subscribe((link)=>{
      this.link = link;
      this.hide = false;
      this.state = 'show';
    });
  }
  close(){
    this.state='hide';
  }
}
