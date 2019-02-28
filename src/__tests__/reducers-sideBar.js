import sideBar from '../reducers/sideBar-reducer';
import { fetchMyGamesRequest, showProfile, showAllPosts, showOneGame, showNewGame, showFindGame} from '../actions/sideBar-actions';
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

    // it('Should return the current state on an unknown action', () => {
    //     let currentState = {};
    //     const state = sideBarReducer(currentState, {type: '__UNKNOWN'});
    //     expect(state).toBe(currentState);
    // });

    // describe('addList', () => {
    //     it('Should add new lists', () => {
    //         let state;
    //         state = sideBarReducer(state, addList(list1Title));
    //         state = sideBarReducer(state, addList(list2Title));
    //         expect(state).toEqual({
    //             lists: [list1, list2]
    //         });
    //     });
    // });

    // describe('addCard', () => {
    //     it('Should add new cards', () => {
    //         let state = {
    //             lists: [list1, list2]
    //         };
    //         state = sideBarReducer(state, addCard(card1Text, 0));
    //         state = sideBarReducer(state, addCard(card2Text, 1));
    //         state = sideBarReducer(state, addCard(card3Text, 1));
    //         expect(state).toEqual({
    //             lists: [
    //                 {
    //                     title: list1Title,
    //                     cards: [card1]
    //                 },
    //                 {
    //                     title: list2Title,
    //                     cards: [card2, card3]
    //                 }
    //             ]
    //         });
    //     });
    // });
});
 