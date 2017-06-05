import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:{
            return state.concat([action.payload.data]); //returns a new array AND DOES NOT MUTATE THE OLD state
        }

    }

    return state;
}