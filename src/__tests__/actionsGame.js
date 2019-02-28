
import {
	postGameSuccess,
	POST_GAME_SUCCESS,
	postGameError,
	POST_GAME_ERROR,
	postGameRequest,
	POST_GAME_REQUEST,
	fetchGameByIdSuccess,
	FETCH_GAME_BY_ID_SUCCESS,
	fetchGameByIdError,
	FETCH_GAME_BY_ID_ERROR,
	fetchGameByIdRequest,
	FETCH_GAME_BY_ID_REQUEST,
	joinGameSuccess,
	JOIN_GAME_SUCCESS,
	joinGameError,
	JOIN_GAME_ERROR,
	joinGameRequest,
	JOIN_GAME_REQUEST,
	fetchAllGamesSuccess,
	FETCH_All_GAMES_SUCCESS,
	fetchAllGamesError,
	FETCH_All_GAMES_ERROR,
	fetchAllGamesRequest,
	FETCH_All_GAMES_REQUEST,
	updateScoreSuccess,
	UPDATE_SCORE_SUCCESS,
	updateScoreError,
	UPDATE_SCORE_ERROR,
	updateScoreRequest,
	UPDATE_SCORE_REQUEST
    
} from '../actions/game';

const testSuccess = {
	description: "tester D",
	endScore: "12",
	name: "tester",
	rules: [{}],
	scores: [{}]
}
const testError = {
	messge: "example",
	code: "422",
}

describe('postGameSuccess', () => {
	it('Should return the action from postGameSuccess', () => {
		const action = postGameSuccess(testSuccess);
		expect(action.type).toEqual(POST_GAME_SUCCESS);
		expect(action.data).toEqual(testSuccess);
	});
});

describe('postGameError', () => {
	it('Should return the action from postGameError', () => {
		const action = postGameError(testError);
		expect(action.type).toEqual(POST_GAME_ERROR);
		expect(action.error).toEqual(testError);
	});
});

describe('postGameRequest', () => {
	it('Should return the action from postGameRequest', () => {
		const action = postGameRequest();
		expect(action.type).toEqual(POST_GAME_REQUEST);
	});
});

describe('fetchGameByIdSuccess', () => {
	it('Should return the action from fetchGameByIdSuccess', () => {
		const action = fetchGameByIdSuccess(testSuccess);
		expect(action.type).toEqual(FETCH_GAME_BY_ID_SUCCESS);
		expect(action.data).toEqual(testSuccess);
	});
});

describe('fetchGameByIdError', () => {
	it('Should return the action from fetchGameByIdError', () => {
		const action = fetchGameByIdError(testError);
		expect(action.type).toEqual(FETCH_GAME_BY_ID_ERROR);
		expect(action.error).toEqual(testError);
	});
});

describe('fetchGameByIdRequest', () => {
	it('Should return the action from fetchGameByIdRequest', () => {
		const action = fetchGameByIdRequest();
		expect(action.type).toEqual(FETCH_GAME_BY_ID_REQUEST);
	});
});

describe('joinGameSuccess', () => {
	it('Should return the action from joinGameSuccess', () => {
		const action = joinGameSuccess(testSuccess);
		expect(action.type).toEqual(JOIN_GAME_SUCCESS);
		expect(action.data).toEqual(testSuccess);
	});
});

describe('joinGameError', () => {
	it('Should return the action from joinGameError', () => {
		const action = joinGameError(testError);
		expect(action.type).toEqual(JOIN_GAME_ERROR);
		expect(action.error).toEqual(testError);
	});
});

describe('joinGameRequest', () => {
	it('Should return the action from joinGameRequest', () => {
		const action = joinGameRequest();
		expect(action.type).toEqual(JOIN_GAME_REQUEST);
	});
});

describe('fetchAllGamesSuccess', () => {
	it('Should return the action from fetchAllGamesSuccess', () => {
		const action = fetchAllGamesSuccess(testSuccess);
		expect(action.type).toEqual(FETCH_All_GAMES_SUCCESS);
		expect(action.allGames).toEqual(testSuccess);
	});
});

describe('fetchAllGamesError', () => {
	it('Should return the action from fetchAllGamesError', () => {
		const action = fetchAllGamesError(testError);
		expect(action.type).toEqual(FETCH_All_GAMES_ERROR);
		expect(action.error).toEqual(testError);
	});
});

describe('fetchAllGamesRequest', () => {
	it('Should return the action from fetchAllGamesRequest', () => {
		const action = fetchAllGamesRequest();
		expect(action.type).toEqual(FETCH_All_GAMES_REQUEST);
	});
});

describe('updateScoreSuccess', () => {
	it('Should return the action from updateScoreSuccess', () => {
		const action = updateScoreSuccess(testSuccess);
		expect(action.type).toEqual(UPDATE_SCORE_SUCCESS);
		expect(action.data).toEqual(testSuccess);
	});
});

describe('updateScoreError', () => {
	it('Should return the action from updateScoreError', () => {
		const action = updateScoreError(testError);
		expect(action.type).toEqual(UPDATE_SCORE_ERROR);
		expect(action.error).toEqual(testError);
	});
});

describe('updateScoreRequest', () => {
	it('Should return the action from updateScoreRequest', () => {
		const action = updateScoreRequest();
		expect(action.type).toEqual(UPDATE_SCORE_REQUEST);
	});
});