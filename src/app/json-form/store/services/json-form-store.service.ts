import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { JsonFormState } from "../../models/json-form-state.model";
import { inputJsonData, loadForm, loadJsonData } from "../actions/json-form.actions";
import { FileContent, BaseType } from "../../models/json-form-interface.model";

@Injectable({
  providedIn: 'root'
})
export class JsonFormStoreService {

  public static addValidator(controls: FormArray): void {
	for (const control of controls.controls) {
	  const validatorName = control.get('inputType').value;
	  const formControl: AbstractControl = control.get('value');

	  if (validatorName) {
		formControl.setValidators(Validators[validatorName]);
		formControl.updateValueAndValidity();
	  }
	}
  }

  private static convertData(data: string): BaseType[] {
	let jsonData = JSON.parse(data);
	let newData: BaseType[] = [];

	for (let key in jsonData) {
	  if (jsonData.hasOwnProperty(key)) {
		newData = [...newData, jsonData[key]];
	  }
	}

	return newData;
  }

  private static getData(data: FileContent): BaseType[] {
	return data ? JsonFormStoreService.convertData(data as string) : [];
  }

  constructor(
	private store: Store<JsonFormState>,
	private snackBar: MatSnackBar
  ) { }

  public setJsonFromInput(data: FileContent): void {
	let newDate: BaseType[] = JsonFormStoreService.getData(data as string);
	this.store.dispatch(inputJsonData({ payload: newDate }));
  }

  public setJsonFromFile(data: FileContent): void {
	let newDate: BaseType[] = JsonFormStoreService.getData(data as string);
	this.store.dispatch(loadJsonData({ payload: newDate }));
  }

  public setForm(data: BaseType[]): void {
	this.store.dispatch(loadForm({ payload: data }));
  }

  public selectJsonFromFile$(): Observable<BaseType[]> {
	return this.store.pipe(select('jsonSchema'));
  }

  public getToastr(text: string): void {
	this.snackBar.open(
	  text,
	  'x',
	  { duration: 5000 }
	);
  }
}
