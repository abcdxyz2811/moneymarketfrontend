import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios"

// import 'bootstrap/dist/css/bootstrap.min.css';
function Cyptonews() {
    const [cypto, setCypto] = useState([]);
    const [cypto_obj, setcypto_obj] = useState({});
    const cyptoArray = async () => {
      const result_cypto= await axios({
            method: 'GET',
          url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
          headers: {
            'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
            'x-rapidapi-key': 'e0498f429bmsh04a9ba6f50fa226p13c5a8jsn81c95c9b2370'
          }
        });

        console.log("result cypto data----------->",result_cypto.data);
        setCypto(result_cypto.data)
    }


    useEffect(() => {
        cyptoArray()
    }, [])
    function cyptocall(id) {
        const obj_cypto = cypto[id]
        setcypto_obj(obj_cypto)
    }

    const history = useHistory()

    function cypto_news_back(){
        history.goBack() 
    }

    return (<>
     <div className="container mt-5 maintop">
    <div className='main-title'>
       
        <h3>🅲🆈🅿🆃🅾 🅽🅴🆆🆂</h3>
        <div className='d-flex' onClick={()=>cypto_news_back()}>
       <button class="btn btn-outline-dark my-2 my-sm-0 back" type="submit"><i  class="fas fa-backward"></i>Back</button>
     
       </div>
</div>

        <section className="wrapper mt-5">
            <div className="container-fostrap">

                <div className="content">
                    <div className="container">

                        <div className="row mt-5">

                            {
                                cypto.map((val, id) => {
                                        return <div className="col-xs-12 col-sm-4">
                                            <div className="card">
                                                <a className="img-card">
                                                    <img src={val.image} />
                                                </a>
                                                <div className="card-content">
                                                    <h4 className="card-title">
                                                        <a>{val.title}
                                                        </a>
                                                    </h4>
                                                    {/* <p className="">
                                                        {val.summary}
                                                    </p> */}
                                                </div>
                                                <div className="card-read-more">
                                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={() => cyptocall(id)} className="btn btn-link btn-block">
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
                
                {/* <button type="button" style={{width:"50%"}} class="btn btn-outline-primary">view more <i class="fas fa-book-reader"></i> </button> */}
                
            </div>
        </section>

        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">latest News</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>{cypto_obj.title}</h2>
                        <img class="card-img-top" src={cypto_obj.image} alt="image is not available" />
                        <p>{cypto_obj.desc}</p>
                    </div>
                    <div class="modal-footer" style={{ justifyContent: "space-between" }}>
                        <p >{cypto_obj.date}</p>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-chart-line"></i></button>

                    </div>
                </div>
            </div>
        </div>
</div>
    </>)
}
export default Cyptonews;