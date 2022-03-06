import React, { useEffect, useState } from 'react';
import axios from "axios"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function Forexnews() {
    const [state, setstate] = useState([]);

    const [forex_obj, setforexobj] = useState({});

    const dataArray = async () => {
        const result = await axios.get("https://finnhub.io/api/v1/news?category=forex&minId=10&token=c7kfc9aad3i9q0uqoqqg");
        console.log(result.data);
        setstate(result.data)
    }


    useEffect(() => {
        dataArray()
    }, [])
    function modelcall(id) {
        console.log("id----------->", id);
        console.log("id----------->", id);
        const data = state[id]
        setforexobj(data)
        console.log("(forex_obj",forex_obj.image);
         
    }
    const history = useHistory()

   function forex_news_back(){
    history.goBack()
   }

    return (<>
     <div className="container mt-5 maintop">
    <div className='main-title'>
        <h3>🅵🅾🆁🅴🆇🅽🅴🆆🆂</h3>
        <div className='d-flex' onClick={()=>forex_news_back()}>
       <button class="btn btn-outline-dark my-2 my-sm-0 back" type="submit"><i  class="fas fa-backward"></i>Back</button>
     
       </div>
</div>
        <section className="wrapper mt-5">
            <div className="container-fostrap">

                <div className="content">
                    <div className="container">

                        <div className="row mt-5">

                            {
                                state.map((val, id) => {
                                        return <div className="col-xs-12 col-sm-4">
                                            <div className="card">
                                                <a className="img-card">
                                                    <img src={val.image} />
                                                </a>
                                                <div className="card-content">
                                                    <h4 className="card-title">
                                                        <a style={{fontFamily:"serif"}}>{val.headline}
                                                        </a>
                                                    </h4>
                                                    {/* <p className="">
                                                        {val.summary}
                                                    </p> */}
                                                </div>
                                                <div className="card-read-more">
                                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => modelcall(id)} className="btn btn-link btn-block">
                                                        Read More
                                                    </a>

                                                </div>
                                            </div>
                                        </div>


                                })
                            }


                        </div>
                    </div>
                </div>
        
                
            </div>


        </section>

        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">latest News</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>{forex_obj.headline}</h2>
                        <img class="card-img-top" src={forex_obj.image} alt="image is not available" />
                        <p>{forex_obj.summary}</p>
                    </div>
                    <div class="modal-footer" style={{ justifyContent: "space-between" }}>
                        <p >{forex_obj.source}</p>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-chart-line"></i></button>

                    </div>
                </div>
            </div>
        </div>

</div>
    </>)
}
export default Forexnews;