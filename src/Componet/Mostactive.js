import React, { useState, useEffect } from 'react'
// import Table from '@mui/material/Table';
import { Table, Input, Button, Space } from 'antd';

// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import axios from "axios"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function Mostactive() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    // const { children, value, index, ...other } = props;
    const [masme, setmasme] = useState([])
    const [maetfs, setmaetfs] = useState([])
    const [mapricespurt, setmapricespurt] = useState([])
    const [mavolumespurt, setmavolumespurt] = useState([])
  
  
    const masmes = async () => {
      const topGainer = await axios.get("https://www.nseindia.com/api/live-analysis-most-active-sme?index=volume");

    // const topGainer=await axios({
    //     method: 'get',
    //     url: 'https://www.nseindia.com/api/live-analysis-most-active-sme?index=volume',
    //     headers:{
    //         "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY0NDA0Mzk3OSwiZXhwIjoxNjQ0MDQ3NTc5fQ.OCv2-ubPGB8Egg6Fqrg7yksh224GT_0zQvz0Rq1HD3E"
    //     }
    //   })
      console.log(topGainer)
      setmasme(topGainer.data.data)
    }
  
    const maetfss = async () => {
      const topLoss = await axios.get("https://www.nseindia.com/api/live-analysis-most-active-etf?index=volume");
      setmaetfs(topLoss.data.data)
      console.log(topLoss)
    }

    const mapricespurts = async () => {
        const topLoss = await axios.get("https://www.nseindia.com/api/live-analysis-variations?index=gainers&key=SecGtr20");
        setmapricespurt(topLoss.data.data)
        // console.log(topGainer)
      }

      const mavolumespurts = async () => {
        const topLoss = await axios.get("https://www.nseindia.com/api/live-analysis-volume-gainers");
        setmavolumespurt(topLoss.data.data)
        // console.log(topGainer)
      }
    useEffect(() => {
        masmes()
        maetfss()
        mapricespurts()
        mavolumespurts()
    }, [])

    const columns= [
        {
          title: 'symbol',
          dataIndex: 'symbol',
        },
        {
          title: 'open',
          dataIndex: 'open',
        },
        {
          title: 'High',
          dataIndex: 'dayHigh',
        },
        {
            title: 'Low',
            dataIndex: 'dayLow',
          },
          {
            title: 'lastPrice',
            dataIndex: 'lastPrice',
          },
          {
            title: 'prv. Change',
            dataIndex: 'pChange',
          },
          {
            title: 'total Volume',
            dataIndex: 'totalTradedVolume',
          },
      ];
      const columnp = [
        {
          title: 'symbol',
          dataIndex: 'symbol',
        },
        {
          title: 'open',
          dataIndex: 'open_price',
        },
        {
          title: 'High',
          dataIndex: 'high_price',
        },
        {
            title: 'Low',
            dataIndex: 'low_price',
          },
          {
            title: 'lastPrice',
            dataIndex: 'ltp',
          },
          {
            title: 'prv. Change',
            dataIndex: 'perChange',
          },
          {
            title: 'total Volume',
            dataIndex: 'trade_quantity',
          },
      ];

      const columnv= [
        {
          title: 'symbol',
          dataIndex: 'symbol',
        },
          {
            title: 'lastPrice',
            dataIndex: 'ltp',
          },
          {
            title: 'prv. Change',
            dataIndex: 'pChange',
          },
          {
            title: 'total Volume',
            dataIndex: 'volume',
          },
          {
            title: 'week1AvgVolume',
            dataIndex: 'week1AvgVolume',
          },
          {
            title: 'week2AvgVolume',
            dataIndex: 'week2AvgVolume',
          },
      ];
  return <>
 <div className='container'>
        <div className={classes.root}  style={{"marginTop":"90px"}}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="Secondary"
              textColor="Secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="SME" {...a11yProps(0)} />
              <Tab label="ETFs" {...a11yProps(1)} />
              <Tab label="Price spurt" {...a11yProps(2)} />
              <Tab label="Volume spurt" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
            <Table columns={columns} dataSource={masme} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Table columns={columns} dataSource={maetfs} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <Table columns={columnp} dataSource={mapricespurt} />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
            <Table columns={columnv} dataSource={mavolumespurt} />
            </TabPanel>

          </SwipeableViews>
        </div>
        {/* <h1 className='mb-3 mt-3'>Top Gainers</h1> */}

      </div>
  </>;
}
