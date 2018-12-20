import { Component, OnInit, Input } from '@angular/core';
import { Certification } from '../certification.model';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-certification-item',
  templateUrl: './certification-item.component.html',
  styleUrls: ['./certification-item.component.css']
})
export class CertificationItemComponent implements OnInit {
  @Input() certification: Certification;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  onOpen(link){
    this.homeService.openModal.emit(link);
  }

}
