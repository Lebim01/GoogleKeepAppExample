
import { createStore } from 'redux';
import UUID from 'react-native-uuid';

let initialState = {
    notes : [],
    filteredNotes : [],
    search : ''
}

const searchIn = (value, string) => {
    return string.toUpperCase().includes(value.toUpperCase())
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            let uuid = UUID.v1()
            state.notes.push({
                id : uuid,
                ...action.note
            })
            break
        case 'DELETE_NOTE':
            state.notes = state.notes.filter(r => r.id !== action.id)
            break
        case 'SEARCH_CHANGE':
            state.search = action.search
            break
    }

    state.filteredNotes = state.notes
    if(state.search)
        state.filteredNotes = state.filteredNotes.filter(note => searchIn(state.search, note.title) || searchIn(state.search, note.note))

    return { ...state, lastAction : action.type }
}
let store = createStore(reducer, initialState);
export default store