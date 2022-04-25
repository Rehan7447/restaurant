import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestModal from "../../../components/restaurantRequest/requestModal";
import MyTable from "../../../components/table/table";

export default function AllRest() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/login");
    }
  });
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Date", headerName: "Date", width: 150 },
    { field: "Restaurant_Name", headerName: "Restaurant Name", width: 300 },
    { field: "Address", headerName: "Address", width: 500 },
    {
      field: "Request",
      headerName: "Request",
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
            Review
          </button>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      Date: "12/4/2022",
      Restaurant_Name: "The Global Diners",
      Address: "0 street, imagine town, Blury County",
      Request: "Pending",
    },
    {
      id: 2,
      Date: "12/4/2022",
      Restaurant_Name: "The Halal Restaurant",
      Address: "0 street, imagine town, Blury County",
      Request: "Accepted",
    },
    {
      id: 3,
      Date: "12/4/2022",
      Restaurant_Name: "The Asian Cuisine",
      Address: "0 street, imagine town, Blury County",
      Request: "Accepted",
    },
    {
      id: 4,
      Date: "12/4/2022",
      Restaurant_Name: "Continental's Home",
      Address: "0 street, imagine town, Blury County",
      Request: "Rejected",
    },
  ];
  const [show, setShow] = useState(false);
  const [currData, setCurrData] = useState({});
  const showModal = () => {
    setShow(!show);
  };
  return (
    <div>
      {show ? (
        <RequestModal show={show} data={currData} showModal={showModal} />
      ) : (
        <></>
      )}
      <div className="orderHistoryMain container-fluid">
        <h1 className="orderHistoryHeading">All Restaurants</h1>
        <MyTable rows={rows} columns={columns} />
      </div>
    </div>
  );
}
