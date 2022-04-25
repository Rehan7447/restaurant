import { DataGrid } from "@mui/x-data-grid";
import "./table.css";

export default function MyTable(props) {
  return (
    <>
      <div className="customTable">
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  );
}
