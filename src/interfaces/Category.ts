import { Dispatch } from 'react';
import { Product } from './Product';

export interface Category {
  _id?: string | number;
  // id?: string | number;
  name: string;
  slug?: string;
  description: string;
  products: Product[];
}

export interface StateCategory {
  categories: Category[];
  error: string | null;
}

export enum CategoryAction {
  SET_CATEGORIES = 'SET_CATEGORIES',
  ADD_CATEGORIES = 'ADD_CATEGORIES',
  UPDATE_CATEGORIES = 'UPDATE_CATEGORIES',
  DELETE_CATEGORIES = 'DELETE_CATEGORIES',
}

interface SET_CATEGORIES {
  type: CategoryAction.SET_CATEGORIES;
  payload: Category[];
}
interface ADD_CATEGORIES {
  type: CategoryAction.ADD_CATEGORIES;
  payload: Category;
}
interface UPDATE_CATEGORIES {
  type: CategoryAction.UPDATE_CATEGORIES;
  payload: Category;
}
interface DELETE_CATEGORIES {
  type: CategoryAction.DELETE_CATEGORIES;
  payload: Category | string | number;
}
export type Category_Action =
  | SET_CATEGORIES
  | ADD_CATEGORIES
  | UPDATE_CATEGORIES
  | DELETE_CATEGORIES;

export interface CategoryContextType {
  state: StateCategory;
  dispatch: Dispatch<Category_Action>;
}
export interface CategoryProviderProps {
  children: React.ReactNode;
}
