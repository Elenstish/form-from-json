import { Action, createReducer, on } from "@ngrx/store";

import { inputJsonData, loadForm, loadJsonData } from "../actions/json-form.actions";
import { BaseType } from "../../models/json-form-interface.model";

export const initialState: BaseType[] = [];

const reducer = createReducer<BaseType[]>(
  initialState,
  on(inputJsonData, (state, { payload }) => payload),
  on(loadJsonData, (state, { payload }) => payload),
  on(loadForm, (state, { payload }) => payload)
);

export function jsonFormReducer(state: BaseType[], action: Action) {
    return reducer(state, action);
}
