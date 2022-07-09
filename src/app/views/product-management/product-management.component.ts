import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'c3r-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute ) {}

  onNewClick(event: Event)
  {
    this.router.navigate(['new'], { relativeTo : this.activatedRoute });
  }
}
