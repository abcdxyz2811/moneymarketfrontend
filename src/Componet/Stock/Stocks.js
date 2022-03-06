import React,{useState,useEffect} from 'react';
import axios from 'axios'
import "./Stocks.css"
import Chart from './Chart'

export default function Stocks() {
   
    const [stock,setstock] =useState([])
    const [time,settime]=useState("")

    const getStockData=async()=>{

        const data=await axios.get(`http://localhost:3000/nse/get_quote_info?companyName=tega`)
          console.log("data",data.data.data)
        setstock(data.data.data)
        settime(data.data.lastUpdateTime)
    }

    useEffect(() => {
      getStockData()
    }, [])
    

    return <>

    {stock?.map((item)=>(
        <div className="main-box-stocks mt-5">
            <div className="container">
                <div class="row justify-content-center" id="compess">
                    <div class="col-12 col-md-6">
                        <div id="mainContent_pricesummary" class="card cardscreen mt-3">
                            <div class="row no-gutters justify-content-center">
                                <div class="col-12 col-md-6 compess">
                                    <h4 className="h4">{item.companyName}</h4>
                                </div>
                                <div class="col-12 col-md-6 compess price">
                                    <span class="d-block h5 currprice">
                                        <span class='Number'>{item.lastPrice}</span><i class="fas fa-caret-up increase"></i>
                                    </span>
                                    <div id="mainContent_pnlPriceChange" class="small increment">
                                        {item.change}
                                        ({item.pChange}%)
                                     </div>
                                    <small class="text-grey">
                                        <strong>NSE:</strong>{time}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="compess">
                    <div class="col-12 col-md-6">
                        <div id="mainContent_pricesummary" class="card cardscreen mt-3">
                            <h4>Price Summary</h4>
                            <div class="row no-gutters">
                                <div class="col-6 col-md-3 compess">
                                    <small>Today's High</small>
                                    <p class="mb-3 mb-md-0">&#8377;&nbsp;<span id="mainContent_ltrlTodayHigh" class="Number">{item.dayHigh}</span></p>
                                </div>
                                <div class="col-6 col-md-3 compess">
                                    <small>Today's Low</small>
                                    <p class="mb-3 mb-md-0">&#8377;&nbsp;<span id="mainContent_ltrlTodayLow" class="Number">{item.dayLow}</span></p>
                                </div>
                                <div class="col-6 col-md-3 compess">
                                    <small>52 Week High</small>
                                    <p class="mb-3 mb-md-0">&#8377;&nbsp;<span id="mainContent_ltrl52WH" class="Number">{item.high52}</span></p>
                                </div>
                                <div class="col-6 col-md-3 compess">
                                    <small>52 Week Low</small>
                                    <p class="mb-3 mb-md-0">&#8377;&nbsp;<span id="mainContent_ltrl52WL" class="Number">{item.low52}</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="mainContent_finstarrating" class="card cardscreen finstarrating">
                            <h4 id="mainContent_divAvgrating" class="avgrating">FinStar
                            <span class="infolink" data-tooltip="An analytical aggregate of valuation, management, efficiency and financials that represents a thoroughly quantitative score"><i class="fas fa-info-circle"></i></span>
                                <span id="mainContent_ltrlOverAllRating" class="ratingstars overallstars" style={{ "--rating": "4" }} aria-label="Valuation Rating is 4 out of 5."></span>
                                <a class="ratingcollapsebtn" data-toggle="collapse" href="#ratingcollapse" role="button" aria-expanded="false" aria-controls="ratingcollapse"><i class="fas fa-caret-down"></i></a>
                            </h4>


                            <div class="row no-gutters mt-2 ratingdetails" id="ratingcollapse">
                                <div id="mainContent_divOwner" class="col-6 ratingsingle">
                                    <h6>Ownership
                                <span class='badge badge-success'>Stable</span>
                                        <span class="infolink" data-tooltip="Calculated Based on Promoter Holding, Promoter Pledging and Institutional Holding." ><i class="fas fa-info-circle"></i></span></h6>
                                    <div id="mainContent_ManagementRating" class="ratingstars" style={{ "--rating": "3.5" }} aria-label="Valuation Rating is 3.5 out of 5."></div>
                                    <span>

                                        Ownership strength is slightly missing the benchmark.
                            </span>
                                </div>
                                <div id="mainContent_divValuation" class="col-6 ratingsingle">

                                    <h6>Valuation<span class='badge badge-success'>Expensive</span>
                                        <span class="infolink" data-tooltip="Calculated Based on P/E, P/B and P/S Compared to 5 Yr Avg. and Market." ><i class="fas fa-info-circle"></i></span>
                                    </h6>
                                    <div id="mainContent_ValuationRating" class="ratingstars" style={{ "--rating": "0.0" }} aria-label="Valuation Rating is 0.0 out of 5."></div>
                                    <span>

                                        The stock is at a premium valuation at this point.
                            </span>
                                </div>
                                <div id="mainContent_divEff" class="col-6 ratingsingle">

                                    <h6>Efficiency<span class='badge badge-success'>Excellent</span>
                                        <span class="infolink" data-tooltip="Calculated Based on values of ROE% and ROCE% of the company." ><i class="fas fa-info-circle"></i></span>
                                    </h6>
                                    <div id="mainContent_EfficiencyRating" class="ratingstars" style={{ "--rating": "5.0" }} aria-label="Valuation Rating is 5.0 out of 5."></div>
                                    <span>

                                        The company knows very well the utilization of its assets.
                            </span>
                                </div>
                                <div id="mainContent_divFinance" class="col-6 ratingsingle">
                                    <h6>Financials<span class='badge badge-success'>Very Stable</span>
                                        <span class="infolink" data-tooltip="Calculated Based on Sales Growth, EPS Growth, Interest Cover and Debt/Equity values." ><i class="fas fa-info-circle"></i></span>
                                    </h6>
                                    <div id="mainContent_FinancialsRating" class="ratingstars" style={{ "--rating": "3.5" }} aria-label="Valuation Rating is 3.5 out of 5."></div>
                                    <span>

                                        The company possesses stable growth history and manageable debt.
                            </span>
                                </div>

                            </div>
                            <small class="noteremarks">
                                *It is just an analytical rating of the company and not an investment advice.
                      </small>
                        </div>
                    </div>

                    <div id="mainContent_divCompanyEssentials" class="col-12 col-md-6">
                        <div id="companyessentials" class="card cardscreen mt-md-3">
                            <div class="row no-gutters">
                                <div class="col-12 col-md-12">
                                    <h4>Company Essentials</h4>
                                </div>
                                <div class="col-12 col-md-7"></div>
                            </div>

                            <div id="mainContent_updAddRatios" class="row no-gutters">
                                <div class="col-6 col-md-4 compess">
                                    <small>Market Cap<span class="infolink" data-tooltip="Market capitalization is the aggregate valuation of the company based on its current share price and the total number of outstanding shares."><i class="fas fa-info-circle">
                                    </i>

                                    </span></small>
                                    <p>
                                        &#8377; <span class='Number'>1424874.59</span> Cr.
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>
                                        <span id="mainContent_lblEPCASA">Enterprise Value</span>
                                        <span class='infolink' data-tooltip='it measures companys total value, which includes market capitalization, debt and excludes cash.' ><i class='fas fa-info-circle'></i></span>
                                    </small>
                                    <p>
                                        <span id="mainContent_ltrlEntValue">&#8377; <span class='Number'>1421732.59</span> Cr.</span>
                                    </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>No. of Shares<span class="infolink" data-tooltip="It shows the number of shares outstanding in the company." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        <span class='Number'>369.91</span> Cr.
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>P/E<span class="infolink" data-tooltip="It is a valuation parameter that measures the company's current share price relative to its per-share earnings. Generally, high P/E is Overvalued & low P/E is Undervalued." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        38.97
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>P/B<span class="infolink" data-tooltip="It shows the relationship between the current price and the book value of each share. A lower P/B ratio can mean that the stock is undervalued." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        15.14
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>Face Value<span class="infolink" data-tooltip="Value of a security, as stated by its issuer. It has no relation with market price of the stock." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        &#8377; {item.faceValue}
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>Div. Yield<span class="infolink" data-tooltip="It measures the amount of cash dividends distributed to equity shareholders relative to the market value per share." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        1 %
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>Book Value (TTM)<span class="infolink" data-tooltip="It calculates the per share value of a company based on its equity available to common shareholders." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        &#8377;&nbsp;
                                    <span class='Number'>254.5</span>
                                    </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>
                                        <span id="mainContent_lblCashNPI">CASH</span>
                                        <span class='infolink' data-tooltip='The cash balance at the end of year after paying out dividends and expenses.' ><i class='fas fa-info-circle'></i></span>
                                    </small>
                                    <p>
                                        <span id="mainContent_ltrlCash">&#8377; <span class='Number'>3142</span> Cr.</span>
                                    </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>
                                        <span id="mainContent_lblDEBTCostToIncome">DEBT</span>
                                        <span class='infolink' data-tooltip='It is the sum of all short term and long term debts taken by the company.' ><i class='fas fa-info-circle'></i></span>
                                    </small>
                                    <p>
                                        <span id="mainContent_ltrlDebt">&#8377; <span class='Number'>0</span> Cr.</span>
                                    </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>Promoter Holding<span class="infolink" data-tooltip="The % of shares that are held by the promoters of a company." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        72.19 %
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>EPS (TTM)<span class="infolink" data-tooltip="It is the profit allocated to each outstanding share of common stock." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        &#8377;&nbsp;
                                    <span class='Number'>98.85</span>
                                    </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>
                                        <span id="mainContent_lblSalesGrowthorCasa">Sales Growth</span>
                                        <span class='infolink' data-tooltip='It shows the growth in sales revenues over a fixed period of time. Higher the rate, better it is.' ><i class='fas fa-info-circle'></i></span>
                                    </small>
                                    <p>
                                        <span class='Number'>3.55</span>%
                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>ROE
                                <span class="infolink" data-tooltip="It measures the ability of a firm to generate profits from its shareholders investments in the company." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        <span class='Number'>42.02</span> %

                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>ROCE<span class="infolink" data-tooltip="It measures how efficiently a company is using its capital employed (Debt & Equity). [Higher is better] "><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        <span class='Number'>56.24</span>%

                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <small>Profit Growth
                                    <span class="infolink" data-tooltip="It shows the growth in Net Profit over a fixed period of time. Higher the rate, better it is." ><i class="fas fa-info-circle"></i></span></small>
                                    <p>
                                        <span class='Number'>-6.92</span> %

                            </p>
                                </div>
                                <div class="col-6 col-md-4 compess">
                                    <p><a href="/" class="manageratio float-left ml-0 d-none d-md-block">Add Your Ratio</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center" id="compess">
                        <div class="col-12 col-md-12">
                            <div id="mainContent_pricesummary" class="card cardscreen mt-3">
                                <div class="row no-gutters justify-content-center">
                                    <div class="col-12 col-md-12 compess">
                                        <h4 className="h4">show chart</h4>
                                        <Chart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ))}
       
    </>;
}
