import React, { useEffect, useState } from 'react';
import axios from "axios"
// import { Modal, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
function Latestnews() {
    const [general, setgeneral] = useState([]);
    
    const [general_obj, setgeneral_obj] = useState({});
    const generalArray = async () => {

        const result_Stocknews = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json");
        console.log("general news---------->", result_Stocknews.data.articles);
        setgeneral(result_Stocknews.data.articles)
        // setCypto(result_Stocknews)
    }

    
    function stockcall(id) {
        const obj_stock = general[id]
        console.log("id---->", obj_stock)
        setgeneral_obj(obj_stock)

    }
    const history = useHistory()

    useEffect(() => {
        generalArray()
    }, [])

function late_news_back() {
    history.goBack()
}

    return (<>
     <div className="container mt-5 maintop">
    <div className='main-title'>
        <h2>🅻🅰🆃🅴🆂🆃 🅽🅴🆆🆂</h2>
       <div className='d-flex' onClick={()=>late_news_back()}>
       <button class="btn btn-outline-dark my-2 my-sm-0 back" type="submit"><i  class="fas fa-backward"></i>Back</button>
     
       </div>
       
    </div>

        
        <section className="wrapper mt-5">
            <div className="container-fostrap">

                <div className="content">

                    <div className="container">

                        <div class="row">
                            <div class="col">

                                <div className="row mt-5">
                                    {
                                        general.map((val, id) => {
                                            // if (id <= 2) {
                                            return <div className="col-xs-12 col-sm-4">
                                                <div className="card">
                                                    <a className="img-card">
                                                        <img src={val.urlToImage} />
                                                    </a>
                                                    <div className="card-content">
                                                        <h4 className="card-title">
                                                            <a>{val.title}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div className="card-read-more">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => stockcall(id)} className="btn btn-link btn-block">
                                                            Read More
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>

                                            // }

                                        })
                                    }


                                </div>


                            </div>

                        </div>




                    </div>
                </div>

                {/* <button type="button" style={{width:"50%"}}  class="btn btn-outline-primary">view more <i class="fas fa-book-reader"></i> </button> */}

            </div>
        </section>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">latest News</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>{general_obj.title}</h2>
                        <img class="card-img-top" src={general_obj.urlToImage} alt="image is not available" />
                        <p>{general_obj.description}</p>
                    </div>
                    <div class="modal-footer" style={{ justifyContent: "space-between" }}>
                        <p >{general_obj.publishedAt}</p>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-chart-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
</div>
    </>)
}
export default Latestnews;