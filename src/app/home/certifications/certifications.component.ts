import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Certification } from './certification.model';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications = [
    new Certification ('../../../../assets/images/aua2.png','Bachelor Certification', '../../assets/certification/bachelor.pdf'),
    new Certification('../../../../assets/images/aua2.png','Bachelor Grades', '../../assets/certification/noten.pdf'),
    new Certification('../../../../assets/images/anerkennung.png','Anerkannter Zeugnis', '../../assets/certification/anerkannte-zertifikat.pdf'),
    new Certification('../../../../assets/images/micro.png','Microsoft Web Development Certification', '../../assets/certification/microsoft.pdf'),
    new Certification('../../../../assets/images/zend.png','Zend Certified Engineer', '../../assets/certification/zend_certification.png',true),
    new Certification('../../../../assets/images/cbw.png','CBW Zeugnis', '../../assets/certification/cbw_certification.pdf'),
    new Certification('../../../../assets/images/webmasters.png','Webmasters Europe Certified PHP Developer', '../../assets/certification/webmaster_php.pdf',true),
    new Certification('../../../../assets/images/deutsch.png','B1 Deutsch Zertifikat', '../../assets/certification/deutsch.pdf'),
    new Certification('../../../../assets/images/eingliederung.png','Eingliederungzuschuss für Arbeitgeber', '../../assets/certification/Eingliederung.pdf'),
  ];
  constructor(public el: ElementRef, private homeService: HomeService) { }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const componentEndPosition = componentPosition + this.el.nativeElement.firstElementChild.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition && scrollPosition + 70 <= componentEndPosition) {
      this.homeService.scrollPosition.emit('certi');
    }
  }
  ngOnInit() {
  }

}
