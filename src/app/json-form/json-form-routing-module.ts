import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { JsonFormGroupComponent } from "./components/json-form-group/json-form-group.component";

const jsonFormRoutes: Routes = [
    {
        path: '',
        component: JsonFormGroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(jsonFormRoutes)],
    exports: [RouterModule]
})

export class JsonFormRoutingModule {}
