import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'json-form',
        pathMatch: 'full'
    },
    {
        path: 'json-form',
        loadChildren: () => import('./json-form/json-form.module').then(m => m.JsonFormModule),
        data: { preload: true, delay: false, title: 'Json Form' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
