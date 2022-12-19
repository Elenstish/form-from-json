import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl } from "@angular/forms";

import { JsonFormStoreService } from "../../store/services/json-form-store.service";
import { FileContent } from "../../models/json-form-interface.model";

@Component({
  selector: 'app-json-form-schema',
  templateUrl: './json-form-schema.component.html',
  styleUrls: ['./json-form-schema.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonFormSchemaComponent implements OnDestroy {
  public jsonFileControl: FormControl = new FormControl('');

  constructor(
	private jsonFormStoreService: JsonFormStoreService
  ) {}

  public ngOnDestroy(): void {
	this.jsonFileControl.setValue('');
  }

  public submitForm(): void {
	if (!this.jsonFileControl.getRawValue()) {
	  const text = 'You do not add data';
	  this.jsonFormStoreService.setJsonFromInput('');
	  this.jsonFormStoreService.getToastr(text);
	  return;
	}
	this.jsonFormStoreService.setJsonFromInput(this.jsonFileControl.getRawValue());

	const text = 'Data was successfully added to the app. Please, go to the next tab';
	this.jsonFormStoreService.getToastr(text);
  }

  public handleFileInput(event: Event): void {
	const allowedExtensions = ['application/json', 'text/plain'];
	const input = event.target as HTMLInputElement;

	if (!input.files?.length) {
	  return;
	}

	if (!allowedExtensions.includes(input.files[0].type)) {
	  const text = 'Upload only json or txt';
	  this.jsonFormStoreService.getToastr(text);
	  return;
	}

	this.readFileContent(input.files[0]);
	const text = 'File was successfully added to the app. Please, go to the next tab';
	this.jsonFormStoreService.getToastr(text);
  }

  private readFileContent(file: File): void {
	let reader = new FileReader();

	let attachedFile: FileContent;

	reader.onload = () => {
	  attachedFile = reader.result;
	  this.jsonFormStoreService.setJsonFromFile(attachedFile);
	};
	reader.readAsText(file);
  }
}
