import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setPodcasts: ['data'],
});

export const PodcastsTypes = Types;
export const PodcastsActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
});

// Reducer Functions

const setPodcasts = (state, { data }) => ({
  ...state,
  data,
});

// Reducer

export const PodcastsReducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCASTS]: setPodcasts,
});
