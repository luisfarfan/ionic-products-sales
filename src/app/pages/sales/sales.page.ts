import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../../data';
import {AuthService} from '../../providers/auth.service';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.page.html',
    styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
    products = PRODUCTS;
    auth = AuthService.getUserAuthenticated();
    date = new Date();

    constructor() {
    }

    ngOnInit() {
    }

}
