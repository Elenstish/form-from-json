import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { JsonFormGroupComponent } from './components/json-form-group/json-form-group.component';
import { JsonFormSchemaComponent } from './components/json-form-schema/json-form-schema.component';
import { JsonFormOutputComponent } from './components/json-form-output/json-form-output.component';
import { JsonFormRoutingModule } from "./json-form-routing-module";

@NgModule({
  declarations: [
    JsonFormGroupComponent,
    JsonFormSchemaComponent,
    JsonFormOutputComponent
  ],
  imports: [
    CommonModule,
    JsonFormRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TextFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    CKEditorModule
  ]
})
export class JsonFormModule { }
