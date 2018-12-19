import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public el: ElementRef, private homeService: HomeService) { }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const componentEndPosition = componentPosition + this.el.nativeElement.firstElementChild.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition && scrollPosition + 100 <= componentEndPosition) {
      this.homeService.scrollPosition.emit('home');
    }
  }
  ngOnInit() {
  }

}
