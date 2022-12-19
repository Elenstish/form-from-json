import { createAction, props } from "@ngrx/store";

import { BaseType } from "../../models/json-form-interface.model";

const jsonFormActionTypes = {
  inputJsonSchema: '[Json Form] input json schema',
  loadJsonSchema: '[Json Form] load json schema',
  loadForm: '[Json Form] load json schema'
};

export const inputJsonData = createAction(
  jsonFormActionTypes.inputJsonSchema,
  props<{ payload: BaseType[] }>()
);

export const loadJsonData = createAction(
  jsonFormActionTypes.loadJsonSchema,
  props<{ payload: BaseType[] }>()
);

export const loadForm = createAction(
  jsonFormActionTypes.loadForm,
  props<{ payload: BaseType[] }>()
);
