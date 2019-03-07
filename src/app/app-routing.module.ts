import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './pages/list/list.module#ListPageModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'products',
        loadChildren: './pages/products/products.module#ProductsPageModule'
    },
    {
        path: 'stock-product',
        loadChildren: './pages/stock-product/stock-product.module#StockProductPageModule'
    },
    {
        path: 'sales',
        loadChildren: './pages/sales/sales.module#SalesPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
