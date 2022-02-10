import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { SwiperOptions } from "swiper";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detail-two",
  templateUrl: "./detail-two.component.html",
  styleUrls: ["./detail-two.component.css"],
})
export class DetailTwoComponent implements OnInit {
  public imageList = new Array();
  public galleryId;
  public filteredImages = new Array();
  /***
   * Header button list show
   */
  shopPages = true;

  model = 1;

  constructor(private _route: ActivatedRoute) {}
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: "horizontal",
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false,
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
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      900: {
        items: 4,
      },
    },
    nav: false,
  };

  async ngOnInit() {
    this._route.paramMap.subscribe(async (params: any) => {
      this.galleryId = params.params.galleryId;

      await this.getInfoByGalleryId(this.galleryId);

      console.log(this.filteredImages);
    });
  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById(
      "expandedImg"
    ) as HTMLImageElement;
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

  getInfoByGalleryId(galleryId){

    let list1 = [
      {
        imageName: "1-portArt-1",
        imageURL: "assets/images/portfolio/1-portArt-1.JPG",
      },
      {
        imageName: "1-portArt-2",
        imageURL: "assets/images/portfolio/1-portArt-2.JPG",
      },
    ];

    let list2 = [
      {
        imageName: "2-jamesport-1",
        imageURL: "assets/images/portfolio/2-jamesport-1.JPG",
      },
      {
        imageName: "2-jamesport-2",
        imageURL: "assets/images/portfolio/2-jamesport-2.JPG",
      },
    ];

    if(galleryId == 1){
      this.filteredImages = list1;
    }else if (galleryId == 2){
      this.filteredImages = list2;
    }
  }






  list3 = [
    {
      categoryID: 3,
      imageInfo: [
        {
          imageName: "3-spirito-1",
          imageURL: "assets/images/portfolio/3-spirito-1.JPG",
        },
        {
          imageName: "3-spirito-2",
          imageURL: "assets/images/portfolio/3-spirito-2.JPG",
        },
        {
          imageName: "3-spirito-3",
          imageURL: "assets/images/portfolio/3-spirito-3.JPG",
        },
        {
          imageName: "3-spirito-4",
          imageURL: "assets/images/portfolio/3-spirito-4.JPG",
        },
      ],
    },
  ];

  list4 = [
    {
      categoryID: 4,
      imageInfo: [
        {
          imageName: "4-manhattan-1",
          imageURL: "assets/images/portfolio/4-manhattan-1.JPG",
        },
        {
          imageName: "4-manhattan-2",
          imageURL: "assets/images/portfolio/4-manhattan-2.JPG",
        },
        {
          imageName: "4-manhattan-3",
          imageURL: "assets/images/portfolio/4-manhattan-3.JPG",
        },
        {
          imageName: "4-manhattan-4",
          imageURL: "assets/images/portfolio/4-manhattan-4.JPG",
        },
        {
          imageName: "4-manhattan-5",
          imageURL: "assets/images/portfolio/4-manhattan-5.JPG",
        },
        {
          imageName: "4-manhattan-6",
          imageURL: "assets/images/portfolio/4-manhattan-6.JPG",
        },
        {
          imageName: "4-manhattan-7",
          imageURL: "assets/images/portfolio/4-manhattan-7.JPG",
        },
        {
          imageName: "4-manhattan-8",
          imageURL: "assets/images/portfolio/4-manhattan-8.JPG",
        },
        {
          imageName: "4-manhattan-9",
          imageURL: "assets/images/portfolio/4-manhattan-9.JPG",
        },
      ],
    },
  ];
}
