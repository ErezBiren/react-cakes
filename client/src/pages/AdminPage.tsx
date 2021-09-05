import { DataGrid, GridSelectionModel } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, SetStateAction, useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { deleteCakeData, addCakeData } from "../store/cakes-actions";
import { RootState } from "../store/store";
import { CakeData } from "../store/cakes-Slice";
import DeleteDialog from "../components/Admin/DeleteDialog";
import styles from "./AdminPage.module.css";

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

const columns = [
  { field: "id", headerName: "ID", width: 110 },
  {
    field: "name",
    headerName: "שם",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "מחיר",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "תיאור",
    width: 150,
    editable: true,
  },
  {
    field: "imageSource",
    headerName: "כתובת תמונה",
    width: 250,
    editable: true,
  },
];

export default function AdminPage() {
  const [newCakeData, setNewCakeData] = useState({
    id: "",
    name: "",
    price: 0,
    imageSource: "",
    description: "",
  });

  const dispatch = useDispatch();

  const [isDeleteDisabled, setIsDeleteDisabled] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const cakes = useSelector((state: RootState) => state.cakes.cakes);

  // todo : replace any with concrete type
  const handleSelectionChange = (selection: any) => {
    setSelectedRows(selection);

    if (selection.length > 0) {
      setIsDeleteDisabled(false);
    } else {
      setIsDeleteDisabled(true);
    }
  };

  const handleDelete = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogResolved = () => {
    setDeleteDialogOpen(false);

    selectedRows.forEach((s) => {
      dispatch(deleteCakeData(s));
    });
  };

  const handleDeleteDialogRejected = () => setDeleteDialogOpen(false);

  const onAddCake = () => {
    dispatch(addCakeData(newCakeData));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCakeData({ ...newCakeData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.adminMain}>
      <div>
        <TextField required name="name" label="שם" onChange={handleChange} />
      </div>
      <div>
        <TextField
          required
          name="price"
          label="מחיר"
          onChange={handleChange}
          type="number"
        />
      </div>
      <div>
        <TextField
          required
          name="description"
          label="תיאור"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          name="imageSource"
          label="כתובת תמונה"
          onChange={handleChange}
        />
      </div>

      <Button variant="contained" color="primary" onClick={onAddCake}>
        הוספה
      </Button>

      <div style={{ height: "500px", width: "100%" }}>
        <DataGrid
          rows={cakes}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={handleSelectionChange}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDelete}
        disabled={isDeleteDisabled}
      >
        מחיקה
      </Button>
      <DeleteDialog
        open={deleteDialogOpen}
        onResolved={handleDeleteDialogResolved}
        onRejected={handleDeleteDialogRejected}
      ></DeleteDialog>
    </div>
  );
}
