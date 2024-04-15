import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Nội thất tốt nhất để <br /> Trang trí nhà
        </h1>
        <p className="pt-5 text-[16px] font-[Roboto] font-[400] text-[#000000ba]">
          <span className="font-[600]">Thay đổi không gian của bạn:</span> Khám phá bộ sưu tập nội thất của chúng tôi! <br />
          Nâng tầm ngôi nhà của bạn với sự lựa chọn cẩn thận của chúng tôi về phong cách, hiện đại,
          <br />
          và những mảnh ghép vượt thời gian. Từ đồ nội thất sang trọng đến điểm nhấn nghệ thuật,
          <br />
          tìm ra mọi thứ bạn cần để tạo ra ngôi nhà mơ ước của mình. <br />
          Hãy mua sắm ngay để có được chất lượng thủ công cực cao và thiết kế độc đáo!
        </p>

        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Mua Ngay
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
