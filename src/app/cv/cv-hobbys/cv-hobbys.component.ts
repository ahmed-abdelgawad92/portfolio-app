import { Component, OnInit, Input } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-hobbys',
  templateUrl: './cv-hobbys.component.html',
  styleUrls: ['./cv-hobbys.component.css']
})
export class CvHobbysComponent implements OnInit {
  @Input() hobbies;
  title = "Hobbys";
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService.changeLangEvent.subscribe(
      lang => {
        if(lang == "de"){
          this.title = "Hobbys";
        }else{
          this.title = "Hobbies";
        }
      }
    );
  }

}
