import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/pages/about/about.component';
import { Buyonline4Component } from '../app/pages/buyonline4/buyonline4.component';
import { ProductComponent } from '../app/pages/product/product.component';
import { MuaOnlineBuoc1Component } from './pages/mua-online-buoc1/mua-online-buoc1.component';
import { MuaOnlineBuoc2Component } from './pages/mua-online-buoc2/mua-online-buoc2.component';






const routes: Routes = [
    {path: 'about' , component: AboutComponent},
    {path: 'product' , component: ProductComponent},
    {path: 'buyonline4' , component: Buyonline4Component},
    {path: 'MuaOnlineBuoc1Component' , component: MuaOnlineBuoc1Component},
    {path: 'MuaOnlineBuoc2Component' , component: MuaOnlineBuoc2Component},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
