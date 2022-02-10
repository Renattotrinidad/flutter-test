import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio-masonry-two',
  templateUrl: './portfolio-masonry-two.component.html',
  styleUrls: ['./portfolio-masonry-two.component.css']
})

/***
 * Portfolio masonry two component
 */
export class PortfolioMasonryTwoComponent implements OnInit {

  
  filterredImages;
  list = [{
    galleryId:  1 ,
    imageName: "jamesport",
    image: 'assets/images/portfolio/PRUEBAA.JPG',
    title: 'Wall Street Manhattan',
  },
  {
    galleryId:  2 ,
    imageName: "jamesport",
    image: 'assets/images/portfolio/PRUEBAA.JPG',
    title: 'Wall Street Manhattan',
  },
  {
    galleryId:  3 ,
    imageName: "jamesport",
    image: 'assets/images/portfolio/PRUEBAA.JPG',
    title: 'Wall Street Manhattan',
  },
 
  {
    image: 'assets/images/work/5.jpg',
    title: 'Dancing With Myself',
    type: 'Photography',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/6.jpg',
    title: 'New trends in SEO',
    type: 'Business',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/7.jpg',
    title: 'Shifting Perspective',
    type: 'Studio',
    category: 'designing',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/5.jpg',
    title: 'Dancing With Myself',
    type: 'Photography',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/8.jpg',
    title: 'Colors Magazine',
    type: 'Web Design',
    category: 'development',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  {
    image: 'assets/images/work/9.jpg',
    title: 'Spa Cosmetics',
    type: 'Developing',
    category: 'branding',
    name: 'Calvin Carlo',
    date: '13th August, 2019'
  },
  
  ];

  constructor() { }

  ngOnInit(): void {
    this.filterredImages = this.list;
  }

  /***
   * Active all category selected
   */


}

