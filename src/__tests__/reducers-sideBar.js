import sideBar from '../reducers/sideBar-reducer';
import { fetchMyGamesRequest, fetchMyGamesSuccess, showProfile, showAllPosts, showOneGame, showNewGame, showFindGame} from '../actions/sideBar-actions';
import rootReducer from '../reducers';

describe('sideBar', () => {
  
    it('Should set the initial state when nothing is passed in', () => {
        const action = { type: 'UNKNOWN'};
        
        const initialState = {
            showProfile:true, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:[],
            loadingComplete:false,
            loading:false,
            error:null
            
          };
        
        expect(sideBar(undefined,action)).toEqual(initialState);
         
    });
});

describe('sideBar-SHOW_PROFILE', () => {

    it('Should set showProfile key to boolean true and the other show... keys to boolean false', () => {

        const newState = {
            showProfile:true, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:[],
            loadingComplete:false,
            loading:false,
            error:null
            
          };

        const action = { type: 'SHOW_PROFILE'};

        expect(sideBar(undefined,action)).toEqual(newState);
  
    });

});
 
describe('sideBar-SHOW_ALL_POSTS', () => {

    it('Should set showAllPosts key to boolean true and the other show... keys to boolean false', () => {

        const newState = {
            showProfile:false, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:true,
            myGames:[],
            loadingComplete:false,
            loading:false,
            error:null
            
          };

        const action = { type: 'SHOW_ALL_POSTS'};

        expect(sideBar(undefined,action)).toEqual(newState);
  
    });

});

describe('sideBar-SHOW_ONE_GAME', () => {

    it('Should set showOneGame key to boolean true and the other show... keys to boolean false', () => {

        const newState = {
            showProfile:false, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:true,
            showAllPosts:false,
            myGames:[],
            loadingComplete:false,
            loading:false,
            error:null
            
          };

        const action = { type: 'SHOW_ONE_GAME'};

        expect(sideBar(undefined,action)).toEqual(newState);
  
    });

});

describe('sideBar-SHOW_NEW_GAME', () => {

    it('Should set showNewGame key to boolean true and the other show... keys to boolean false', () => {

        const newState = {
            showProfile:false, 
            showFindGame:false,
            showNewGame:true,
            showOneGame:false,
            showAllPosts:false,
            myGames:[],
            loadingComplete:false,
            loading:false,
            error:null
            
          };

        const action = { type: 'SHOW_NEW_GAME'};

        expect(sideBar(undefined,action)).toEqual(newState);
  
    });

});
 
describe('sideBar-SHOW_FIND_GAME', () => {

    it('Should set showFindGame key to boolean true and the other show... keys to boolean false', () => {

        const newState = {
            showProfile:false, 
            showFindGame:true,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:[],
            loadingComplete:false,
            loading:false,
            error:null
            
        };

        const action = { type: 'SHOW_FIND_GAME'};

        expect(sideBar(undefined,action))
         .toEqual(newState);
  
    });

});
     
describe('sideBar-FETCH_MYGAMES_REQUEST', () => {

    it('Should set loading key to true and loadingComplete key to false and error key to null', () => {

        const newState = {
            showProfile:true, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:[], 
            loadingComplete:false,
            loading:true,
            error:null
            
        };
        
        const action = { type: 'FETCH_MYGAMES_REQUEST'};

        expect(sideBar(undefined,action))
         .toEqual(newState); 

    });

});

describe('sideBar-FETCH_MYGAMES_SUCCESS', () => {

    it('Should add items to the myGames array and set loading key to false and loadingComplete key to true and error key to null', () => {

        const newState = {
            showProfile:true, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:['game1','game2','game3'], 
            loadingComplete:true,
            loading:false,
            error:null
            
        };
        
        const action = { 
                         type: 'FETCH_MYGAMES_SUCCESS',
                         myGames: ['game1','game2','game3'],
                         loadingComplete: true,
                         loading: false,
                         error: null
                       };

        expect(sideBar(undefined,action))
         .toEqual(newState); 

    });

});

describe('sideBar-FETCH_MYGAMES_ERROR', () => {

    it('Should set error key to error', () => {

        const newState = {
            showProfile:true, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:[], 
            loadingComplete:false,
            loading:false,
            error:'This all broke'
            
          };
        
          const action = { 
                            type: 'FETCH_MYGAMES_ERROR',
                            loading: false,
                            error: 'This all broke'
                          };


        expect(sideBar(undefined,action))
         .toEqual(newState); 

    });

});

//version 2
describe('sideBar-FETCH_MYGAMES_SUCCESS', () => {
 
    it('Should add new items to myGames array -- version 2', () => {
        const newState = {
            showProfile:true, 
            showFindGame:false,
            showNewGame:false,
            showOneGame:false,
            showAllPosts:false,
            myGames:['game1','game2','game3'], 
            loadingComplete:true,
            loading:false,
            error:null
            
        };

        let state;

        const action = { 
                         myGames: ['game1','game2','game3'],
                         loadingComplete: true,
                         loading: false,
                         error: null
                        };
                
        state = sideBar(state, fetchMyGamesSuccess(action.myGames));
        expect(state).toEqual(newState); 
                 
   });

});

     
 