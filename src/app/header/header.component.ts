import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }
  scroll(id: string){
    this.homeService.scrollEvent.emit(id);
  }
}
