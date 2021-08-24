import { Component, OnInit, AfterViewInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-index-studio',
  templateUrl: './index-studio.component.html',
  styleUrls: ['./index-studio.component.css']
})

/***
 * Index Studio Component
 */
export class IndexStudioComponent implements OnInit {
  navClass = 'bg-white';

  constructor(private modalService: NgbModal) { }

  ngOnInit(){
    

  }
ngAfterViewInit(): void {
// this.Subscribeopen("modalServicesss");

//<script>
//$(document).ready(function(){
  //  $(' #Subscribecontent').modal('show')});
//</script>



  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
}
  /***
   * Login Model open
   */
  open(content) {
    this.modalService.open(content, { centered: true });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };
 
  Subscribeopen(content) {

    this.modalService.open(content, {  centered: true });
    
   
  }


}
