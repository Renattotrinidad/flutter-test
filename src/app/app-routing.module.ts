import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexStudioComponent } from './core/components/index-studio/index-studio.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageCaseDetailComponent } from './core/components/page-case-detail/page-case-detail.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { PortfolioGridThreeComponent } from './core/components/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioMasonryTwoComponent } from './core/components/portfolio-masonry-two/portfolio-masonry-two.component';
import { combineLatest } from 'rxjs/internal/operators';

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
