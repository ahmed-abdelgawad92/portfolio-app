import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet, NavigationCancel, NavigationError, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { filter , map , mergeMap } from 'rxjs/operators';
import { HomeService } from './home.service';
import { slideInAnimation } from './shared/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
  
})
export class AppComponent implements OnInit{
  state;
  loading = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title, 
    private homeService: HomeService, 
    private element: ElementRef
  ) { 
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  ngOnInit() {
    //change page title based on data object with the route
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      this.titleService.setTitle(event['title']);
    });
    //scroll to a specific element
    this.homeService.scrollEvent.subscribe(
      (id) => {
        let el = this.element.nativeElement.querySelector(id);
        if(el){
          el.scrollIntoView({ inline: "start", block: "start", behavior: "smooth" });
        }else{
          setTimeout(()=>{
            el = this.element.nativeElement.querySelector(id);
            if (el) {
              el.scrollIntoView({ inline: "start", block: "start", behavior: "smooth" });
            }
          },400);
        }
      }
    );
    //if no hash route , scroll to top
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if(!fragment){
        window.scrollTo(0,0);
      }
    })
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
