import { OperationConfirmationDialogComponent } from './../../../../components/template/widgets/dialogs/operation-confirmation-dialog/operation-confirmation-dialog.component';
import { Router } from '@angular/router';
import { UiNotificationService } from './../../../../services/ui-notification.service';
import { Component, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../../models/product-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductService } from './../../services/product.service';
import { ListProductsDataSource } from './list-products.datasource';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'c3r-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnDestroy, AfterViewInit {

  constructor(
    private productService: ProductService,
    private uiNotificationService: UiNotificationService,
    private router:Router,
    private dialog: MatDialog)
  {
    this.dataSource = new ListProductsDataSource(productService);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;

  displayedColumns = ['id', 'title', 'category', 'price', 'image', 'actions'];
  dataSource: ListProductsDataSource;  
  products: Product[] = [];
  listProductsObserver: Subscription = Subscription.EMPTY;

  ngAfterViewInit()
  {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
    this.listProductsObserver = this.productService
        .fetch()
        .subscribe(products => 
        {
          this.products = products;
          this.table.dataSource = this.dataSource;
        });
  }

  ngOnDestroy()
  {
    this.listProductsObserver.unsubscribe();
  }

  onDeleteProductClick(event: Event, product: Product)
  {
    this.openDialog(
      product.title, 
      () => {
        this.productService
            .delete(product.id!)
            .subscribe(_ =>
            {
              //window.location.href = window.location.href;
              this.uiNotificationService.displayMessage('Product removed successfully.');

              //https://stackoverflow.com/questions/40983055/how-to-reload-the-current-route-with-the-angular-2-router
              //TODO: create a text file called "Issues that came up during development and how I overcame them.txt"
              //and describe the reason why this routing logic was necessary
              this.router
                  .navigateByUrl('/', { skipLocationChange: true })
                  .then(()=> this.router.navigate(['/product-management']));
            });
      },
      () => {});
  }

  openDialog(
    productName: string,
    onYesClick: () => void,
    onNoClick: () => void) {
    this.dialog.open(
      OperationConfirmationDialogComponent,
      {
        width: '500px',
        data: {
          question: `Do you really wish to remove the product '${productName}' from the catalog?`,
          onYesClick,
          onNoClick,
        }
      });
  }
}