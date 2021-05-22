import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { deleteCake, editCake } from "../../redux/cakesReducer";
import { useDispatch } from "react-redux";

function TaskbarIcons({ cakeId }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    if (confirm("Are you sure you want to delete this cake?")) {
      dispatch(deleteCake({ cakeId }));
    } 
  };

  return (
    <div class="taskbar_contianer">
      <DeleteIcon
        htmlColor="pink"
        onClick={handleDelete}
      />
      <EditIcon
        htmlColor="pink"
        onClick={() => dispatch(editCake({ cakeId }))}
      />
    </div>
  );
}

export default TaskbarIcons;
