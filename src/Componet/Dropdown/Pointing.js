import React, { useEffect } from "react"
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import "./drop.css"
import axios from "axios";
import { Table } from 'antd';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin-top: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 0px 0;
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const Paragraph = styled('p')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin: 10px 0;
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `,
);

function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
};

const Pointing=()=>{
    const [fsma, setfsma] = React.useState("first_resistance_r1");
    const [cross, setcross] = React.useState("DESC");
    const [lsma, setlsma] = React.useState("third_resistance_r3");
    const [avaregedata,setavaregedata]=React.useState([])

    const onMovingfilter=async()=>{

      if(cross==="DESC"){
      const avrege=await axios.get(`https://trendlyne.com/fundamentals/all-in-one-screener-data-get/?perPageCount=25&pageNumber=0&query=${fsma}+%3E+${lsma}&columns=${fsma}%2C${lsma}%2CcurrentPrice%2CMCAP_Q%2Cthird_support_s3%2Cthird_support_price_diff_s3%2Cday_changeP%2Csecond_support_s2%2Csecond_resistance_r2&sortBy=${fsma}&order=DESC&groupType=all&groupName=`)
      console.log('log===>',avrege);
      setavaregedata(avrege.data.body.tableData)
      }else{
        const avareges=await axios.get(`https://trendlyne.com/fundamentals/all-in-one-screener-data-get/?perPageCount=25&pageNumber=0&query=${fsma}+%3C+${lsma}&columns=${fsma}%2C${lsma}%2CcurrentPrice%2CMCAP_Q%2Cthird_support_s3%2Cthird_support_price_diff_s3%2Cday_changeP%2Csecond_support_s2%2Csecond_resistance_r2&groupType=all&groupName=&sortBy=${fsma}&order=ASC`)
        console.log('avarege===>',avareges);
        setavaregedata(avareges.data.body.tableData)
      }
    }

    useEffect(()=>{
      onMovingfilter()
    },[])

   const columns = 
      [
        {
          title: 'Name',
          dataIndex:[0],
          
        },
        {
          title: "50Day SMA",
          dataIndex: [12],
          sorter: (a, b) => a[12] - b[12]
        },
        {
          title: '100Day SMA',
          dataIndex: [13],
          sorter: (a, b) => a[13] - b[13]
        },
        {
          title: "Current price",
          dataIndex: [14],
          sorter: (a, b) => a[14] - b[14]
        },
        {
          title: "MCAP Cr",
          dataIndex: [15],
          sorter: (a, b) => a[15] - b[15]
        },
        {
          title: "Day changes %",
          dataIndex: [16],
          sorter: (a, b) => a[16] - b[16]
        },
        {
          title: "1yr changes %",
          dataIndex: [17],
          sorter: (a, b) => a[17] - b[17]
        },
        {
          title: "1yr High",
          dataIndex: [18],
          sorter: (a, b) => a[18] - b[18]
        },
        {
          title: "1yr Low",
          dataIndex: [19],
          sorter: (a, b) => a[19] - b[19]
        },
        {
          title: "200Day SMA",
          dataIndex: [20],
          sorter: (a, b) => a[20] - b[20]
        },
      ]
  
    return (<>
    <div className="container mt-5 avregecontent mb-5">
      <div>
        <CustomSelect value={fsma} onChange={setfsma}>
          <StyledOption value={"first_resistance_r1"}>R1</StyledOption>
          <StyledOption value={"second_resistance_r2"}>R2</StyledOption>
          <StyledOption value={"third_resistance_r3"}>R3</StyledOption>
          <StyledOption value={"first_support_s1"}>S1</StyledOption>
          <StyledOption value={"second_support_s2"}>S2</StyledOption>
          <StyledOption value={"third_support_s3"}>S3</StyledOption>
        </CustomSelect>
      </div>
      <div>
        <CustomSelect value={cross} onChange={setcross}>
          <StyledOption value={"DESC"}>Above</StyledOption>
          <StyledOption value={"ASC"}>Below</StyledOption>
        </CustomSelect>
      </div>
      <div>
      <CustomSelect value={lsma} onChange={setlsma}>
      <StyledOption value={"first_resistance_r1"}>R1</StyledOption>
          <StyledOption value={"second_resistance_r2"}>R2</StyledOption>
          <StyledOption value={"third_resistance_r3"}>R3</StyledOption>
          <StyledOption value={"first_support_s1"}>S1</StyledOption>
          <StyledOption value={"second_support_s2"}>S2</StyledOption>
          <StyledOption value={"third_support_s3"}>S3</StyledOption>
        </CustomSelect>
      </div>
     <div className="movingbtn">
     <button type="button" class="btn btn-primary" onClick={onMovingfilter}>submit</button>
     </div>
      </div>
      <div className="container mt-5 mb-5">
      <div className="mb-5  d-flex flex-column justify-content-center">
        <h3 className="text-center">Stocks with their {fsma} trading below their {lsma}</h3>
        <p className="text-center">The moving average (MA) is a simple technical analysis tool that smooths out price data by creating an average price over different periods. When asset prices cross over or below their moving averages, it may generate a trading signal for technical traders. This screener shows Stocks with their {fsma} trading below their {lsma}</p>
      </div>

<div className="mt-5 tablemoving">
<Table columns={columns} dataSource={avaregedata} />
</div>
</div>
</>
    )
}

export default Pointing