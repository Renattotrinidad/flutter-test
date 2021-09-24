import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexStudioComponent } from './core/components/index-studio/index-studio.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageCaseDetailComponent } from './core/components/page-case-detail/page-case-detail.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { PortfolioGridThreeComponent } from './core/components/portfolio-grid-three/portfolio-grid-three.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { PortfolioMasonryTwoComponent } from './core/components/portfolio-masonry-two/portfolio-masonry-two.component';
import { combineLatest } from 'rxjs/internal/operators';
import { ArtComponent } from './core/components/art/art.component';
import { AboutusTwoComponent } from './core/components/aboutus-two/aboutus-two.component';
import { CustomMadeComponent } from './core/components/custom-made-art/custom-made.component';
import { ArtTypeComponent } from './core/components/art-type/art-type.component';
import { SpaceComponent } from './core/components/space/space.component';
import { CustomArtworkComponent } from './core/components/custom-artwork/custom-artwork.component';
import { SubmitComponent } from './core/components/submit/submit.component';
const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexStudioComponent },
      { path: 'index-studio', component: IndexStudioComponent },
      { path: 'page-case-detail', component: PageCaseDetailComponent },
      { path: 'page-services', component: PageServicesComponent },
      { path: 'shop-products', component: ShopProductsComponent },
      { path: 'portfolio-grid-three', component: PortfolioGridThreeComponent },
      { path: 'portfolio-masonry-two', component: PortfolioMasonryTwoComponent },
      { path: '', redirectTo: 'index-shop', pathMatch: "full" },
      { path: 'shop-cart', component: ShopCartComponent },
      { path: 'shop-product-detail', component: ShopProductDetailComponent },
      { path: 'shop-products', component: ShopProductsComponent },
      { path: 'aboutus', component: AboutusTwoComponent },
      { path: 'art', component: ArtComponent },
      { path: 'custome-made', component: CustomMadeComponent  },
      { path: 'art-type', component: ArtTypeComponent },
      { path: 'space', component: SpaceComponent },
      { path: 'custome-artwork', component: CustomArtworkComponent },
      { path: 'submit', component: SubmitComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
