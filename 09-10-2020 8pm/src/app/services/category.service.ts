import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  constructor(private http: HttpClient) { }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  // get getCategories() {
  //   return this.categories;
  // }
  getCategories() {
    return this.http.get(`${apiUrl}/admin/categories`);
  }

  getCategoryById(id: number) {
    return this.categories.find(category => {
      return category.categoryId === id
  });
  }

  addCategory(category: Category) {
    this.http.post<Category>(`${apiUrl}/admin/category/new`, category)
            .subscribe(data => {
                this.categories.push(data);
                console.log("Category added successfully");
            });
  }

  updateCategory(category: Category) {
    this.http.put<Category>(`${apiUrl}/admin/category`, category)
            .subscribe(data => {
                this.categories.push(data);
            });
  }
}
