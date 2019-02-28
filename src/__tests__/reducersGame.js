import game from '../reducers/game'
import {
  postGameSuccess,
  postGameError,
  postGameRequest,
  fetchGameByIdSuccess,
  fetchGameByIdError,
  fetchGameByIdRequest,
  joinGameSuccess,
  joinGameError,
  joinGameRequest,
  fetchAllGamesSuccess,
  fetchAllGamesError,
  fetchAllGamesRequest,
  updateScoreSuccess,
  updateScoreError,
  updateScoreRequest,
  
} from '../actions/game';

describe('gameReducer', () => {
  // Set up some dummy data
    const testData = {
      description: "tester D",
      endScore: "12",
      name: "tester",
      rules: [],
      scores: [],
      participants: []
  }

  const afterSuccessState = {
    error: null,
    loading: false,
    data: testData,
    allGames: null
  }

  const afterAllGameSuccessState = {
    error: null,
    loading: false,
    data: {participants: []},
    allGames: {
      description: "tester D",
      endScore: "12",
      name: "tester",
      participants: [],
      rules: [],
      scores: [],}
  }

  const afterRequestState = {
    error: null,
    loading: true,
    data: {participants: []},
    allGames: null
  }

  const afterErrorState = {
    error: {
      messge: "example",
      code: "422",
    },
    loading: false,
    data: {participants: []},
    allGames: null
  }

  it('Should set the initial state when nothing is passed in', () => {
    const state = game(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      error: null,
      loading: false,
      data: {participants: []},
      allGames: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = game(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('postGameSuccess', () => {
    it('Should update data', () => {
      let state;
      state = game(state, postGameSuccess(testData));
      expect(state).toEqual(afterSuccessState);
    });
  });

  describe('fetchGameByIdSuccess', () => {
    it('Should update data', () => {
      let state;
      state = game(state, fetchGameByIdSuccess(testData));
      expect(state).toEqual(afterSuccessState);
    });
  });

  describe('joinGameSuccess', () => {
    it('Should update data', () => {
      let state;
      state = game(state, joinGameSuccess(testData));
      expect(state).toEqual(afterSuccessState);
    });
  });

  describe('updateScoreSuccess', () => {
    it('Should update data', () => {
      let state;
      state = game(state, updateScoreSuccess(testData));
      expect(state).toEqual(afterSuccessState);
    });
  });

  describe('fetchAllGamesSuccess', () => {
    it('Should update myGames', () => {
      let state;
      state = game(state, fetchAllGamesSuccess(testData));
      expect(state).toEqual(afterAllGameSuccessState);
    });
  });

  describe('postGameRequest', () => {
    it('Should update loading', () => {
      let state;
      state = game(state, postGameRequest({loading:true}));
      expect(state).toEqual(afterRequestState);
    });
  });

  describe('fetchGameByIdRequest', () => {
    it('Should update loading', () => {
      let state;
      state = game(state, fetchGameByIdRequest({loading:true}));
      expect(state).toEqual(afterRequestState);
    });
  });

  describe('joinGameRequest', () => {
    it('Should update loading', () => {
      let state;
      state = game(state, joinGameRequest({loading:true}));
      expect(state).toEqual(afterRequestState);
    });
  });

  describe('fetchAllGamesRequest', () => {
    it('Should update loading', () => {
      let state;
      state = game(state, fetchAllGamesRequest({loading:true}));
      expect(state).toEqual(afterRequestState);
    });
  });

  describe('updateScoreRequest', () => {
    it('Should update loading', () => {
      let state;
      state = game(state, updateScoreRequest({loading:true}));
      expect(state).toEqual(afterRequestState);
    });
  });

  describe('postGameError', () => {
    it('Should update error', () => {
      let state;
      state = game(state, postGameError({
        messge: "example",
        code: "422",
      }));
      expect(state).toEqual(afterErrorState);
    });
  });

  describe('fetchGameByIdError', () => {
    it('Should update error', () => {
      let state;
      state = game(state, fetchGameByIdError({
        messge: "example",
        code: "422",
      }));
      expect(state).toEqual(afterErrorState);
    });
  });

  describe('joinGameError', () => {
    it('Should update error', () => {
      let state;
      state = game(state, joinGameError({
        messge: "example",
        code: "422",
      }));
      expect(state).toEqual(afterErrorState);
    });
  });

  describe('fetchAllGamesError', () => {
    it('Should update error', () => {
      let state;
      state = game(state, fetchAllGamesError({
        messge: "example",
        code: "422",
      }));
      expect(state).toEqual(afterErrorState);
    });
  });

  describe('updateScoreError', () => {
    it('Should update error', () => {
      let state;
      state = game(state, updateScoreError({
        messge: "example",
        code: "422",
      }));
      expect(state).toEqual(afterErrorState);
    });
  });
});
