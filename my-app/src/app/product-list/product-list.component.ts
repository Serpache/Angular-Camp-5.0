import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from '../products'
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  @Input() buttonText:string;
  @Output() buttonClick = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

}
