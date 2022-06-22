import React from 'react';
import '../asset/css/sb-admin-2.min.css';
import Brand from '../asset/img/brand.jpg';
import '../asset/css/index.css'
import search from './search';

function index() {

    function do_search(e) {
        e.preventDefault();
        window.location = './search';
    }



    return (
        <React.Fragment>
            <div id="page-index">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">


                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column bg-gradient-success">


                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <img src={Brand} className="brand_img" style={{ "width": " 146px", "margin": "auto" }} />

                        </nav>

                        <div className='container'>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div>
                                        <img src={require('../asset/img/title.jpg')} className="index_img" />
                                    </div>
                                    <div>
                                        <button onClick={do_search}
                                            style={{ "marginLeft": "1%", "background": "#27AE60", "borderRadius": "15px", "color": "white", "width": "220px", "height": "50px", "fontWeight": "600", "fontSize": "24px", "borderColor": "white", "marginTop": "1em" }}
                                        >
                                            立即查询
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <img src={require('../asset/img/index_picture.jpeg')} id='index_img'
                                        style={{ "width": "700px", "marginLeft": "8%", "marginTop": "-2.5%" }} />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">


                        </div>

                        {/* <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy;2022</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}
                    </div>
                    {/* <!-- End of Content Wrapper --> */}
                </div>
                {/* <!-- End of Page Wrapper --> */}
                {/* <script src={{ Title }}></script> */}

            </div>
        </React.Fragment>
    )
}

export default index;