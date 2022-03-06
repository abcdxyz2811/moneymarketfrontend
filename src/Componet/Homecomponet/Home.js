import React from "react"
import stockvideo from "../img/stockvideo.mp4"
import TextField from '@mui/material/TextField';
// import { Autocomplete ,createFilterOptions } from '@mui/material/Autocomplete';
// import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios"
import "./Home.css"
// import arr from "./Arraystock"
import { AutoComplete,Modal } from 'antd';
import About from "../About/About";
import Maerqree from "../About/Maerqree";
// import { Select } from "antd";

// import { Option } from "Select";
import Aboutdata from "../About/Aboutdata";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// const Option = AutoComplete.Option;
// const {  Modal, Button  } = antd;
const Home = () => {
  const [value, setValue] = React.useState(null);
  const [search, setsearch] = React.useState([])
  const [visible, setVisible] = React.useState(false);
  // const onSearch = searchText => {
  //   this.setState({
  //     dataSource: !searchText ? [] : [searchText.title],
  //   });
  // const items = [
  //   {
  //     id: 0,
  //     name: 'Cobol'
  //   },
  //   {
  //     id: 1,
  //     name: 'JavaScript'
  //   },
  //   {
  //     id: 2,
  //     name: 'Basic'
  //   },
  //   {
  //     id: 3,
  //     name: 'PHP'
  //   },
  //   {
  //     id: 4,
  //     name: 'Java'
  //   }
  // ]
  const handleOnSearch =async (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.

   const strdata= await  axios.get(`http://localhost:3000/nse/search_stocks?keyword=${string}`)
   console.log("data serching ====>",strdata)
   setsearch(strdata.data)

    console.log("string serching ====>",string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  // function onSelect(value) {
  //   console.log('onSelect', value);
  // }
  return (
    <>
      <div className="videobox">
        <video autoplay="true" muted loop id="myVideo">
          <source src={stockvideo} type="video/mp4" />
                       Your browser does not support HTML5 video.
                    </video>
        <div className="wrapper2" style={{ width: 400 }}>
        <button class="searchBar-3V6BxBaO js-header-search-button" onClick={()=>setVisible(true)}><div class="searchButton-3V6BxBaO"><span class="searchIcon-3V6BxBaO"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm-1.25 5.8a7.5 7.5 0 1 1 1.06-1.06l4.22 4.23a.75.75 0 1 1-1.06 1.06l-4.22-4.22z"></path></svg></span></div><span class="searchText-3V6BxBaO">Search markets here</span></button>

        <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
       <ReactSearchAutocomplete
            items={search}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
      
      </Modal>
        </div>
      </div>
      <br/><br/>
    <About/>
    <br/><br/>
    <Maerqree/>
    <br/>
    <Aboutdata/>
    </>
  )
}

export default Home