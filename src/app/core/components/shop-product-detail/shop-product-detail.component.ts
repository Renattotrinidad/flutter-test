import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';
import { LocalStorageService } from '../../../utils/local-storage.service';

@Component({
  selector: 'app-shop-product-detail',
  templateUrl: './shop-product-detail.component.html',
  styleUrls: ['./shop-product-detail.component.css']
})

/**
 * Shop Product-Detail Component
 */
export class ShopProductDetailComponent implements OnInit {
  grabar_localStorage(){
    let productos = [
      {
      
        imageURL: "assets/images/portfolio/1-portArt-1.JPG",
        titulo: "titulo",
        descripcion: "", 
        precio:"",
        cantidad:"",

      },
      
    ];
    localStorage.setItem

  }
  /***
   * Header button list show
   */
  shopPages = true;

  model = 1;

  constructor(private localStorageService: LocalStorageService) { }
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false
  };

  /**
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      900: {
        items: 4
      }
    },
    nav: false
  };

  ngOnInit(): void {
  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }

  /**
   * Increase-Decrement set
   */
  increase() {
    this.model += 1;
  }
  decrement() {
    if (this.model > 0) {
      this.model -= 1;
    }
  }

  addToCart(product : any): void{
    this.localStorageService.addProduct(product);
  }
}

