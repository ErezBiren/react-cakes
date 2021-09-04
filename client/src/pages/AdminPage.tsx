import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
    field: "imgSrc",
    headerName: "כתובת תמונה",
    width: 250,
    editable: true,
  },
];

export default function AdminPage() {
  const dispatch = useDispatch();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const cakes = useSelector((state: RootState) => state.cakes.cakes);

  const handleSelectionChange = (selection: any) => {
    //todo:erez replace any with specfic type
    setSelectedRows(selection);
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
    const newCake: CakeData = {
      name: "1",
      price: 1,
      id: "1",
      imgSrc: "2",
      description: "2",
    };

    dispatch(addCakeData(newCake));
  };

  return (
    <div className={styles.adminMain}>
      <div>
        <TextField id="name" label="שם" />
      </div>
      <div>
        <TextField id="price" label="מחיר" />
      </div>
      <div>
        <TextField id="description" label="תיאור" />
      </div>
      <div>
        <TextField id="imgSource" label="כתובת תמונה" />
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
      <Button variant="contained" color="primary" onClick={handleDelete}>
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
