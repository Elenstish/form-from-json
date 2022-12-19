# JsonForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

Install all dependencies use npm install

You can input JSON schema in the first tab from form-data.json file or load this file. 

You can load only json or text  file.

If you want to add a custom JSON schema it must be an array of object


    id: number; // should be unique
    label: string;
    name: string;  // camelCase format
    inputType: string; // when type key is ‘input’ it can be text, number, 
               // email, color, url, password, search or tel 
               // system will validate input by this value in the second form
               // otherwise it can be empty “”
    type: string; // input, radio, textarea, checkbox, textEditor
    value: string; // validate value for inputType in string format

All fields in the form are not required

When you switch to the second tab your data in the inputs are reset

The data in the second form will submit only when you change it.

When you submit changes in the second form, the data will be saved 
even if you switch to the first tab. 
The data will be changed when you input or load JSON schema in the first tab.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
