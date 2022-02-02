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
import { ShopCheckoutsComponent } from './shop-checkouts/shop-checkouts.component';
import { PortfolioMasonryTwoComponent } from './core/components/portfolio-masonry-two/portfolio-masonry-two.component';
import { combineLatest } from 'rxjs/internal/operators';
import { ArtComponent } from './core/components/art/art.component';
import { AboutusTwoComponent } from './core/components/aboutus-two/aboutus-two.component';
import { CustomMadeComponent } from './core/components/custom-made-art/custom-made.component';
import { ArtTypeComponent } from './core/components/art-type/art-type.component';
import { SpaceComponent } from './core/components/space/space.component';
import { CustomArtworkComponent } from './core/components/custom-artwork/custom-artwork.component';
import { SubmitComponent } from './core/components/submit/submit.component';
import { PageContactDetailComponent } from './page-contact-detail/page-contact-detail.component';
import { IndexShopComponent } from './index-shop/index-shop.component';
import { IndexMateriaDecorComponent } from './index-materia-decor/index-materia-decor.component';
import { IndexShopFurnitureComponent } from './index-shop-furniture/index-shop-furniture.component';
import { IndexShopWallComponent } from './index-shop-wall/index-shop-wall.component';
import { IndexUpcycledComponent } from './index-upcycled/index-upcycled.component';
import { ShopAccesoriesComponent } from './shop-accesories/shop-accesories.component';
import { ShopAccesoriesMateriaComponent } from './shop-accesories-materia/shop-accesories-materia.component';
import { ShopArtMateriaComponent } from './shop-art-materia/shop-art-materia.component';
import { ShopClothingComponent } from './shop-clothing/shop-clothing.component';
import { ShopMatersantDecorComponent } from './shop-matersant-decor/shop-matersant-decor.component';
import { ShopMatersantFinishingComponent } from './shop-matersant-finishing/shop-matersant-finishing.component';
import { DetailTwoComponent } from './detail-two/detail-two.component';
import { WishlistComponent } from './wishlist/wishlist.component';

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
      { path: 'shop-checkouts', component: ShopCheckoutsComponent },
      { path: 'shop-product-detail', component: ShopProductDetailComponent },
      { path: 'shop-products', component: ShopProductsComponent },
      { path: 'aboutus', component: AboutusTwoComponent },
      { path: 'art', component: ArtComponent },
      { path: 'custome-made', component: CustomMadeComponent  },
      { path: 'art-type', component: ArtTypeComponent },
      { path: 'space', component: SpaceComponent },
      { path: 'custome-artwork', component: CustomArtworkComponent },
      { path: 'submit', component: SubmitComponent },
      {path:  'contactus', component:PageContactDetailComponent},
      {path: 'index-shop', component:IndexShopComponent},
      { path: 'materia-decor', component:IndexMateriaDecorComponent } ,
      {path: 'shop-furniture', component: IndexShopFurnitureComponent }, 
      { path: 'shop-wall', component:IndexShopWallComponent } ,
      {path: 'index-upcycle', component: IndexUpcycledComponent } ,
      {path: 'shop-accesories', component: ShopAccesoriesComponent } ,
      {path: 'accesories-materia', component: ShopAccesoriesMateriaComponent },
      { path: 'art-materia', component:ShopArtMateriaComponent } ,
      { path: 'shop-clothing', component:ShopClothingComponent } ,
      { path: 'matersant-decor', component:ShopMatersantDecorComponent } ,
      { path: 'matersant-finishing', component:ShopMatersantFinishingComponent } ,
      { path: 'detail-two', component: DetailTwoComponent },
      { path: 'wishlist', component: WishlistComponent },
      
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
