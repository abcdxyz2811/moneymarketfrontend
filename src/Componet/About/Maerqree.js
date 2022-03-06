import React,{useEffect,useState} from "react"
import axios from "axios"


const Maerqree=()=>{

    const [nifty,setnifty] = useState([])

    const getNifty=async()=>{
        const data=await axios.get("http://localhost:3000/nse/get_index_stocks?symbol=nifty");
        console.log("data nifty====>",data.data.data)
        setnifty(data.data.data)
    }

    useEffect(() => {
        getNifty();
    }, [])
    
return <>
<div id="mainContent_pnlindicesBSE" >
<marquee scrollamount="10">
<div class="Marquee">
  <div class="Marquee-content">
    <div class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div class="swiper-wrapper" id="swiper-wrapper-af18eeb10bec232ab" aria-live="polite" style={{transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)",display:"flex"}}>
            {
                nifty.map((val)=>(
                    <>
                   
                    <div class="card cardscreenFixed cardtoolbar" style={{minWidth: "20%",margin:"10px",padding:"10px"}}>
                            <a href="/market/index/bse/sensex">
                                <div class="compess">
                                    <p class="mb-1" style={{color:"black"}}>
                                       {val.symbol}
                                    </p>
                                    <small style={{color:"black"}}>Nse&amp;Bse</small>

                                </div>
                                <div class="row no-gutters mt-3 pb-3">
                                    <div class="col-5">
                                        <span class="h5 text-dark font-weight-bold">
                                            {val.ltP}
                                        </span>
                                    </div>
                                    <div class="col-7 text-right">
                                        {
                                            val.per<=0?<><span class="text-red bg-transparent"
                                            style={{color:"red"}}>&nbsp;<i class="fas fa-caret-down"></i> &nbsp;<span class="Number" value="-366.220000000001">{val.ptsC}</span>&nbsp;(<span class="Number" value="-0.660225820234406">{val.per}</span>%)</span>
                                            </>:
                                            <><span class="text-red bg-transparent" style={{color:"green"}}>&nbsp;<i class="fas fa-caret-up"></i> &nbsp;<span class="Number" value="-366.220000000001">{val.ptsC}</span>&nbsp;(<span class="Number" value="-0.660225820234406">{val.per}</span>%)</span>
                                            </>
                                        } 
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        </>

                ))

            }     
                    </div>
                    </div>
                    </div>
                    </div>
                    </marquee>
                    </div>

</>
}

export default Maerqree