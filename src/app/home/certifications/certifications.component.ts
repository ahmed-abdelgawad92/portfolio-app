import { Component, OnInit } from '@angular/core';
import { Certification } from './certification.model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications = [
    new Certification ('../../../../assets/images/aua2.png','Bachelor Certification'),
    new Certification('../../../../assets/images/aua2.png','Bachelor Grades'),
    new Certification('../../../../assets/images/anerkennung.png','Anerkannter Zeugnis'),
    new Certification('../../../../assets/images/micro.png','Microsoft Web Development Certification'),
    new Certification('../../../../assets/images/zend.png','Zend Certified Engineer',true),
    new Certification('../../../../assets/images/cbw.png','CBW Zeugnis'),
    new Certification('../../../../assets/images/webmasters.png','Webmasters Europe Certified PHP Developer',true),
    new Certification('../../../../assets/images/deutsch.png','B1 Deutsch Zertifikat'),
    new Certification('../../../../assets/images/eingliederung.png','Eingliederungzuschuss für Arbeitgeber'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
