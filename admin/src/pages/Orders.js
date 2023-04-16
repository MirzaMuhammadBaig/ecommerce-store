import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders } from "../features/auth/authSlice";
// import { getDeliveryDetails } from "../features/auth/authSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];
// console.log(columns,"order");
const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orderState = useSelector((state) => state.auth.orders);
  console.log(orderState);
  const data1 = [];
  console.log(data1, "newdata");
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].orderby.firstname,
      product: (
        <Link to={`/admin/orders/${orderState[i].orderby._id}`}>
          View Orders
        </Link>
      ),
      amount: orderState[i].paymentIntent.amount,
      date: new Date(orderState[i].createdAt).toLocaleString(),
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>
        {" "}
        <Table columns={columns} dataSource={data1} />

      </div>
    </div>
  );
};

// const DeliveryDetail = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getDeliveryDetails());
//   }, []);
//   const deliveryState = useSelector((state) => state.auth.delivery_Detail);
//   console.log(deliveryState);
//   const data1 = [];
//   console.log(data1 ,"newdata");
//   for (let i = 0; i < deliveryState.length; i++) {
//     data1.push({
//       key: i + 1,
//       name: deliveryState[i].orderby.firstname,
//       product: (
//         <Link to={`/admin/orders/${deliveryState[i].orderby._id}`}>
//           View Delivery Detail
//         </Link>
//       ),
//       amount: orderState[i].paymentIntent.amount,
//       date: new Date(orderState[i].createdAt).toLocaleString(),
//       action: (
//         <>
//           <Link to="/" className=" fs-3 text-danger">
//             <BiEdit />
//           </Link>
//           <Link className="ms-3 fs-3 text-danger" to="/">
//             <AiFillDelete />
//           </Link>
//         </>
//       ),
//     });
//   }
//   return (
//     <div>
//       <h3 className="mb-4 title">Orders</h3>
//       <div>
//         {" "}
//         <Table columns={columns} dataSource={data1} />

//       </div>
//     </div>
//   );
// };

export default Orders;
