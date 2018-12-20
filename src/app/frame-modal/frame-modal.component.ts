import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-frame-modal',
  templateUrl: './frame-modal.component.html',
  styleUrls: ['./frame-modal.component.css'],
  animations: [
    trigger('displayContainer',[
      state('hide',style({ transform: 'translateY(-100%)'})),
      state('show', style({  transform: 'translateY(0)'})),
      transition('* => *', animate('200ms'))
    ])
  ]
})
export class FrameModalComponent implements OnInit {
  @Input() link: string = '../../assets/certification/bachelor.pdf';
  @Input() state = 'show';
  constructor() { }

  ngOnInit() {
  }
  close(){
    this.state='hide';
    //this.hide = true;
  }
}
