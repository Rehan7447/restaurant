import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";
import CustomModal from "../modal/modal";

export default function MyTable() {
  const [show, setShow] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Date", headerName: "Date", width: 150 },
    { field: "Resturant_Name", headerName: "Restaurant Name", width: 500 },
    { field: "Total_Price", headerName: "Total Price", width: 200 },
    {
      field: "Status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "Action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <button
            className="btn btn-info detailsButton"
            onClick={(e) => {
              e.stopPropagation();
              setCurrData(rows[params.id - 1]);
              console.log(currData);
              setShow(!show);
            }}
          >
            View Details
          </button>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      Date: "1/4/2022",
      Resturant_Name: "Resturant1",
      Total_Price: "$30",
      Status: "On its Way",
    },
    {
      id: 2,
      Date: "12/4/2022",
      Resturant_Name: "Resturant2",
      Total_Price: "$30",
      Status: "delivered",
    },
    {
      id: 3,
      Date: "13/4/2022",
      Resturant_Name: "Resturant3",
      Total_Price: "$30",
      Status: "delivered",
    },
    {
      id: 4,
      Date: "14/4/2022",
      Resturant_Name: "Resturant4",
      Total_Price: "$30",
      Status: "delivered",
    },
    {
      id: 5,
      Date: "15/4/2022",
      Resturant_Name: "Resturant5",
      Total_Price: "$30",
      Status: "delivered",
    },
  ];
  const [currData, setCurrData] = useState({});
  return (
    <>
      {show ? <CustomModal show={show} data={currData} /> : <></>}
      <div className="customTable">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  );
}
