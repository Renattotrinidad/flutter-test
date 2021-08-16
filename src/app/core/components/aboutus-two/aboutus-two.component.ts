
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aboutus-two',
  templateUrl: './aboutus-two.component.html',
  styleUrls: ['./aboutus-two.component.css']
})
export class AboutusTwoComponent implements OnInit {

  navClass = 'nav-light';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}


