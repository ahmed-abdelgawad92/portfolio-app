import { Component, OnInit, Input } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.css']
})
export class CvSkillsComponent implements OnInit {
  @Input() skills;
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
