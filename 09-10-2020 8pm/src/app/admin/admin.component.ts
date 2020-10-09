import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  panelOpenState = false;
  isShow = false;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        this.categoryService.setCategories(categories as Category[]);
        this.router.navigate(['', { outlets: { rightPane: 'categories' }, }], { skipLocationChange: true })
        // this.router.navigate(['', { outlets: {  rightPane: 'categories' }, }], { relativeTo: this.aRoute})
        // this.router.navigate(['dashboard', { outlets: {  rightPane: 'categories' }, }]);
        // this.router.navigate(['/categories']);
      });
  }

  addCategory() {
    // this.router.navigate(['/dashboard/edit-category/new'], { relativeTo: this.aRoute});
    // this.router.navigate(['/category/new'], { relativeTo: this.aRoute});
    this.router.navigate(['',{ outlets: { 'rightPane': 'category/new' }, }] ,{ relativeTo: this.aRoute});
  }

  hide() {
    this.isShow = !this.isShow;
  }
}
