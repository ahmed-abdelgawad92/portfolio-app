import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info.model';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent implements OnInit {
  @Input() info: Info;
  lang = "de";
  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.cvService.changeLangEvent.subscribe(
      (lang) => {
        this.lang = lang;
      }
    );
  }

}
