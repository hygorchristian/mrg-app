import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setTrack: ['track'],
  addToPlaylist: ['track'],
  play: null,
  pause: null,
  next: null,
  prev: null,
  reset: null,
});

export const PlayerTypes = Types;
export const PlayerActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  playlist: [],
  current: null,
  playing: false,
});

// Reducer Functions

const addToPlaylist = (state, { track }) =>
  state.merge({ playlist: [...state.playlist, track] });

const setTrack = (state, { track }) => state.merge({ current: track });
const play = state => state.merge({ playing: true });
const pause = state => state.merge({ playing: false });
const reset = state =>
  state.merge({ podcast: null, current: null, playing: false });

// Reducer

export const PlayerReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_PLAYLIST]: addToPlaylist,
  [Types.SET_TRACK]: setTrack,
  [Types.PLAY]: play,
  [Types.PAUSE]: pause,
  [Types.RESET]: reset,
});
