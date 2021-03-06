import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { IndexStudioComponent } from './core/components/index-studio/index-studio.component';
import { PageCaseDetailComponent } from './core/components/page-case-detail/page-case-detail.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioGridThreeComponent } from './core/components/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioMasonryTwoComponent } from './core/components/portfolio-masonry-two/portfolio-masonry-two.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { AboutusTwoComponent } from './core/components/aboutus-two/aboutus-two.component';
import { ArtComponent } from './core/components/art/art.component';
import { CustomMadeComponent } from './core/components/custom-made-art/custom-made.component';
import { ArtTypeComponent } from './core/components/art-type/art-type.component';
import { SpaceComponent } from './core/components/space/space.component';
import { CustomArtworkComponent } from './core/components/custom-artwork/custom-artwork.component';
import { SubmitComponent } from './core/components/submit/submit.component';
import { PageContactDetailComponent } from './page-contact-detail/page-contact-detail.component';
import { IndexShopComponent } from './index-shop/index-shop.component';
import { IndexShopWallComponent } from './index-shop-wall/index-shop-wall.component';
import { ShopMatersantDecorComponent } from './shop-matersant-decor/shop-matersant-decor.component';
import { ShopMatersantFinishingComponent } from './shop-matersant-finishing/shop-matersant-finishing.component';
import { ShopAccesoriesComponent } from './shop-accesories/shop-accesories.component';
import { ShopClothingComponent } from './shop-clothing/shop-clothing.component';
import { IndexUpcycledComponent } from './index-upcycled/index-upcycled.component';
import { IndexMateriaDecorComponent } from './index-materia-decor/index-materia-decor.component';
import { ShopAccesoriesMateriaComponent } from './shop-accesories-materia/shop-accesories-materia.component';
import { ShopArtMateriaComponent } from './shop-art-materia/shop-art-materia.component';
import { IndexShopFurnitureComponent } from './index-shop-furniture/index-shop-furniture.component';
import { DetailTwoComponent } from './detail-two/detail-two.component';
import { ShopCheckoutsComponent } from './shop-checkouts/shop-checkouts.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductPortfolioComponent } from './product-portfolio/product-portfolio.component';
import { InteriorPortfolioComponent } from './interior-portfolio/interior-portfolio.component';
import { UtilsModule } from './utils/utils.module';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterPageComponent,
    IndexStudioComponent,
    PageCaseDetailComponent,
    PageServicesComponent,
    ShopProductsComponent,
    PortfolioGridThreeComponent,
    PortfolioMasonryTwoComponent,
    ShopProductDetailComponent,
    ShopCartComponent,
    AboutusTwoComponent,
    ArtComponent,
    CustomMadeComponent,
    ArtTypeComponent,
    SpaceComponent,
    CustomArtworkComponent,
    SubmitComponent,
    PageContactDetailComponent,
    IndexShopComponent,
    IndexShopWallComponent,
    ShopMatersantDecorComponent,
    ShopMatersantFinishingComponent,
    ShopAccesoriesComponent,
    ShopClothingComponent,
    IndexUpcycledComponent,
    IndexMateriaDecorComponent,
    ShopAccesoriesMateriaComponent,
    ShopArtMateriaComponent,
    IndexShopFurnitureComponent,
    DetailTwoComponent,
    ShopCheckoutsComponent,
    WishlistComponent,
    ProductPortfolioComponent,
    InteriorPortfolioComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule,
    UtilsModule
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
