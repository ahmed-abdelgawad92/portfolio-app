import { Component, OnInit, Input } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-cv-skill-item',
  templateUrl: './cv-skill-item.component.html',
  styleUrls: ['./cv-skill-item.component.css']
})
export class CvSkillItemComponent implements OnInit {
  @Input() skill;
  lang = "de";
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService.changeLangEvent.subscribe(
      (lang) => {
        this.lang = lang;
      }
    );
  }

}
