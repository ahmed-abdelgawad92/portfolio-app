import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "scale(1)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "scale(0)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class AboutMeComponent implements OnInit {
  state = 'hide';
  constructor(public el: ElementRef, private homeService: HomeService) { }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const componentEndPosition = componentPosition + this.el.nativeElement.firstElementChild.offsetHeight;
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition >= componentPosition && scrollPosition + 100 <= componentEndPosition) {
      this.homeService.scrollPosition.emit('aboutme');
    }
    if (scrollPosition >= componentPosition - 300) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
  ngOnInit() {
  }

}
