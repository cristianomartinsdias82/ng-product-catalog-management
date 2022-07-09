import { ReverseForUseExampleComponent } from './views/reverse-for-use-example/reverse-for-use-example.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductManagementComponent } from './views/product-management/product-management.component';
import { SaveProductDataComponent } from './views/product-management/components/save-product-data/save-product-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-management', component: ProductManagementComponent, pathMatch: 'full' },
  { path: 'product-management/new', component: SaveProductDataComponent, pathMatch: 'full' },
  { path: 'product-management/edit/:id', component: SaveProductDataComponent, pathMatch: 'full' },
  { path: 'reverse-form-loop-example', component: ReverseForUseExampleComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
