import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios"
import { Link } from "react-router-dom"
import "./News.css"
function News() {
    const [state, setstate] = useState([]);
    const [cypto, setCypto] = useState([]);
    const [general, setgeneral] = useState([]);
    const [stocknews, setstocknews] = useState([]);
    const [techstock, settechstock] = useState([])


    const [forex_obj, setforexobj] = useState({});
    const [cypto_obj, setcypto_obj] = useState({});
    const [general_obj, setgeneral_obj] = useState({});
    const [stocknews_obj, setstocknews_obj] = useState({});

    // const navigate = useNavigate()

    const dataArray = async () => {
        const result = await axios.get("https://finnhub.io/api/v1/news?category=forex&minId=10&token=c7kfc9aad3i9q0uqoqqg");
        console.log(result.data);
        setstate(result.data)
    }

    const cyptoArray = async () => {

        // const result_cypto = await axios.get("https://finnhub.io/api/v1/news?category=crypto&token=c7kfc9aad3i9q0uqoqqg");
        // console.log("cypto news", result_cypto.data);


        const result_cypto = await axios({
            method: 'GET',
            url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
            headers: {
                'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
                'x-rapidapi-key': 'e0498f429bmsh04a9ba6f50fa226p13c5a8jsn81c95c9b2370'
            }
        });

        console.log("result cypto data----------->", result_cypto.data);
        setCypto(result_cypto.data)
    }

    const generalArray = async () => {

        const result_Stocknews = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json");
        console.log("general news---------->", result_Stocknews.data.articles);
        setgeneral(result_Stocknews.data.articles)
        // setCypto(result_Stocknews)
    }
    const stocknewsarray = async () => {debugger

        const result_stock = await axios({
            method: 'GET',
            url: 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d67606946304d93be95157a65be12d2',

        });
        console.log("result stock news data----------->", result_stock.data.articles);
        setstocknews(result_stock.data.articles)

    }

    // https://newsapi.org/v2/everything?q=tesla&from=2022-01-19&sortBy=publishedAt&apiKey=0d67606946304d93be95157a65be12d2
    const onCouserol = async () => {debugger

        const technews = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-02-19&sortBy=publishedAt&apiKey=0d67606946304d93be95157a65be12d2");
        console.log("technews news---------->", technews.data.articles);
        // technews.data.articles
        settechstock(technews.data.articles)
        

        // setCypto(result_Stocknews)
    }
    console.log("couserol---------->", techstock);
    
    function modelcall(id) {
        console.log("id----------->", id);
        console.log("id----------->", id);
        const data = state[id]
        setforexobj(data)
        console.log("(forex_obj", forex_obj.image);

    }
    function cyptocall(id) {
        const obj_cypto = cypto[id]
        setcypto_obj(obj_cypto)
    }

    function stockcall(id) {
        const obj_stock = general[id]
        console.log("id---->", obj_stock)
        setgeneral_obj(obj_stock)

    }
    useEffect(() => {
        onCouserol()
        dataArray()
        cyptoArray()
        generalArray()
        stocknewsarray()
        
    }, [])

    useEffect(()=>{
        onCouserol()
    },[setCypto])

    function stocknewscall(id) {
        const obj_stocknews = stocknews[id];
        console.log("stock news id--->", obj_stocknews);
        setstocknews_obj(obj_stocknews)
    }
    // function viewmore_latestnews() {
    //     navigate("/news/latestnews")
    // }


    return (<>
        <div className="container">
            <h2>🅻🅰🆃🅴🆂🆃 🅽🅴🆆🆂</h2>
            <section className="wrapper mt-5">
                <div className="container-fostrap">

                    <div className="content">
                         {console.log("debugger")}
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                     <img src={techstock.length==0?"https://images.frandroid.com/wp-content/uploads/2022/02/brouilleur.jpg":techstock[7].urlToImage} class="d-block w-100" alt="..." /> 
                                   <div class="carousel-caption d-none d-md-block">
                                        <h5>{techstock.length==0?"hiii":techstock[7].title}</h5>
                                        <p>{techstock.length==0?"hiii":(<>{techstock[7].title}{techstock[7].content}</>)}</p>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                     <img src={techstock.length==0?"https://images.frandroid.com/wp-content/uploads/2022/02/brouilleur.jpg":techstock[2].urlToImage} class="d-block w-100" alt="..." /> 
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{techstock.length==0?"hiii":techstock[2].title}</h5>
                                        <p>{techstock.length==0?"hiii":(<>{techstock[2].title}{techstock[2].content}</>)}</p>
                                     </div> 
                                </div>
                                <div class="carousel-item ">
                                     <img src={techstock.length==0?"https://images.frandroid.com/wp-content/uploads/2022/02/brouilleur.jpg":techstock[3].urlToImage} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                       <h5>{techstock.length==0?"hiii":techstock[3].title}</h5>
                                        <p>{techstock.length==0?"hiii":(<>{techstock[3].title}{techstock[3].content}</>)}</p>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                   <img src={techstock.length==0?"https://images.frandroid.com/wp-content/uploads/2022/02/brouilleur.jpg":techstock[10].urlToImage} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{techstock.length==0?"hiii":techstock[10].title}</h5>
                                        <p>{techstock.length==0?"hiii":(<>{techstock[10].title}{techstock[10].content}</>)}</p>
                                    </div> 
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="container">

                            <div className="row mt-5">
                                {
                                    general.map((val, id) => {
                                        if (id <= 2) {
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
                                                        {/* <p className="">
                                                        {val.summary}
                                                    </p> */}
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => stockcall(id)} className="btn btn-link btn-block">
                                                            Read More
                                                    </a>

                                                    </div>
                                                </div>
                                            </div>

                                        }

                                    })
                                }


                            </div>
                        </div>
                    </div>

                    <Link to="/news/latestnews" >

                        <button type="button" style={{ width: "50%" }} id="l1" class="btn btn-outline-primary">view more <i class="fas fa-book-reader"></i> </button>

                    </Link>

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
                            <p>{general_obj.description}{general_obj.content}</p>
                        </div>
                        <div class="modal-footer" style={{ justifyContent: "space-between" }}>
                            <p >{general_obj.publishedAt}</p>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-chart-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h3>🆂🆃🅾🅲🅺 🅽🅴🆆🆂</h3>

            <section className="wrapper mt-5">
                <div className="container-fostrap">

                    <div className="content">
                        <div className="container">

                            <div className="row mt-5">
                                {
                                    stocknews.map((val, id) => {
                                        if (id <= 5) {
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
                                                        {/* <p className="">
                                                        {val.summary}
                                                    </p> */}
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal4" onClick={() => stocknewscall(id)} className="btn btn-link btn-block">
                                                            Read More
                                                    </a>

                                                    </div>
                                                </div>
                                            </div>

                                        }

                                    })
                                }


                            </div>
                        </div>
                    </div>

                    {/* 
                <Link to="/news/forexnews" >

                    <button type="button" style={{ width: "50%" }} id="f2" class="btn btn-outline-primary">view more <i class="fas fa-book-reader"></i> </button>

                </Link>  */}


                </div>


            </section>

            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">latest News</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h2>{stocknews_obj.title}</h2>
                            <img class="card-img-top" src={stocknews_obj.urlToImage} alt="image is not available" />
                            <p>{stocknews_obj.description}{stocknews_obj.content}</p>
                        </div>
                        <div class="modal-footer" style={{ justifyContent: "space-between" }}>
                            <p >{stocknews_obj.publishedAt}</p>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-chart-line"></i></button>

                        </div>
                    </div>
                </div>
            </div>






            <hr />
            <h3>🅵🅾🆁🅴🆇🅽🅴🆆🆂</h3>

            <section className="wrapper mt-5">
                <div className="container-fostrap">

                    <div className="content">
                        <div className="container">

                            <div className="row mt-5">


                                {
                                    state.map((val, id) => {
                                        if (id <= 5) {
                                            return <div className="col-xs-12 col-sm-4">
                                                <div className="card">
                                                    <a className="img-card">
                                                        <img src={val.image} />
                                                    </a>
                                                    <div className="card-content">
                                                        <h4 className="card-title">
                                                            <a>{val.headline}
                                                            </a>
                                                        </h4>

                                                    </div>
                                                    <div className="card-read-more">
                                                        <a data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => modelcall(id)} className="btn btn-link btn-block">
                                                            Read More
                                                    </a>

                                                    </div>
                                                </div>
                                            </div>

                                        }

                                    })
                                }


                            </div>
                        </div>
                    </div>


                    <Link to="/news/forexnews" >
                        <button type="button" style={{ width: "50%" }} id="f2" class="btn btn-outline-primary">view more <i class="fas fa-book-reader"></i> </button>
                    </Link>


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

            <hr />
            <h3>🅲🆈🅿🆃🅾 🅽🅴🆆🆂</h3>
            <section className="wrapper mt-5">
                <div className="container-fostrap">

                    <div className="content">
                        <div className="container">

                            <div className="row mt-5">

                                {
                                    cypto.map((val, id) => {
                                        if (id <= 5) {
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

                                        }

                                    })
                                }


                            </div>
                        </div>
                    </div>

                    <Link to="/news/cyptonews" >

                        <button type="button" style={{ width: "50%" }} id="c3" class="btn btn-outline-primary">view more <i class="fas fa-book-reader"></i> </button>

                    </Link>

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
export default News;