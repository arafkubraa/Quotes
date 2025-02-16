import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';


@Component({
  selector: 'app-product',
  imports: [
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor() {  }

  title= "Quotes"

  products: Product[]=[
    {id:1,name:"Arcane",categoryId:1,quote:"“Bazen ileri adım atmak, birkaç şeyi geride bırakmak demektir.“",imageUrl:"https://i.pinimg.com/736x/48/59/59/4859596fddfd80dffbf8f512bb2f30aa.jpg"},
    {id:1,name:"11.22.63",categoryId:1,quote:"“Seni seviyorum. Şimdi ve gelecekte.“",imageUrl:"https://i.pinimg.com/736x/3a/f1/ef/3af1ef78363bd374d79dbd166ba6c138.jpg"},
    {id:3,name:"Pride and Prejudice",categoryId:2,quote:"“İnsan isteyince mesafenin önemi yoktur.”",imageUrl:"https://i.pinimg.com/736x/3f/ca/fd/3fcafda0612cf921df811a10b76812cf.jpg"},
    {id:4,name:"✨",categoryId:1,quote:"“Gözlerini parlatan şey için savaşmamak ne büyük korkaklık.“",imageUrl:"https://i.pinimg.com/736x/db/06/47/db0647dffe12bfc04d3a266edd92ff8c.jpg"},
    {id:1,name:"Gölge & Kemik",categoryId:2,quote:"“Ben seni her dakika özledim. En kötüsü de neydi biliyor musun? Sana bir şey söylemek için ya da sırf sesini duyabilmek için etrafta seni aramaya alışmışken, günün birinde artık yanımda olmadığını anlamamdı.“",imageUrl:"https://i.pinimg.com/736x/95/b8/ed/95b8ed24f51613bdc9a89c153f03554f.jpg"},
    {id:4,name:"🌑",categoryId:2,quote:"“Güneş gözlerini acıttığı için gölgeleri savunuyorsun.“",imageUrl:"https://i.pinimg.com/736x/07/71/bd/0771bd9f6eec9c9d5c43c1528abd66b2.jpg"},
    {id:4,name:"🌠",categoryId:1,quote:"“Sen bir yıldızsın, zifirin bile örtemediği.“",imageUrl:"https://i.pinimg.com/736x/8b/b3/c2/8bb3c200f7aec7a909aaeb67588ec268.jpg"},
    {id:3,name:"Haruki Murakami",categoryId:2,quote:"“Ama öylece oturup sonsuza kadar yaralarımıza bakamayız.“",imageUrl:"https://i.pinimg.com/736x/af/2c/f1/af2cf190ec17b6f1686fca2d06dfbe22.jpg"}
   ];

  ngOnInit(): void {
  console.log("ProductComponent initialized");
  }

}
