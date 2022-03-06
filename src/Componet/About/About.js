import React, { useState } from "react"
import axios from "axios"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Table, Input, Button, Space } from 'antd';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [value1, setValue1] = React.useState(0);


    const [weekGain, setweekGain] = useState([])
    const [weekLoss, setweekLoss] = useState([])
    const [Gain, setGain] = useState([])
    const [Loss, setLoss] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const handleChangeIndex1 = (index) => {
        setValue(index);
    };
    const topGain = async () => {
        const topGainer = await axios.get("http://localhost:3000/nse/get_52_week_high");
        const data = topGainer.data.data.filter((item, id) => (id < 10))

        setweekGain(data)

    }

    const topLoss = async () => {
        const topLoss = await axios.get("http://localhost:3000/nse/get_52_week_low");
        const data = topLoss.data.data.filter((item, id) => (id < 10))
        setweekLoss(data)
        // console.log(topGainer)
    }

  
  
    const topGain2 = async () => {
      const topGainer = await axios.get("http://localhost:3000/nse/get_gainers");
      const data = topGainer.data.data.filter((item, id) => (id < 10))
      setGain(data)
      console.log(topGainer)
    }
  
    const topLoss2 = async () => {
      const topLoss = await axios.get("http://localhost:3000/nse/get_losers");
      const data = topLoss.data.data.filter((item, id) => (id < 10))

      setLoss(data)
      // console.log(topGainer)
    }
    

    React.useEffect(() => {
        topGain()
        topLoss()
        topGain2()
      topLoss2()
    }, [])

    const columns = [
        {
            title: 'symbolDesc',
            dataIndex: 'symbolDesc',
            key: 'symbolDesc',
        },
        {
            title: 'Price',
            dataIndex: 'ltp',
            key: 'ltp',
        },
        {
            title: 'Day changes',
            dataIndex: 'prev',
            key: 'prev',
        },
    ];

    const columns1 = [
        {
            title: 'symbol',
            dataIndex: 'symbol',
            key: 'symbol',
        },
        {
            title: 'Price',
            dataIndex: 'ltp',
            key: 'ltp',
        },
        {
            title: 'Day changes',
            dataIndex: 'previousPrice',
            key: 'previousPrice',
        },
    ];


    return <>
        <div className="container" style={{marginTop:"20px"}}>
            <div className="row">

                <div class="col-12 col-md-6">

                    <div class="card cardscreen cardtab mb-5 mb-md-0">
                        <h4 className="text-center" style={{marginBottom:"10px"}}> 52 Week High/Low
                        </h4>
                        <div style={{marginTop:"10px"}}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="Secondary"
                                    textColor="Secondary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="High" {...a11yProps(0)} />
                                    <Tab label="Loss" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <Table Row columns={columns} dataSource={weekGain} pagination={{ pageSize: 10 }} />
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <Table columns={columns} dataSource={weekLoss} pagination={{ pageSize: 10 }} />
                                </TabPanel>


                            </SwipeableViews>


                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">

                    <div class="card cardscreen cardtab mb-5 mb-md-0">
                        <h4 className="text-center"> Top High/Loss
                        </h4>
                        <div  style={{marginTop:"10px"}}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value1}
                                    onChange={handleChange1}
                                    indicatorColor="Secondary"
                                    textColor="Secondary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="Top High" {...a11yProps(0)} />
                                    <Tab label="Top Low" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value1}
                                onChangeIndex={handleChangeIndex1}
                            >
                                <TabPanel value={value1} index={0} dir={theme.direction}>
                                    <Table Row columns={columns1} dataSource={Gain} pagination={{ pageSize: 10 }} />
                                </TabPanel>
                                <TabPanel value={value1} index={1} dir={theme.direction}>
                                    <Table columns={columns1} dataSource={Loss} pagination={{ pageSize: 10 }} />
                                </TabPanel>


                            </SwipeableViews>


                        </div>
                    </div>
                </div>
            </div>

           

                
     
        </div>

    </>

}

export default About