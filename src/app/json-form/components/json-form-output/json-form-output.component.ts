import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { JsonFormStoreService } from "../../store/services/json-form-store.service";
import { BaseType } from "../../models/json-form-interface.model";

@Component({
  selector: 'app-json-form-output',
  templateUrl: './json-form-output.component.html',
  styleUrls: ['./json-form-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonFormOutputComponent implements OnInit, OnDestroy {
  public formData: BaseType[] = [];
  public jsonForm: FormGroup;
  public Editor = ClassicEditor;

  private destroy$ = new Subject<boolean>();

  constructor(
	private jsonFormStoreService: JsonFormStoreService,
	private fb: FormBuilder,
  ) {
	this.getData();
  }

  public ngOnInit(): void {
	this.initForm();
	this.setFormValue();
  }

  public ngOnDestroy(): void {
	this.destroy$.next(true);
	this.destroy$.unsubscribe();
  }

  public onChange( { editor }: ChangeEvent, index: number ): void {
	const data = editor.getData();

	this.jsonForm.markAsDirty();
	this.getDisplayFields().controls[index].get('value').patchValue(data);
  }

  public submitForm(): void {
	const inputValue = this.jsonForm.get('items').getRawValue();
	const text = 'Form was successfully updated';

	this.jsonFormStoreService.setForm(inputValue);
	this.jsonFormStoreService.getToastr(text);
	this.jsonForm.markAsPristine();
  }

  private getData(): void {
	this.jsonFormStoreService.selectJsonFromFile$()
	  .pipe(takeUntil(this.destroy$))
	  .subscribe((data: BaseType[]) => this.formData = data);
  }


  private setFormValue(): void {
	const controls = this.getDisplayFields();

	this.getControlAmount(controls, this.formData);
	this.jsonForm.get('items').patchValue(this.formData);
	JsonFormStoreService.addValidator(controls);
  }


  private getControlAmount(controls: FormArray, fields: BaseType[]): void {
	if (fields?.length) {
	  for (let y = 1; y < fields.length; y++) {
		controls.push(this.generateNewFields());
	  }
	}
  }

  private initForm(): void {
	this.jsonForm = this.fb.group({
	  items: this.fb.array([this.generateNewFields()])
	});
  }

  private generateNewFields(): FormGroup {
	return this.fb.group({
	  name: '',
	  label: '',
	  id: 0,
	  inputType: '',
	  type: '',
	  value: ''
	});
  }

  private getDisplayFields(): FormArray {
	return this.jsonForm.get('items') as FormArray;
  }
}
