import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { cakesActions } from "../../store/cakes-Slice";
import { useDispatch } from "react-redux";

function TaskbarIcons({ cakeId }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    if (confirm("Are you sure you want to delete this cake?")) {
      dispatch(cakesActions.deleteCake(cakeId));
    }
  };

  return (
    <div class="taskbar_contianer">
      <DeleteIcon htmlColor="pink" onClick={handleDelete} cursor="pointer" />
      <EditIcon
        htmlColor="pink"
        onClick={() => dispatch(cakesActions.editCake(cakeId))}
        cursor="pointer"
      />
    </div>
  );
}

export default TaskbarIcons;
