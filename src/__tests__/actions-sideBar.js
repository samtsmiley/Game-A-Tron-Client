import {sideBarReducer} from '../reducers/sideBar-reducer';
import { fetchMyGamesRequest,
         showProfile,
         showAllPosts,
         showOneGame,
         showNewGame,
         showFindGame } from '../actions/sideBar-actions';

import { API_BASE_URL } from '../config';

describe('fetchMyGamesRequest', () => {

  it('Should return the action', () => {

    const testSend = {

      userId:'testuserID'

    }

    const action = fetchMyGamesRequest(testSend);

  });

  it('Should return the myGames array', () => {

    const testSend = {

      myGames:[{testGame_1:'testGame_1'},{testGame_2:'testGame_2'}]

    }

    const action = fetchMyGamesRequest(testSend);

  });

});

describe('showProfile', () => {

  it('Should return the action', () => {

    const testSend = {

      showProfile:true

    }

    const action = showProfile(testSend);

  });

});

describe('showAllPosts', () => {

  it('Should return the action', () => {

    const testSend = {

      showAllPosts:true

    }

    const action = showAllPosts(testSend);

  });

});

describe('showOneGame', () => {

  it('Should return the action', () => {

    const testSend = {

      showOneGame:true

    }

    const action = showOneGame(testSend);

  });


});

describe('showNewGame', () => {

  it('Should return the action', () => {

    const testSend = {

      showNewGame:true

    }

    const action = showNewGame(testSend);

  });


});

describe('showFindGame', () => {

  it('Should return the action', () => {

    const testSend = {

      showFindGame:true

    }

    const action = showFindGame(testSend);

  });


});


