import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../../components/orderDetailModal/modal";
import DetailModal from "../../../components/orderDetailsRest/details";
import MyTable from "../../../components/table/table";

export default function AllRestOrders() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("restaurant")) {
      navigate("/login");
    }
  });
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Date", headerName: "Date", width: 150 },
    { field: "Customer_Name", headerName: "Customer Name", width: 500 },
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
      Date: "12/4/2022",
      Customer_Name: "Ali",
      Total_Price: "$50",
      Status: "New",
      Address: "0 street, imagine town, Blury County",
      OrderStatus: "Ready",
      DeliveryStatus: "Pending",
    },
    {
      id: 2,
      Date: "02/4/2022",
      Customer_Name: "Ahmed",
      Total_Price: "$80",
      Status: "Delivered",
      Address: "0 street, imagine town, Blury County",
      OrderStatus: "Delivered",
      DeliveryStatus: "Delivered",
    },
    {
      id: 2,
      Date: "09/5/2022",
      Customer_Name: "Sara",
      Total_Price: "$30",
      Status: "Delivered",
      Address: "0 street, imagine town, Blury County",
      OrderStatus: "Delivered",
      DeliveryStatus: "Delivered",
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
        <DetailModal show={show} data={currData} showModal={showModal} />
      ) : (
        <></>
      )}
      <div className="orderHistoryMain container-fluid">
        <h1 className="orderHistoryHeading">All Orders</h1>
        <MyTable rows={rows} columns={columns} />
      </div>
    </div>
  );
}
