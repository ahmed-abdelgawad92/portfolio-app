import { Component, OnInit, ElementRef } from '@angular/core';
import { CvService } from './cv.service';
//import * as jsPDF from 'jspdf';
//import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [
    CvService
  ]
})
export class CvComponent implements OnInit {
  skillHeading = "Kenntnisse & Fähigkeiten";
  lang = "de";
  constructor(public cvService: CvService, private el: ElementRef) { }
  ngOnInit() {
    this.cvService.changeLangEvent.subscribe(
      (lang)=>{
        this.lang = lang;
        if(lang == "de"){
          this.skillHeading = "Kenntnisse & Fähigkeiten";
        }else{
          this.skillHeading = "Knowledge & Skills";
        }
      }
    );
  }
  changeLang(event,lang:string){
    event.preventDefault();
    this.el.nativeElement.querySelector('.nav-link.active').classList.remove('active');
    event.target.classList.add('active');
    this.cvService.changeLangEvent.emit(lang);
  }

  downloadPDF(){
    //this.cvService.downloadCV(this.lang);
    /*let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    }
    let content = document.getElementById('print');
    doc.fromHTML(content.innerHTML, 15, 15,{
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('test.pdf');*/
    /*let cv = document.getElementById('print');
    html2canvas(cv, { scale: 4 }).then(canvas =>{
      const contentDataUrl = canvas.toDataURL('image/jpeg');
      let pdf = new jsPDF('p','px','a4');
      let width = pdf.internal.pageSize.width;
      let height = pdf.internal.pageSize.height;
      console.log(pdf);
      pdf.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
      pdf.save('ahmed_abdelgawad_cv.pdf');
    });  */
  }
}
