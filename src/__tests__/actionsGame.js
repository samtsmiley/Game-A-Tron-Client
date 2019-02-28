import { API_BASE_URL } from '../config'

import {
    postGameSuccess,
    postGameError,
    postGameRequest,
    postGame,
    fetchGameByIdRequest,
    fetchGameByIdSuccess,
    fetchGameByIdError,
    fetchGameById,
    joinGameSuccess,
    joinGameError,
    joinGameRequest,
    joinGameSuccessSetState,
    fetchAllGamesRequest,
    fetchAllGamesSuccess,
    fetchAllGamesError,
    fetchAllGames,
    updateScoreRequest,
    updateScoreSuccess,
    updateScoreError,
    updateScore
} from '../actions/game';

describe('postGame', () => {
    it('Should return the action', () => {
        const testPost = {
            description: "tester D",
            endScore: "12",
            name: "tester",
            rules: [{}],
            scores: [{}]
        }
        const action = postGame(testPost);
        // expect(action.type).toEqual(POST_GAME);
    });
});

