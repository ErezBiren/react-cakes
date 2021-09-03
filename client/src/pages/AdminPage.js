import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { cakesActions, CakeData } from "../store/cakes-Slice";
import { AppDispatch } from "react-redux";



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

  const [selectedRows, setSelectedRows] = useState([]);
  const cakes = useSelector((state) => state.cakes.cakes);

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const onDelete = () => {
    selectedRows.forEach((s) => {
      console.log(s);
      dispatch(cakesActions.deleteCake(s));
    });
  };

  const addCake = () => {
    const newCake = { ...cake, id: doc.id };
    dispatch(cakesActions.addCake(newCake));
  };

  return (
    <>
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

      <Button variant="contained" color="primary" onClick={addCake}>
        Add
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
      <Button variant="contained" color="primary" onClick={onDelete}>
        Delete
      </Button>
    </>
  );
}
