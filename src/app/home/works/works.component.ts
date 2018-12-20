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
      /*transition('* => show',[
          animate('200ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition('* => hide',[
          animate('200ms', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ]),*/
      transition('* => show', [
        query('app-work-item', style({ opacity: 0, transform: 'translateX(-100%)'  })),
        query('app-work-item',
          stagger('150ms', [
            animate('150ms', style({ opacity: 1, transform: 'translateX(0)' }))
        ]))
      ]),
      transition('* => hide', [
        query('app-work-item',
          stagger('150ms', [
            animate('150ms', style({ opacity: 0, transform: 'translateX(-100%)' }))
          ])
        )
      ]),
    ]),
    trigger('toggleHide',[
      state('hide', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      state('destroy', style({ opacity: 0 })),
      transition('show => hide', animate('150ms 150ms')),
    ])
  ]
})
export class WorksComponent implements OnInit {
  state = "hide";
  works: Work[];
  staticWorks: Work[];
  constructor(public el: ElementRef, private homeService: HomeService) {
    this.staticWorks = [
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
    const componentPosition = this.el.nativeElement.offsetTop;
    const elementHeight = this.el.nativeElement.firstElementChild.offsetHeight;
    const componentEndPosition = componentPosition + elementHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition && scrollPosition + 100 <= componentEndPosition) {
      this.homeService.scrollPosition.emit('mywork');
    }
    if (scrollPosition + 300 >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
  ngOnInit() {
    this.works = this.staticWorks;
  }

  filterProjects(event){
    event.preventDefault();
    this.state="destroy";
    this.works = null;
    this.el.nativeElement.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    let projectType = event.target.getAttribute('data-project');
    if(projectType == 'all'){
      this.works = this.staticWorks;
    }else{
      this.works = this.staticWorks.filter(item => {
        console.log(item.projectFilter.replace(/\s+/g, '-').toLowerCase());
        return item.projectFilter.replace(/\s+/g, '-').toLowerCase() == projectType;
      });
    }
    setTimeout(()=>{
      this.state = 'show';
    }, 100);
  }
}
