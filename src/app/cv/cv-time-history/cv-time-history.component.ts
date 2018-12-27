import { Component, OnInit, Input } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-time-history',
  templateUrl: './cv-time-history.component.html',
  styleUrls: ['./cv-time-history.component.css']
})
export class CvTimeHistoryComponent implements OnInit {
  @Input() items;
  lang = "de"; 
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService.changeLangEvent.subscribe(
      lang => {
        this.lang = lang;
      }
    );
  }

}
