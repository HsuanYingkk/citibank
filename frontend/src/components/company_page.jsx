import React, { useState, useEffect } from 'react';
import '../asset/css/sb-admin-2.min.css';
import "../asset/fontawesome-free-5.15.4-web/css/all.css";
import "../asset/css/bootstrap.min.css"
import $ from "jquery";
import axios from 'axios';

import Rate_card from './card';
// import Company_chart from './chart';
// import Chart_second from './chart_second';
import Data_table from './table';



const Company_page = props => {
    const id = props.match.params.id
    const [viewcompany, setViewcompany] = useState([]);

    function on_sidebar_rwd(e) {
        e.preventDefault();
        // console.log('ok')
        $(".sidebar_rwd").toggle();
    };

    useEffect(() => {
        fetch("http://127.0.0.1:5000/company/view?company_id=" + id,
            { method: 'GET', })
            .then(res => res.json())
            .then(
                (data) => {
                    // console.log(data.companies);
                    setViewcompany(data.companies);

                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])

    const name = viewcompany.map(item => Object.values(item)[1]);
    // console.log(year)



    return (
        <React.Fragment>
            <div id="page-company">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <ul className="navbar-nav bg-light sidebar sidebar-light accordion sidebar_rwd d-sm-none d-sm-inline-block "
                        style={{ "backgroundColor": "#f8f8fa" }}>

                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                            <div className="sidebar-brand-icon">
                                <img src={require('../asset/img/icon.jpg')} alt="" className="icon" style={{ "height": "40px" }} />
                            </div>
                            <div className="sidebar-brand-text mx-3">ESGOOD</div>
                        </a>


                        {/* <!-- Nav Item-????????????--> */}
                        <hr className="sidebar-divider my-0" />

                        <li className="nav-item active">
                            <div className="sidebar-heading text-gray-800">
                                <span>????????????</span>
                            </div>
                        </li>
                        <hr className="sidebar-divider" />
                        {/* <!-- Nav Item - Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#">
                                <i className="fas fa-certificate"></i>
                                <span>????????????</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#">
                                <i className="fas fa-chart-line"></i>
                                <span>????????????</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#">
                                <i className="fas fa-file-invoice-dollar"></i>
                                <span>??????????????????</span>
                            </a>
                        </li>
                        {/* <!-- Nav Item ???????????? end--> */}


                        {/* <!-- Nav Item -???????????? --> */}
                        <hr className="sidebar-divider my-0" />
                        <li className="nav-item active">
                            <div className="sidebar-heading text-gray-800">
                                <span>????????????</span>
                            </div>
                        </li>
                        <hr className="sidebar-divider" />
                        {/* <!-- Nav Item - Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#">
                                <i className="fas fa-folder-open"></i>
                                <span>??????????????????</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>??????????????????</span>
                            </a>
                        </li>
                        {/* <!-- Nav Item -???????????? end--> */}

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0 sidebar_open" ></button>
                        </div>

                    </ul>
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column bg-gradient-success">
                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" onClick={on_sidebar_rwd} className="btn btn-link d-sm-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* <!-- Topbar ??????--> */}
                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <i className="fas fa-search fa-sm"
                                        style={{ "position": "relative", "top": "10px", "left": "28px", "zIndex": "1" }}></i>
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="??????"
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button">
                                            ??????
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* <!-- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">
                                {/* <!-- Nav Item ?????? Dropdown (Visible Only XS) --> */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h2 className="h3 mb-0" style={{ "color": "#1cc88a", "fontWeight": "600" }}>{name[0]}</h2>
                                {/* <!-- <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> --> */}
                            </div>

                            {/* <!-- Content Row --> */}
                            <div className="row">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h4 className="h5 mb-0" style={{ "color": "#1cc88a", "fontWeight": "600", "paddingLeft": "13px" }}>????????????</h4>
                                </div>
                            </div>
                            <Rate_card viewcompany={viewcompany} />

                            {/* <div className="row">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h4 className="h5 mb-0" style={{ "color": "#1cc88a", "fontWeight": "600", "paddingLeft": "13px" }} > ????????????</h4>
                                </div>
                            </div> */}
                            {/* <!-- ????????????chart --> */}
                            {/* <div className='row ml-1' id='chart'>
                                <Company_chart /> 
                                <Chart_second />
                            </div> */}

                            <div className="row">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h4 className="h5 mb-0" style={{ "color": "#1cc88a", "fontWeight": "600", "paddingLeft": "13px" }}>??????????????????</h4>
                                </div>
                            </div>
                            <div className="row col-sm-12 col-lg-11" style={{ 'backgroundColor': 'white' }} >
                                <Data_table ID={id} />
                            </div>


                            {/* 
                            <div className="row">
                                <div className="d-sm-flex align-items-center justify-content-between mb-1">
                                    <h4 className="h5 mb-0" style={{ "color": "#1cc88a", "fontWeight": "600", "paddingLeft": "13px" }}>??????????????????</h4>
                                </div>
                            </div> */}





                        </div>
                    </div>
                    {/* <!-- End of Content Wrapper --> */}
                </div>
                {/* <!-- End of Page Wrapper --> */}

                <script src="js/jquery.min.js"></script>
                <script src="js/sb-admin-2.min.js"></script>
                <script src="js/bootstrap.bundle.min.js"></script>

            </div>

        </React.Fragment >
    )
}

export default Company_page;