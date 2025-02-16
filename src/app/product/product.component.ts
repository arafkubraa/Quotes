import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductService } from '../services/product.service';





@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FormsModule,
    ProductFilterPipe
],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) {  }

  title= "Quotes"
  filterText=""
  products!: Product[];



  ngOnInit(): void {

    this.productService.getQuotes().subscribe(data=>{
     this.products=data
    })

  }

  goSite(url: string) {
    if (url) {
      window.location.href = url;
    } else {
      console.warn("URL bulunamadı!");
    }
  }

}
