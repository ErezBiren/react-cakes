import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";

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

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function DataGridDemo() {
  const cakes = useSelector((state) => state.cakes.cakes);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={cakes}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
