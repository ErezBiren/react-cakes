import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DataGrid, GridCellEditCommitParams } from "@material-ui/data-grid";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteDialog from "../components/Admin/DeleteDialog";
import {
  addCakeData,
  deleteCakeData,
  updateCakeData,
} from "../store/cakes-actions";
import { CakeData } from "../store/cakes-Slice";
import { RootState } from "../store/store";
import styles from "./AdminPage.module.css";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
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
    editable: true,
    minWidth: 150,
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
  const [tempCakes, setTempCakes] = useState<CakeData[]>([]);

  useEffect(() => {
    setTempCakes(cakes);
  }, [cakes]);

  const handleCellEditCommit = (param: GridCellEditCommitParams) => {
    setTempCakes(
      tempCakes.map((cake) =>
        cake.id === param.id ? { ...cake, [param.field]: param.value } : cake
      )
    );
  };

  // todo : replace any with concrete type
  const handleSelectionChange = (selection: any) => {
    setSelectedRows(selection);

    if (selection.length > 0) {
      setIsDeleteDisabled(false);
    } else {
      setIsDeleteDisabled(true);
    }
  };

  //todo: check how to do this
  const handleSave = () => {
    tempCakes.forEach((s) => {
      dispatch(updateCakeData(s));
    });
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
      <TextField required name="name" label="שם" onChange={handleChange} />
      <TextField
        required
        name="price"
        label="מחיר"
        onChange={handleChange}
        type="number"
      />
      <TextField
        required
        name="description"
        label="תיאור"
        onChange={handleChange}
      />
      <TextField
        required
        name="imageSource"
        label="כתובת תמונה"
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" onClick={onAddCake}>
        הוספה
      </Button>

      <div style={{ height: "500px", width: "100%" }}>
        <DataGrid
          rows={tempCakes}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={handleSelectionChange}
          onCellEditCommit={handleCellEditCommit}
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
      <Button variant="contained" color="primary" onClick={handleSave}>
        לשמור הכל
      </Button>
      <DeleteDialog
        open={deleteDialogOpen}
        onResolved={handleDeleteDialogResolved}
        onRejected={handleDeleteDialogRejected}
      ></DeleteDialog>
    </div>
  );
}
