import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm: FormGroup;
  category: Category;
  editMode = false;

  constructor(private router: Router,
              private aRoute: ActivatedRoute,
              public categoryService: CategoryService) { }

  ngOnInit(): void {
    let categoryId = +this.aRoute.snapshot.params['id'];
    if(categoryId) {
      this.editMode = true;
      this.category = this.categoryService.getCategoryById(categoryId);
    } else {
      this.category = { categoryId: 0, categoryName: null, categoryType: null, createTime: null, updateTime: null};
    }

    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.categoryId),
      name: new FormControl(this.category.categoryName, [Validators.required]),
      createTime: new FormControl(this.category.createTime, [Validators.required]),
      // category: new FormControl(this.category.categoryType, [Validators.required]),
      // author: new FormControl(this.category.author),
      // price: new FormControl(this.category.price)
    });
  }

  addOrEditCategory() {
    if(this.editMode) {
      // this.productForm.controls.id.setValue(this.product.id);
      //this.categoryService.updateCategory(this.categoryForm.value);
      this.categoryService.addCategory(this.categoryForm.value);
    } else {
      this.categoryService.addCategory(this.categoryForm.value);
    }
    this.router.navigate(["/categories"]);
  }
}
