import {Component, OnInit} from '@angular/core';
import {PRODUCTS, USERS} from '../../data';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.page.html',
    styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
    products = PRODUCTS;
    auth = AuthService.getUserAuthenticated();
    date = new Date();
    users = USERS;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToProducts(): void {
        this.router.navigate(['products']);
    }

}
