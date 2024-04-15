import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Đơn hàng của bạn đang được xử lý.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Đơn hàng của bạn đang chờ đơn vị vận chuyển.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Đơn hàng của bạn đã được gửi đến đơn vị vận chuyển.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Đơn hàng của bạn đã đến thành phố. Shipper sẽ nhanh chóng vận chuyển đến bạn.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Shipper đang trên đường giao hàng.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Đơn hàng đã vận chuyển thành công!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Hoàn trả đang được xử lý!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Hoàn trả thành công!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
