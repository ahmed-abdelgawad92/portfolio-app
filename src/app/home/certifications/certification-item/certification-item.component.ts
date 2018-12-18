import { Component, OnInit, Input } from '@angular/core';
import { Certification } from '../certification.model';

@Component({
  selector: 'app-certification-item',
  templateUrl: './certification-item.component.html',
  styleUrls: ['./certification-item.component.css']
})
export class CertificationItemComponent implements OnInit {
  @Input() certification: Certification;
  constructor() { }

  ngOnInit() {
  }

}
