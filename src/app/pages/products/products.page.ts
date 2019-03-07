import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../../data';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
    products = PRODUCTS;

    constructor() {
    }

    ngOnInit() {
    }

}
