import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './category';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  constructor() {}
  title=" Kategoriler"

  categories: Category[]= [
    {id:1, name: " Dizi Alıntıları" },
    {id:2, name: " Film Alıntıları" },
    {id:3, name: " Kitap Alıntıları" },
    {id:4, name: " Sözler" },
    {id:5, name: " Şarkı Sözleri" }



  ]

ngOnInit(): void {

}
}
