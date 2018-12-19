import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Work } from './work.model';
import { HomeService } from 'src/app/home.service';
import { trigger, transition, query, style, animate, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('app-work-item', style({ transform: 'translateX(-100%)' })),
        query('app-work-item',
          stagger('600ms', [
            animate('600ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])
  ]
})
export class WorksComponent implements OnInit {
  works: Work[];
  constructor(public el: ElementRef, private homeService: HomeService) {
    this.works = [
      new Work(
         'http://clinic.ahmedelkayaty92.de',
         'Laravel',
         'Gad Dental Clinics',
         [
          'HTML',
          'CSS',
          'Bootstrap',
          'Javascript',
          'jQuery',
          'AJAX',
          'PHP',
          'MySQL',
        ],
        'assets/images/presc.png',
        '#000059',
        '100px 100px',
        'center'
      ),
      new Work(
        'projects/movie.mp4',
        'PHP',
        'Graduation Project',
        [
          'HTML',
          'CSS',
          'Bootstrap',
          'Javascript',
          'jQuery',
          'PHP',
          'MySQL',
        ],
        'assets/images/clinic.png',
        'rgb(164, 188, 213)',
        '',
        'center'
      ),
      new Work(
        'projects/egoist',
        'PSD to HTML',
        'Egoist',
        [],
        'assets/images/Egoist.jpg'
      ),
      new Work(
        'projects/top_end',
        'PSD to HTML',
        'Top End',
        [],
        'assets/images/top_end.png',
        '',
        '100%'
      ),
      new Work(
        'projects/insight',
        'PSD to HTML',
        'Insight',
        [],
        'assets/images/original.png'
      ),
      new Work(
        'projects/webington',
        'PSD to HTML',
        'Webington',
        [],
        'assets/images/webington.jpg'
      ),
      new Work(
        'projects/Wedding',
        'PSD to HTML',
        'Wedding',
        [],
        'assets/images/wedding.jpg'
      )
    ]
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const componentEndPosition = componentPosition + this.el.nativeElement.firstElementChild.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition && scrollPosition + 100 <= componentEndPosition) {
      this.homeService.scrollPosition.emit('mywork');
    }
    /*if (scrollPosition >= componentPosition) {
      this.state = 'show';
    }else{
      this.state = 'hide';
    }*/
  }
  ngOnInit() {
  }

}
