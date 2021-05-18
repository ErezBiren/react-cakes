import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { deleteCake } from "../redux/cakesReducer";
import { useDispatch } from "react-redux";

function TaskbarIcons({ cakeId }) {
  const dispatch = useDispatch();

  return (
    <div class="taskbar_contianer">
      <DeleteIcon fill="red" onClick={() => dispatch(deleteCake({ cakeId }))} />
      <EditIcon className="editLogo" />
    </div>
  );
}

export default TaskbarIcons;
