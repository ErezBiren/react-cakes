import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { cakesActions } from "../../store/cakes-Slice";
import { deleteCakeData } from "../../store/cakes-actions";
import { useDispatch } from "react-redux";
import React from "react";

const TaskbarIcons: React.FC<{cakeId: string}> = ({cakeId}) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this cake?")) {
      dispatch(deleteCakeData(cakeId));
    }
  };

  return (
    <div className="taskbar_contianer">
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
