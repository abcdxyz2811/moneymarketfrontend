import React, { useEffect, useState } from "react"


const Aboutdata = () => {
    return <>
        <div style={{ display: "flex", justifyContent: "space-around" }}>

            <img style={{ width: "600px" }} src="https://ticker.finology.in/images/bundles.png" />
            <div className="aboutdata" style={{ width: "500px" }}>
                <h1>About Us</h1>
                <br />
                <p style={{fontSize: "15px",lineHeight: "30px"}}>

                    <b>Money market</b> is a financial markets platform providing real-time data, quotes, charts, financial tools, breaking news and analysis
                    exchanges.<br />
                    In addition to the global Stock Markets,
                    money market also covers Commodities, Cryptocurrencies, World Indices, World Currencies, Commodities, Bonds, Funds & Interest Rates, ETF's Futures and Options
                    <br />
                    money market seeks to make financial markets data and information accessible and free to everyone, absolutely anywhere, bypassing the traditionally high costs that have prevented this vision from becoming a reality until now.
                    <span> Our international team covers news in 24 languages across 40+ international editions </span>

                </p>
            </div>
        </div>

    </>

}

export default Aboutdata
