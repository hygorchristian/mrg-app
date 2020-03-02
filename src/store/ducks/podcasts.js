import { createReducer, createActions } from 'reduxsauce';
import lodash from 'lodash';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const findIndex = (arr, id) => {
  let f;

  const filteredElements = arr.filter((item, index) => {
    f = index;
    return item.uid == id;
  });

  if (!filteredElements.length) {
    return false;
  }

  return f;
};

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
