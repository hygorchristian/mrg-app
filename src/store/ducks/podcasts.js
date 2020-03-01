import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setPodcasts: ['data'],
  setPodcastPosition: ['id', 'position', 'duration'],
});

export const PodcastsTypes = Types;
export const PodcastsActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  podcastsPosition: {},
});

// Reducer Functions

const setPodcasts = (state, { data }) => ({
  ...state,
  data,
});

const setPodcastPosition = (state, { id, position, duration }) => ({
  ...state,
  podcastsPosition: {
    ...state.podcastsPosition,
    [id]: {
      id,
      position,
      duration,
    },
  },
});

// Reducer

export const PodcastsReducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCASTS]: setPodcasts,
  [Types.SET_PODCAST_POSITION]: setPodcastPosition,
});
