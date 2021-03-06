import { Component, OnInit, Input } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-cv-time-history-item',
  templateUrl: './cv-time-history-item.component.html',
  styleUrls: ['./cv-time-history-item.component.css']
})
export class CvTimeHistoryItemComponent implements OnInit {
  @Input() item;
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
