import React from "react";

const EditForm = ({ handleEditChange, inputEditValue, editTask }) => {
  return (
    <form id="form-edit">
      <label>Task Name:</label>
      <input type="text" id="input-edit" onChange={handleEditChange} value={inputEditValue} disabled/>
      <button type="submit" id="btn-submit-edit" onClick={editTask} >Edit</button>
    </form>
  )
}

export default EditForm;