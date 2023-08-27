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

            default:
            return state;
    }
}