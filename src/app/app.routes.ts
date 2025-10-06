import { Routes } from '@angular/router';
import { ProductosListComponent } from './pages/productos-list/productos-list.component';
import { ProductosViewComponent } from './pages/productos-view/productos-view.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: ProductosListComponent },
    { path: "producto/:_id", component: ProductosViewComponent},
    {path: "**", redirectTo: "home"}
];
