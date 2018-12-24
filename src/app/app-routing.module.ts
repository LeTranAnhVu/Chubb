import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from '../app/pages/about/about.component';
import { ProductComponent } from '../app/pages/product/product.component';




const routes: Routes = [
    {path: 'about' , component: AboutComponent},
    {path: 'product' , component: ProductComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }