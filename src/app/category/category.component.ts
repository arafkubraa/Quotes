import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) {}
  title=" Kategoriler"

  categories!: Category[];

ngOnInit(): void {
  this.categoryService.getCategories().subscribe(data=>{
    this.categories=data
   })

}
}
