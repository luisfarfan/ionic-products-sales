import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../../data';
import {AuthService} from '../../providers/auth.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
    products = PRODUCTS;
    auth = AuthService.getUserAuthenticated();
    date = new Date();

    constructor() {
    }

    ngOnInit() {
    }

}
