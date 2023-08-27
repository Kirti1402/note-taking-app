import { useContext, useState } from "react";
import { NotesContext } from "../../Context/NotesContext";

export const AddNote = () => {

  const { dispatch } = useContext(NotesContext);
  const [addNote, setAddNote] = useState("");

  return (
    <div className="flex flex-col w-64 bg-[#fef08a] rounded">

      <textarea
        onChange={(e) => setAddNote(e.target.value)}
        value={addNote}
        type="text"
        placeholder="Add Note....."
        class="h-40 resize-none bg-[inherit] p-5 rounded"
      ></textarea>

      {/* onClick calling reducer function with dispatch method and setting notes to empty string */}
      <button
        onClick={() => {
          dispatch({ type: "ADD_NOTE", payload: addNote });
          setAddNote("");
        }}
      >
        Add
      </button>
    </div>
  );
};
