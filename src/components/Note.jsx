import React from "react";

const noteTitle = 'A note title';
const noteBody = 'A note body';

// classes should always be applied on html elements, never on custom components
function Note() {
    return (
        <div className="note">
            <h1>{noteTitle}</h1>
            <p>{noteBody}</p>
        </div>
    );
}

export default Note;