import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductManagementComponent } from './views/product-management/product-management.component';
import { ReverseForUseExampleComponent } from './views/reverse-for-use-example/reverse-for-use-example.component';
import { SaveProductDataComponent } from './views/product-management/components/save-product-data/save-product-data.component';
import { ListProductsComponent } from './views/product-management/components/list-products/list-products.component';

import { RedDirective } from './directives/red.directive';
import { ReverseForDirective } from './directives/reverse-for.directive';

//Schematics import
import { TableCreationSchematicComponent } from './views/product-management/components/list-products/table-creation-schematic/table-creation-schematic.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//L10n import
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { OperationConfirmationDialogComponent } from './components/template/widgets/dialogs/operation-confirmation-dialog/operation-confirmation-dialog.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductManagementComponent,
    RedDirective,
    ReverseForDirective,
    ReverseForUseExampleComponent,
    SaveProductDataComponent,
    ListProductsComponent,
    TableCreationSchematicComponent,
    OperationConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }