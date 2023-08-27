export const notesIntialState = {
    noteLists :[],
    deletedNotes:[],
    archiveNotes:[]
}

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                noteLists: [...state.noteLists, action.payload]
            };
        case "DELETENOTE":
            const updatedDeletedNotes = [...state.deletedNotes,state.noteLists[action.payload]]
            const updatedNoteList = state.noteLists.filter((index) => index !== action.payload )
            return {
                ...state,
                deletedNotes: updatedDeletedNotes,
                noteLists:updatedNoteList
            }
        case "ARCHIEVENOTE":
            return {
                ...state,
                archiveNotes:[...state.archiveNotes, action.payload]
            }

            default:
            return state;
    }
}