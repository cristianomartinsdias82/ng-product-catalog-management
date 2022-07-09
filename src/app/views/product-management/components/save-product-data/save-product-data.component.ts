import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiNotificationService } from 'src/app/services/ui-notification.service';
import { ProductService } from '../../services/product.service';
import { Product } from './../../models/product-model';

@Component({
  selector: 'c3r-save-product-data',
  templateUrl: './save-product-data.component.html',
  styleUrls: ['./save-product-data.component.scss']
})
export class SaveProductDataComponent implements OnInit {

  returnUrl = '/product-management';
  formIsInEditMode = false;
  queryParamsSubscription:Subscription = Subscription.EMPTY;

  product: Product = {
    title: '',
    category: '',
    description: '',
    price: 0,
    image: '',
    rating: {
      count : 0,
      rate : 0
    }
  };

  get formTitle()
  {
    return this.formIsInEditMode ? this.product.title : 'New product';
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private uiNotificationService: UiNotificationService) { }

  ngOnInit()
  {
    this.queryParamsSubscription = this.activatedRoute.params.subscribe(params =>
    {
      this.loadProductData(params['id']);

      this.formIsInEditMode = params['id'] != null;
    });
  }

  ngOnDestroy()
  {
    this.queryParamsSubscription.unsubscribe();
  }

  onSaveClick(event: Event)
  {
    this.productService
        .save(this.product)
        .subscribe(_ => 
        {
          this.uiNotificationService.displayMessage('Message from the component!');

          this.navigateToProductListing();
        });
  }

  onCancelClick(event: Event)
  {
    this.navigateToProductListing();
  }

  loadProductData(id?: number)
  {
    if (!id)
      return;

    this.productService
        .getById(id!)
        .subscribe(p =>
        {
          if (!p)
          {
            this.uiNotificationService.displayMessage(`Product with id ${id} does not exist!`);
            this.navigateToProductListing();

            return;
          }

          this.product = p;
        });
  }

  navigateToProductListing()
  {
    this.router.navigate([this.returnUrl]);
  }
}
