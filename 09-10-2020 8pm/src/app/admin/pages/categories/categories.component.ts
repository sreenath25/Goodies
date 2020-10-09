import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    categories: Category[];
  constructor(private categoryService: CategoryService,
              private router: Router,
              private aRoute: ActivatedRoute) {
                // this.categories = this.categoryService.categories;
               }

  ngOnInit(): void {
    this.categories = this.categoryService.categories;
  }

  goToCategory(categoryId: number) {
    this.router.navigate(['/category/' + categoryId], { relativeTo: this.aRoute});
  }

}
