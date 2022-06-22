import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../asset/css/sb-admin-2.min.css';
import '../asset/css/search_detail.css';
import '../asset/css/search_page.css';
import "../asset/fontawesome-free-5.15.4-web/css/all.css";
import "../asset/css/bootstrap.min.css"
// import '../asset/js/extention/choices.js'
import $ from "jquery";



function Search() {

    const [searchResult, setSearchResult] = useState([]);
    const [searchKeywordResult, setSearchKeywordResult] = useState([]);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        // searchCompany()

    }, []);


    const labelList = ['包装材料', '保险', '半导体', '玻璃玻纤', '船舶制造', '采掘行业', '电力行业', '多元金融', '电子元件', '电机', '电源设备', '电网设备', '电池', '纺织服装', '非金属材料', '风电设备', '房地产开发', '房地产服务', '公用事业', '钢铁行业', '工程建设', '贵金属', '工程咨询服务', '光伏设备', '工程机械', '航天航空', '化纤行业', '化肥行业', '化学制品', '化学原料', '环保行业', '化学制药', '航空机场', '航运港口', '交运设备', '家电行业', '家用轻工', '计算机设备', '旅游酒店', '煤炭行业', '美容护理', '贸易行业', '农药兽药', '酿酒行业', '能源金属', '汽车服务', '汽车整车', '汽车零部件', '燃气', '软件开发', '食品饮料', '石油行业', '商业百货', '水泥建材', '塑料制品', '生物制品', '通信服务', '通用设备', '铁路公路', '文化传媒', '物流行业', '橡胶制品', '小金属', '消费电子', '有色金属', '银行', '医疗器械', '医疗服务', '医药商业', '游戏', '造纸印刷', '专用设备', '珠宝首饰', '综合行业', '装修装饰', '装修建材', '证券', '中药', '专业服务']
    // console.log(labelList)

    // 行業類別搜尋api
    const searchCompany = (keyword) => {

        axios.get('http://127.0.0.1:5000/company/search_category',
            {
                params: {
                    category: keyword,
                }
            })
            .then((res) => {
                // console.log(res.data.companies);
                setSearchResult(res.data.companies);
                setSearchResult(res.data.companies);
            })

            .catch((err) => {
                console.log(err);
            })
    }


    //資料分類
    // const idList = Object.keys(searchResult);
    // const nameList = Object.values(searchResult).map(item => item.name);
    // const yearList = Object.values(searchResult).map(item => item.year);
    // const rateList_1 = Object.values(searchResult).map(item => item.中財);
    // const rateList_2 = Object.values(searchResult).map(item => item.商道);
    // const rateList_3 = Object.values(searchResult).map(item => item.盟浪);



    //關鍵字搜尋api
    const searchKeywordCompany = (keyword) => {

        axios.get('http://127.0.0.1:5000/company/search_keyword',
            {
                params: {
                    keyword: keyword,
                }
            })
            .then((res) => {
                console.log(res.data.companies);
                setSearchKeywordResult(res.data.companies);
                setCompany(res.data.companies);

            })
            .catch((err) => {
                console.log(err);
            })
    }


    function search(e) {
        e.preventDefault();
        // console.log('ok')
        $('.s009').css('display', 'none');
        $('.topbar form').addClass('d-sm-inline-block form-inline');

        //搜尋輸入//類別//關鍵字
        searchCompany(document.getElementById('searchoption').value);
        // console.log(document.getElementById('searchoption').value);
        searchKeywordCompany(document.getElementById('search').value);
        // console.log(typeof (document.getElementById('search').value))
    }

    function on_search(e) {
        e.preventDefault();
        // console.log('ok')
        $('.s009').show();
        $('.input-field input').css("cursor", "pointer");
        $('.topbar form').removeClass('d-sm-inline-block form-inline');
    }

    function close_search(e) {
        e.preventDefault();
        // console.log('ok')
        $('.s009').css('display', 'none');
        $('.topbar form').addClass('d-sm-inline-block form-inline');
    }

    //路徑
    function back_index(e) {
        e.preventDefault();
        window.location = '/';
    }
    function compamy_view(e) {
        e.preventDefault();
        window.location = 'company/:id';
    }



    return (
        <React.Fragment>
            {/* 搜尋框放大 start */}
            <div class="s009" id='search_detail'>
                <form>
                    <div className="inner-form">
                        <div className="basic-search">
                            <div className="input-field">
                                <i className="fas fa-search fa-sm"
                                    style={{ "position": "relative", "top": "46px", "left": "3%", "zIndex": "1" }}></i>
                                <input name='search' id="search" type="text" placeholder="请输入公司名称" autoFocus />
                                <div className="icon-wrap">
                                    <i className="fas fa-times" onClick={close_search}
                                        style={{ "position": "relative", "top": "-7px", "left": "28px", "zIndex": "1", "color": "#666", 'cursor': 'pointer' }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="advance-search">
                            <span className="desc">
                                进阶搜寻</span>
                            <div className="row">
                                <div className="input-field">
                                    <div className="input-select">
                                        <select data-trigger="" name="choices-single-defaul" id='searchoption'>
                                            <option placeholder="" value="">
                                                行业分类</option>
                                            {labelList.map((label) => (
                                                <option key={label} value={label}>{label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="input-field">
                                    <div className="input-select">
                                        <select data-trigger="" name="choices-single-defaul">
                                            <option placeholder="" value="">评级公司</option>
                                            <option>商道</option>
                                            <option>中财</option>
                                            <option>盟浪</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row third">
                                <div className="input-field">
                                    <div className="result-count">
                                        <span> </span>
                                    </div>
                                    <div className="group-btn">
                                        <button className="btn-delete" id="delete">重整</button>
                                        <button className="btn-search" id='search_btn' onClick={search} >搜寻</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* 搜尋框放大 end */}

            <div id="page-search">
                {/* <!-- Page Wrapper -->  */}
                <div id="wrapper ">

                    {/* <!-- Content Wrapper --> */}
                    {/* <div id="content-wrapper" className="d-flex flex-column" style={{ 'position': 'absolute', 'top': '0px', 'zIndex': '1' }} >
                    </div> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid d-flex flex-column" style={{ 'position': 'absolute', 'top': '0px', 'zIndex': '1' }}>
                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >

                            <img src={require('../asset/img/brand.jpg')} className="brand_img" style={{ "width": "146px" }} />
                            {/* <!-- Topbar 搜尋--> */}
                            <form className="d-sm-none mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search " id="search_bar">
                                <div className="input-group">
                                    <i className="fas fa-search fa-sm"
                                        style={{ "position": "relative", "top": "10px", "left": "28px", "zIndex": "1" }}></i>
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="请输入公司名称"
                                        aria-label="Search" aria-describedby="basic-addon2" onClick={on_search} />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button " onClick={on_search}>
                                            搜寻
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </nav>
                        <div className="row ml-3">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h4 className="h5 mb-0" style={{ 'color': '#1cc88', 'fontWeight': '600', 'paddingLeft': '13px' }}>搜寻结果</h4>
                            </div>
                        </div>

                        {/* <!-- 搜尋結果Card --> */}
                        <div className='row  ml-5'>

                            {searchResult.map((item, index) => (

                                <div className="col-lg-6" key={index}>
                                    <div className="card shadow mb-4" style={{ 'borderRadius': '20px' }}>
                                        <div className='col-lg-10'>
                                            <div className="card-body py-3 d-flex ">
                                                <Link to={`company/${item.ID}`}><h5 className="m-0 font-weight-bold text-gray-800">{item.name}({item.year})</h5></Link>
                                                <Link to={`company/${item.ID}`}><i class="fas fa-angle-double-right text-gray-600 col-2"></i></Link>
                                            </div>
                                            <div className="card-body d-flex">
                                                <h5 className="m-0 font-weight-bold rate_title" style={{ 'color': '#7CD3A0', 'minWidth': '80px' }}>ESG評級</h5>
                                                <div class="h6 mb-0 font-weight-bold text-gray-100 rate_grade ml-4 ml-sm-7">中財{item.中財}</div>
                                                <div class="h6 mb-0 font-weight-bold text-gray-100 rate_grade ml-4">商道{item.商道}</div>
                                                <div class="h6 mb-0 font-weight-bold text-gray-100 rate_grade ml-4">盟浪{item.盟浪}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div className='row  ml-5'>
                            {searchKeywordResult.map((item, index) => (

                                <div className="col-lg-6" key={index}>
                                    <div className="card shadow mb-4" style={{ 'borderRadius': '20px' }}>
                                        <div className='col-lg-10'>
                                            <div className="card-body py-3 d-flex ">
                                                <Link to={`company/${item.ID}`}><h5 className="m-0 font-weight-bold text-gray-800">{item.name}({item.year})</h5></Link>
                                                <Link to={`company/${item.ID}`}><i class="fas fa-angle-double-right text-gray-600 col-2"></i></Link>
                                            </div>
                                            <div className="card-body d-flex">
                                                <h5 className="m-0 font-weight-bold  rate_title" >ESG評級</h5>
                                                <div class="h6 mb-0 font-weight-bold text-gray-100 rate_grade ml-4 ml-sm-7">中財{item.中財}</div>
                                                <div class="h6 mb-0 font-weight-bold text-gray-100 rate_grade ml-4">商道{item.商道}</div>
                                                <div class="h6 mb-0 font-weight-bold text-gray-100 rate_grade ml-4">盟浪{item.盟浪}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div >

                {/* <!-- End of Page Wrapper --> */}

            </div >




        </React.Fragment >
    )

}

export default Search;