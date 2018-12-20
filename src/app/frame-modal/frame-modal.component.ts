import { Component, OnInit } from '@angular/core';
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
      transition('hide => show', animate('300ms')),
      transition('show => hide', animate('300ms 300ms'))
    ]),
    trigger('displayContent',[
      state('hide',style({ opacity:0 ,transform: 'scale(0)'})),
      state('show', style({  transform: 'scale(1)'})),
      transition('hide => show', animate('100ms 500ms')),
      transition('show => hide', animate('100ms')),
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
      document.querySelector('html').style.overflow = 'hidden';
    });
  }
  close(){
    this.link = null; 
    this.state = 'hide';
    document.querySelector('html').style.overflow = 'auto';
  }
}
