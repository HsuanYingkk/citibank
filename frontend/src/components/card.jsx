import React from 'react';
import '../asset/css/sb-admin-2.min.css';
import "../asset/fontawesome-free-5.15.4-web/css/all.css";
import "../asset/css/bootstrap.min.css"
import "../asset/css/card.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Rate_card = ({ viewcompany }) => {
    console.log(viewcompany)

    const rate_1 = viewcompany.map(item => Object.values(item)[21]);
    // console.log(rate_1);
    const rate_2 = viewcompany.map(item => Object.values(item)[22]);
    // console.log(rate_2);
    const rate_3 = viewcompany.map(item => Object.values(item)[23]);
    // console.log(rate_3);

    return (

        <React.Fragment>

            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    356: {
                        width: 300,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    576: {
                        width: 450,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 580,
                        slidesPerView: 2,
                    },
                }}

                grabCursor={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {/* 這裡開始map */}

                <SwiperSlide style={{ "display": "flex" }} >
                    <div className=" mb-4 rate_card" >
                        <div className="card border-bottom-success shadow h-80 ">
                            <div className="card-body  container">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-0">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-3 row">
                                            <div className="h5 mb-0 font-weight-bold text-gray-100 rate_grade col-lg-4 ml-3">{rate_1[0]}</div>
                                            <div className="h6 mr-0 font-weight-bold text-gray-700 rate_grade_time col-lg-7 ml-1">
                                                更新時間:<span>2021/12</span>
                                            </div>
                                        </div>

                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            <div className="h5 mb-0 font-weight-bold text-gray-900 sustainaltyics_co">商道评级</div>
                                            <div className="h6 mb-0 font-weight-bold text-gray-700 sustainaltyics_co_standard">D-(1)~A+(12)，12為最佳</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ "display": "flex" }} >
                    <div className=" mb-4 rate_card" >
                        <div className="card border-bottom-success shadow h-80 ">
                            <div className="card-body  container">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-0">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-3 row">
                                            <div className="h5 mb-0 font-weight-bold text-gray-100 rate_grade col-lg-4 ml-3">{rate_2[0]}</div>
                                            <div className="h6 mr-0 font-weight-bold text-gray-700 rate_grade_time col-lg-7 ml-1">
                                                更新時間:<span>2021/12</span>
                                            </div>
                                        </div>

                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            <div className="h5 mb-0 font-weight-bold text-gray-900 sustainaltyics_co">中財评级</div>
                                            <div className="h6 mb-0 font-weight-bold text-gray-700 sustainaltyics_co_standard">D-(1)~A+(12)，12為最佳</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ "display": "flex" }} >
                    <div className=" mb-4 rate_card" >
                        <div className="card border-bottom-success shadow h-80 ">
                            <div className="card-body  container">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-0">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-3 row">
                                            <div className="h5 mb-0 font-weight-bold text-gray-100 rate_grade col-lg-4 ml-3">{rate_3[0]}</div>
                                            <div className="h6 mr-0 font-weight-bold text-gray-700 rate_grade_time col-lg-7 ml-1">
                                                更新時間:<span>2021/12</span>
                                            </div>
                                        </div>

                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            <div className="h5 mb-0 font-weight-bold text-gray-900 sustainaltyics_co">盟浪评级</div>
                                            <div className="h6 mb-0 font-weight-bold text-gray-700 sustainaltyics_co_standard">CC(1)~AA-(15)，15為最佳</div>
                                        </div>
                                        {/* <!-- <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </div> --> */}
                                        {/* <!-- <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment >
    )
}

export default Rate_card;