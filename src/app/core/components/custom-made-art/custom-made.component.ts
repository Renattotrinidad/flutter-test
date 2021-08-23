import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-custom-made',
  templateUrl: './custom-made.component.html',
  styleUrls: ['./custom-made.component.css']
})
export class CustomMadeComponent implements OnInit {
  //Contenedores}
  public ContentPrincipal: boolean ;
  public Contenedora2: boolean;
  public Contenedorb2: boolean;
  public Contenedorc2: boolean;
  public Contenedord2: boolean;
  public Contenedore2: boolean;
  public Contenedorf2: boolean;
  public Contenedora4: boolean; 
  public Contenedorb4: boolean;
 public  Contenedorc4: boolean;
 public Contenedord4: boolean;


  constructor(private modalService: NgbModal) { }

  isCondensed = false;
  currentSection = 'home';

  /**
   * Client Testimonial Data
   */
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`
    }
  ];

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Design & Development",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-vector-square h1 text-primary",
      title: "Management & Marketing",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-file-search-alt h1 text-primary",
      title: "Stratagy & Research",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    },
    {
      icon: "uil uil-airplay h1 text-primary",
      title: "Easy To Use",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    },
    {
      icon: "uil uil-calendar-alt h1 text-primary",
      title: "Daily Reports",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    },
    {
      icon: "uil uil-clock h1 text-primary",
      title: "Real Time Zone",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }
  ];

  /**
   * Pricing Data
   */
  pricingData = [
    {
      title: "Free",
      price: 0,
      list: ["Full Access", "Source Files"],
      btn: "Buy Now"
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: ["Full Access", "Source Files", "Free Appointments"],
      btn: "Get Started"
    },
    {
      title: "Professional",
      price: 59,
      list: ["Full Access", "Source Files", "1 Domain Free", "Enhanced Security"],
      btn: "Try It Now"
    },
    {
      title: "Ultimate",
      price: 79,
      list: ["Full Access", "Source Files", "1 Domain Free", "Enhanced Security", "Free Installment"],
      btn: "Started Now"
    }
  ];

  /**
   * Member Data
   */
  memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }
  ];

  ngOnInit(): void {
    this.ContentPrincipal =  true;
  
  }

   
   touch(type){
   // console.log(type);

    if (type == 1){
      this.Contenedora2= true;
       this.Contenedorb2 = false;
       this.Contenedorc2 = false;
       this.Contenedord2 = false;
       this.Contenedore2 = false;
       this.Contenedorf2 = false;
       this.Contenedora4 = false;
       this.Contenedorb4 = false;
       this.Contenedorc4 = false;
       this.Contenedord4 = false;
    
  // this.holamundo= false;
    }
    if (type == 2){
      this.Contenedora2= false;
      this.Contenedorb2 = true;
      this.Contenedorc2 = false;
      this.Contenedord2 = false;
      this.Contenedore2 = false;
      this.Contenedorf2 = false;
      this.Contenedora4 = false;
       this.Contenedorb4 = false;
       this.Contenedorc4 = false;
       this.Contenedord4 = false;
    
    }
  
  if (type == 3 ){
    this.Contenedora2= false;
    this.Contenedorb2 = false;
    this.Contenedorc2 = true;
    this.Contenedord2 = false;
    this.Contenedore2 = false;
    this.Contenedorf2 = false;
    this.Contenedora4 = false;
       this.Contenedorb4 = false;
       this.Contenedorc4 = false;
       this.Contenedord4 = false;
    
  
}
if (type == 4){
  this.Contenedora2= false;
  this.Contenedorb2 = false;
  this.Contenedorc2 = false;
  this.Contenedord2 = true;
  this.Contenedore2 = false;
  this.Contenedorf2 = false;
  this.Contenedora4 = false;
       this.Contenedorb4 = false;
       this.Contenedorc4 = false;
       this.Contenedord4 = false;
    
}

if (type == 5){
  this.Contenedora2= false;
  this.Contenedorb2 = false;
  this.Contenedorc2 = false;
  this.Contenedord2 = false;
  this.Contenedore2 = true;
  this.Contenedorf2 = false;
  this.Contenedora4 = false;
       this.Contenedorb4 = false;
       this.Contenedorc4 = false;
       this.Contenedord4 = false;
    

}

    if (type == 6){
     
      this.Contenedora2= false;
      this.Contenedorb2 = false;
      this.Contenedorc2 = false;
      this.Contenedord2 = false;
      this.Contenedore2 = false;
      this.Contenedorf2 = true;
      this.Contenedora4 = false;
       this.Contenedorb4 = false;
       this.Contenedorc4 = false;
       this.Contenedord4 = false;
    
 }
 
 if (type == 6){
     
  this.Contenedora2= false;
  this.Contenedorb2 = false;
  this.Contenedorc2 = false;
  this.Contenedord2 = false;
  this.Contenedore2 = false;
  this.Contenedorf2 = false;
  this.Contenedora4 = true;
   this.Contenedorb4 = false;
   this.Contenedorc4 = false;
   this.Contenedord4 = false;

}

if (type == 7){
     
  this.Contenedora2= false;
  this.Contenedorb2 = false;
  this.Contenedorc2 = false;
  this.Contenedord2 = false;
  this.Contenedore2 = false;
  this.Contenedorf2 = false;
  this.Contenedora4 = false;
   this.Contenedorb4 = true;
   this.Contenedorc4 = false;
   this.Contenedord4 = false;

}

if (type == 8){
     
  this.Contenedora2= false;
  this.Contenedorb2 = false;
  this.Contenedorc2 = false;
  this.Contenedord2 = false;
  this.Contenedore2 = false;
  this.Contenedorf2 = false;
  this.Contenedora4 = false;
   this.Contenedorb4 = false;
   this.Contenedorc4 = true;
   this.Contenedord4 = false;

}

if (type == 9){
     
  this.Contenedora2= false;
  this.Contenedorb2 = false;
  this.Contenedorc2 = false;
  this.Contenedord2 = false;
  this.Contenedore2 = false;
  this.Contenedorf2 = false;
  this.Contenedora4 = false;
   this.Contenedorb4 = false;
   this.Contenedorc4 = false;
   this.Contenedord4 = true;

}

  
    
      }
  

  mapView(mapcontent) {
    this.modalService.open(mapcontent, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  openTrialModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Toggle menu
   */
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById('navigation').style.display = 'block';
    } else {
      document.getElementById('navigation').style.display = 'none';
    }
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }

    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      document.getElementById('back-to-top').style.display = 'inline';
    } else {
      document.getElementById('back-to-top').style.display = 'none';
    }
  }

  /**
  * Section changed method
  * @param sectionId specify the current sectionID
  */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  

}


