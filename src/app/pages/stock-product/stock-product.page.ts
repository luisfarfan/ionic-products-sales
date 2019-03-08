import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../../data';
import {AuthService} from '../../providers/auth.service';

@Component({
    selector: 'app-stock-product',
    templateUrl: './stock-product.page.html',
    styleUrls: ['./stock-product.page.scss'],
})
export class StockProductPage implements OnInit {
    products = PRODUCTS;
    auth = AuthService.getUserAuthenticated();
    date = new Date();

    constructor() {
    }

    ngOnInit() {
    }

}
