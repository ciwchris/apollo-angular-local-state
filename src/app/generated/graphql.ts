/* tslint:disable */

export interface Query {
  visibilityFilter?: string | null;
  todos?: (Todo | null)[] | null;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Mutation {
  addTodo?: Todo | null;
  toggleTodo?: Todo | null;
}
export interface AddTodoMutationArgs {
  text: string;
}
export interface ToggleTodoMutationArgs {
  id: number;
}

import { Injectable } from "@angular/core";

import * as Apollo from "apollo-angular";

import gql from "graphql-tag";
