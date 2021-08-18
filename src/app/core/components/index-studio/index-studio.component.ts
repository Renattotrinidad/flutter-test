import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    
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
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }


}
