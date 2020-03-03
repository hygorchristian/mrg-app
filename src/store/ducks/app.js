import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  toggleOrder: null,
  setMenuOpen: ['menuOpen'],
  setFilter: ['filter'],
});

export const AppTypes = Types;
export const AppActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  order: 'asc',
  filter: 'all',
  menuOpen: false,
});

// Reducer Functions

const toggleOrder = state => ({
  ...state,
  order: state.order === 'asc' ? 'desc' : 'asc',
});

const setMenuOpen = (state, { menuOpen }) => ({
  ...state,
  menuOpen,
});

const setFilter = (state, { filter }) => ({
  ...state,
  filter,
});

// Reducer

export const AppReducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_ORDER]: toggleOrder,
  [Types.SET_MENU_OPEN]: setMenuOpen,
  [Types.SET_FILTER]: setFilter,
});
