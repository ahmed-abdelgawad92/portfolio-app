import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-personal-information',
  templateUrl: './cv-personal-information.component.html',
  styleUrls: ['./cv-personal-information.component.css'],
  providers: [InfoService]
})
export class CvPersonalInformationComponent implements OnInit {
  title = "Persönliche Angaben";
  infos = null;
  constructor(private infoService: InfoService, private cvService: CvService) { }

  ngOnInit() {
    this.infos = this.infoService.getInfos();
    this.cvService.changeLangEvent.subscribe(
      (lang) => { 
        if(lang=="de"){
          this.title = "Persönliche Angaben";
        }else{
          this.title = "Personal Information";
        }
      }
    );
  }

}
