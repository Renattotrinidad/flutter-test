
import { Component, OnInit , Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-aboutus-two',
  templateUrl: './aboutus-two.component.html',
  styleUrls: ['./aboutus-two.component.css']
})
export class AboutusTwoComponent implements OnInit {
 // @Input() sliderTopbar: boolean;

  public ContenedorSpanish: boolean;
  public ContenedorEnglish: boolean;
  
  //navClass = 'nav-light';
  constructor(private modalService: NgbModal) { }
 

  isCondensed = false;
  currentSection = 'home';   //
  ngOnInit(): void {
    this.ContenedorEnglish =  true;
  }
  
   
  touch(type){
    // console.log(type);
 
     if (type == 1){
      // this.Contenedora2= true;
      this.ContenedorSpanish = true;
      this.ContenedorEnglish = false;
     
   // this.holamundo= false;
     
    }
    if (type == 2){
      //this.Contenedora2= false;
     
      this.ContenedorSpanish = false;
      this.ContenedorEnglish = true;
    }
    }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }

toggleMenu() {
  this.isCondensed = !this.isCondensed;
  if (this.isCondensed) {
    document.getElementById("navigation").style.display = "block";
  } else {
    document.getElementById("navigation").style.display = "none";
  }
}
/**
 * Menu clicked show the submenu
 */
onMenuClick(event) {
  event.preventDefault();
  const nextEl = event.target.nextSibling.nextSibling;
  if (nextEl && !nextEl.classList.contains("open")) {
    const parentEl = event.target.parentNode;
    if (parentEl) {
      parentEl.classList.remove("open");
    }
    nextEl.classList.add("open");
  } else if (nextEl) {
    nextEl.classList.remove("open");
  }
  return false;
}
}