import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import axios from "axios"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
          <Typography>{children}</Typography>
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
export default function Topandloss() {
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
  const [Gain, setGain] = useState([])
  const [Loss, setLoss] = useState([])


  const topGain = async () => {
    const topGainer = await axios.get("http://localhost:3000/nse/get_gainers");
    setGain(topGainer.data.data)
    console.log(topGainer)
  }

  const topLoss = async () => {
    const topLoss = await axios.get("http://localhost:3000/nse/get_losers");
    setLoss(topLoss.data.data)
    // console.log(topGainer)
  }
  useEffect(() => {
    topGain()
    topLoss()
  }, [])

  return (
    <>
      <div className='container'>
        <div className={classes.root} style={{"marginTop":"90px"}}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="Secondary"
              textColor="Secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Top Gainers" {...a11yProps(0)} />
              <Tab label="Top Losser" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{"fontSize":"15px"}}>symbol</TableCell>
                      <TableCell style={{"fontSize":"15px"}} align="right">Current price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>high Price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>low Price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>open Price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>Persentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Gain.map((row, id) => (
                      <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" style={{"fontSize":"15px"}}>
                          {row.symbol}
                        </TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.ltp}</TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.highPrice}</TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.lowPrice}</TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.openPrice}</TableCell>
                        <TableCell align="right" style={{ "color": "green","fontSize":"15px" }} ><ArrowUpwardIcon />{row.netPrice}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{"fontSize":"15px"}}>symbol</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>Current price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>high Price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>low Price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>open Price</TableCell>
                      <TableCell align="right" style={{"fontSize":"15px"}}>Persentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Loss.map((row, id) => (
                      <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" style={{"fontSize":"15px"}}>
                          {row.symbol}
                        </TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.ltp}</TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.highPrice}</TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.lowPrice}</TableCell>
                        <TableCell align="right" style={{"fontSize":"15px"}}>{row.openPrice}</TableCell>
                        <TableCell align="right" style={{ "color": "red","fontSize":"15px" }}><ArrowDownwardIcon />{row.netPrice}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>

          </SwipeableViews>
        </div>
        {/* <h1 className='mb-3 mt-3'>Top Gainers</h1> */}

      </div>
    </>
  )
}
