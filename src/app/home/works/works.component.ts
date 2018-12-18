import { Component, OnInit } from '@angular/core';
import { Work } from './work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works: Work[];
  constructor() {
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

  ngOnInit() {
  }

}
