import { Component, OnInit, Input } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-cv-hobby-item',
  templateUrl: './cv-hobby-item.component.html',
  styleUrls: ['./cv-hobby-item.component.css']
})
export class CvHobbyItemComponent implements OnInit {
  @Input() hobby;
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
