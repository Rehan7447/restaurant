import MyTable from "../../../components/table/table";
import "./orderHistory.css"

export default function OrderHistory() {
  return (
    <div className="orderHistoryMain container-fluid" >
      <h1 className="orderHistoryHeading" >Order History</h1>
      <MyTable />
    </div>
  );
}
