import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        { id: 1, note: 'State is the current data in the app' },
        { id: 2, note: 'View is the UI that displays the state' },
        { id: 3, note: 'Actions alter the state of the app' },
        { id: 4, note: 'Reducers should only make immutable updates' },
        { id: 5, note: 'Reducers should be pure functions' },
        ]
}

const options = {
    name: 'notes',
    initialState, //shorthand for initialState: initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push({id: state.notes.length + 1, note: action.payload});
        },
        removeNote: (state, action) => {
            state.notes.splice(
                state.notes.findIndex((note) => note.id === action.payload), 1
            )

        },
        default: (state, action) => {
            return state;
        }
    },
}
const notesSlice = createSlice(options);
console.log(notesSlice);
console.log(notesSlice.actions);
console.log(notesSlice.actions.addNote('A slice reducer updates a portion of the application state.'));
const {addNote, removeNote} = notesSlice.actions; //addNote and removeNote are action creators
export default notesSlice.reducer;
