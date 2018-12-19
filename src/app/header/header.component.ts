import { Component, OnInit, ElementRef } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private homeService: HomeService, private element: ElementRef) { }

  ngOnInit() {
    this.homeService.scrollPosition.subscribe(
      (id) => {
        try {
          let el = this.element.nativeElement.querySelector('.active');
          el.classList.remove('active');
          this.element.nativeElement.querySelector("a[data-scroll='" + id +"']").classList.add('active');
        } catch (e) {
          console.log(e);
        }
        console.log(id);
      }
    );
  }
  scroll(event, id: string){
    this.homeService.scrollEvent.emit(id);
  }
  clearActive(cvLink){
    Array.from(this.element.nativeElement.querySelectorAll('.active')).map((item) =>{
        item['classList'].remove('active');
      }
    );
    cvLink.classList.add('active');
  }
}
