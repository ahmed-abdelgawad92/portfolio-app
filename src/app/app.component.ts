import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { filter , map , mergeMap } from 'rxjs/operators';
import { HomeService } from './home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title, 
    private homeService: HomeService, 
    private element: ElementRef
  ) { }
  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event['title']));
    this.homeService.scrollEvent.subscribe(
      (id) => {
        try {
          let el = this.element.nativeElement.querySelector(id);
          el.scrollIntoView({ inline: "start", block: "start", behavior: "smooth" });
        } catch (e) {
          console.log(e);
        }
      }
    );
  }
}
