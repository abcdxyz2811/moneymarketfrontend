import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios"
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import "../App.css"

// import 'antd/dist/antd.css'

// const names = [
//   'NIFTY 50',
//   'NIFTY NEXT 50',
//   'NIFTY MIDCAP 50',
//   'NIFTY MIDCAP 150',
//   'NIFTY SMLCAP 50',
//   'NIFTY SMLCAP 250',
//   'NIFTY MIDSML 400',
//   'NIFTY AUTO',
//   'NIFTY BANK',
//   'NIFTY ENERGY',
//   'NIFTY FINANCIAL SERVICE',
//   'NIFTY FMCG',
//   'NIFTY IT',
//   'NIFTY MEDIA',
//   'NIFTY METAL',
//   'NIFTY PHARMA',
//   'NIFTY PSU BANK',
//   'NIFTY REALTY',
//   'NIFTY PVT BANK',
//   'NIFTY COMMODITIES',
//   'NIFTY INDIA CONSUMPTION',
//   'NIFTY CPSE',
//   'NIFTY INFRASTRUCUR',
//   'NIFTY MNC',
//   'NIFTY GROWSECT 15',
//   'NIFTY PSE',
//   'NIFTY SERVICES SECTOR',
//   'NIFTY100 LIQ 15',
//   'NIFTY MID LIQ 15',
//   'FO STOCKS'
// ];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height:800,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [nifty, setnifty] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const [niftynext,setniftynext]= React.useState()
  const [niftymidcap,setniftymidcap]= React.useState()
  const [niftymidcap2,setniftymidcap2]= React.useState()
  const [niftysmlcap,setniftysmlcap]= React.useState()
  const [niftysmlcap2,setniftysmlcap2]= React.useState()
  const [niftymidsml,setniftymidsml]= React.useState()
  const [niftyauto,setniftyauto]= React.useState()
  const [niftybank,setniftybank]= React.useState()
  const [niftyenrgy,setniftyenrgy]= React.useState()
  const [niftyfinser,setniftyfinser]= React.useState()
  const [niftyfmcg,setniftyfmcg]= React.useState()
  const [niftyit,setniftyit]= React.useState()
  const [niftymedia,setniftymedia]= React.useState()
  const [niftymetal,setniftymetal]= React.useState()
  const [niftypharma,setniftypharma]= React.useState()
  const [niftypsubank,setniftypsubank]= React.useState()
  const [niftyreality,setniftyreality]= React.useState()
  const [niftypvtbank,setniftypvtbank]= React.useState()
  const [niftycommoditi,setniftycommoditi]= React.useState()
  const [niftyindia,setniftyindia]= React.useState()
  const [niftycpsc,setniftycpsc]= React.useState()
  const [niftyinfra,setniftyinfra]= React.useState()
  const [niftymnc,setniftymnc]= React.useState()
  const [niftygrow,setniftygrow]= React.useState()
  const [niftypsc,setniftypsc]= React.useState()
  const [niftyservice,setniftyservice]= React.useState()
  const [niftyliq,setniftyliq]= React.useState()
  const [niftymidliq,setniftymidliq]= React.useState()
  const [niftyfo,setniftyfo]= React.useState()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const pagelodenifty=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json");
  console.log('niftydata===============',niftydata);
 
  setnifty(niftydata.data.data)
}

const pagelodeniftymidcap=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyMidcap50StockWatch.json");
  setniftymidcap(niftydata.data.data)
}

const pagelodeniftymidcap2=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyMidcap150OnlineStockWatch.json");
  setniftymidcap2(niftydata.data.data)
}
const pagelodeniftysmlcap=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftySmallcap50OnlineStockWatch.json");
  setniftysmlcap(niftydata.data.data)
}
const pagelodeniftysmlcap2=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftySmallcap250OnlineStockWatch.json");
  setniftysmlcap2(niftydata.data.data)
}
const pagelodeniftymidsml=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyMidsml400OnlineStockWatch.json");
  setniftymidsml(niftydata.data.data)
}
const pagelodeniftyauto=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxAutoStockWatch.json");
  setniftyauto(niftydata.data.data)
}
const pagelodeniftybank=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/bankNiftyStockWatch.json");
  setniftybank(niftydata.data.data)
}
const pagelodeniftyenrgy=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxEnergyStockWatch.json");
  setniftyenrgy(niftydata.data.data)
}
const pagelodeniftynext=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/juniorNiftyStockWatch.json");
  setniftynext(niftydata.data.data)
}
const pagelodeniftyfinser=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxFinanceStockWatch.json");
  setniftyfinser(niftydata.data.data)
}
const pagelodeniftyfmcg=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxFMCGStockWatch.json");
  setniftyfmcg(niftydata.data.data)
}
const pagelodeniftyit=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxitStockWatch.json");
  setniftyit(niftydata.data.data)
}
const pagelodeniftymedia=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxMediaStockWatch.json");
  setniftymedia(niftydata.data.data)
}

const pagelodeniftymetal=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxMetalStockWatch.json");
  setniftymetal(niftydata.data.data)
}

const pagelodeniftypharma=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxPharmaStockWatch.json");
  setniftypharma(niftydata.data.data)
}
const pagelodeniftypsubank=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxPSUStockWatch.json");
  setniftypsubank(niftydata.data.data)
}
const pagelodeniftyreality=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxRealtyStockWatch.json");
  setniftyreality(niftydata.data.data)
}
const pagelodeniftypvtbank=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyPvtBankStockWatch.json");
  setniftypvtbank(niftydata.data.data)
}
const pagelodeniftycommoditi=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxCommoditiesStockWatch.json");
  setniftycommoditi(niftydata.data.data)
}
const pagelodeniftyindia=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxConsumptionStockWatch.json");
  setniftyindia(niftydata.data.data)
}
const pagelodeniftycpsc=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cpseStockWatch.json");
  setniftycpsc(niftydata.data.data)
}
const pagelodeniftyinfra=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxInfraStockWatch.json");
  setniftyinfra(niftydata.data.data)
}
const pagelodeniftymnc=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxMNCStockWatch.json");
  setniftymnc(niftydata.data.data)
}
const pagelodeniftygrow=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/ni15StockWatch.json");
  setniftygrow(niftydata.data.data)
}
const pagelodeniftypsc=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxPSEStockWatch.json");
  setniftypsc(niftydata.data.data)
}
const pagelodeniftyservice=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/cnxServiceStockWatch.json");
  setniftyservice(niftydata.data.data)
}
const pagelodeniftyliq=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/nseliquidStockWatch.json");
  setniftyliq(niftydata.data.data)
}
const pagelodeniftymidliq=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyMidcapLiq15StockWatch.json");
  setniftymidliq(niftydata.data.data)
}
const pagelodeniftyfo=async()=>{
  const niftydata=await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json");
  setniftyfo(niftydata.data.data)
}

  React.useEffect(()=>{
    pagelodenifty();
    pagelodeniftyauto()
    pagelodeniftybank()
    pagelodeniftycommoditi()
    pagelodeniftycpsc()
    pagelodeniftyenrgy()
    pagelodeniftyfinser()
    pagelodeniftyfmcg()
    pagelodeniftyfo()
    pagelodeniftygrow()
    pagelodeniftysmlcap2()
    pagelodeniftysmlcap()
    pagelodeniftyservice()
    pagelodeniftyindia()
    pagelodeniftyinfra()
    pagelodeniftyit()
    pagelodeniftyreality()
    pagelodeniftypvtbank()
    pagelodeniftypsubank()
    pagelodeniftypsc()
    pagelodeniftypharma()
    pagelodeniftynext()
    pagelodeniftymnc()
    pagelodeniftymidliq()
    pagelodeniftymidcap2()
    pagelodeniftymidcap()
    pagelodeniftymidsml()
    pagelodeniftymedia()
    pagelodeniftymetal()
    pagelodeniftyliq()

  },[])

  function handleSearch(selectedKeys, confirm, dataIndex) {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  function handleReset(clearFilters) {
    clearFilters();
    setSearchText('');
  };
  function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            // ref={node => {
            //   this.searchInput = node;
            // }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          // setTimeout(() => this.searchInput.select());
        }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ) : (
          text
        ),
    }
  };

  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      ...getColumnSearchProps('symbol'),
      sorter: (a, b) => a.symbol.length - b.symbol.length,
    },
    {
      title: 'High price',
      dataIndex: 'high',
      key: 'high',
      ...getColumnSearchProps('high'),
    },
    {
      title: 'low price',
      dataIndex: 'low',
      key: 'low',
      ...getColumnSearchProps('low'),
    },
    {
      title: 'open price',
      dataIndex: 'open',
      key: 'open',
      ...getColumnSearchProps('open'),
      sorter: (a, b) => a.open - b.open
    },
    {
      title: 'current price',
      dataIndex: 'ltP',
      key: 'ltP',
      ...getColumnSearchProps('ltP'),
    },
    {
      title: 'previousClose',
      dataIndex: 'previousClose',
      key: 'previousClose',
      ...getColumnSearchProps('previousClose'),
    },
    {
      title: 'weeklyhigher price',
      dataIndex: 'wkhi',
      key: 'wkhi',
      ...getColumnSearchProps('wkhi'),
    },
    {
      title: 'weeklylower price',
      dataIndex: 'wklo',
      key: 'wklo',
      ...getColumnSearchProps('wklo'),
    },
    {
      title: 'percentage %',
      dataIndex: 'per',
      key: 'per',
      ...getColumnSearchProps('per'),
      sorter: (a, b) => a.per - b.per
    },
    {
      title: 'day End Close',
      dataIndex: 'dayEndClose',
      key: 'dayEndClose',
      ...getColumnSearchProps('dayEndClose'),
    },
  ];

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="NIFTY 50" {...a11yProps(0)} />
        <Tab label="NIFTY NEXT 50" {...a11yProps(1)} />
        <Tab label="NIFTY MIDCAP 50" {...a11yProps(2)} />
        <Tab label="NIFTY MIDCAP 150" {...a11yProps(3)} />
        <Tab label="NIFTY SMLCAP 50" {...a11yProps(4)} />
        <Tab label="NIFTY SMLCAP 250" {...a11yProps(5)} />
        <Tab label="NIFTY MIDSML 400" {...a11yProps(6)} />
        <Tab label="NIFTY AUTO" {...a11yProps(7)} />
        <Tab label="NIFTY BANK" {...a11yProps(8)} />
        <Tab label="NIFTY ENERGY" {...a11yProps(9)} />
        <Tab label="NIFTY FINANCIAL SERVICE" {...a11yProps(10)} />
        <Tab label="NIFTY FMCG" {...a11yProps(11)} />
        <Tab label="NIFTY IT" {...a11yProps(12)} />
        <Tab label="NIFTY MEDIA" {...a11yProps(13)} />
        <Tab label="NIFTY METAL" {...a11yProps(14)} />
        <Tab label="NIFTY PHARMA" {...a11yProps(15)} />
        <Tab label="NIFTY PSU BANK" {...a11yProps(16)} />
        <Tab label="NIFTY REALTY" {...a11yProps(17)} />
        <Tab label="NIFTY PVT BANK" {...a11yProps(18)} />
        <Tab label="NIFTY COMMODITIES" {...a11yProps(19)} />
        <Tab label="NIFTY INDIA CONSUMPTION" {...a11yProps(20)} />
        <Tab label="NIFTY CPSE" {...a11yProps(21)} />
        <Tab label="NIFTY INFRASTRUCUR" {...a11yProps(22)} />
        <Tab label="NIFTY MNC" {...a11yProps(23)} />
        <Tab label="NIFTY GROWSECT 15" {...a11yProps(24)} />
        <Tab label="NIFTY PSE" {...a11yProps(25)} />
        <Tab label="NIFTY SERVICES SECTOR" {...a11yProps(26)} />
        <Tab label="NIFTY100 LIQ 15" {...a11yProps(27)} />
        <Tab label="NIFTY MID LIQ 15" {...a11yProps(28)} />
        <Tab label="FO STOCKS" {...a11yProps(29)} />

      </Tabs>
      <TabPanel value={value} index={0}>
      <Table columns={columns} dataSource={nifty} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Table columns={columns} dataSource={niftynext} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Table columns={columns} dataSource={niftymidcap} />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Table columns={columns} dataSource={niftymidcap2} />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Table columns={columns} dataSource={niftysmlcap} />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Table columns={columns} dataSource={niftysmlcap2} />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Table columns={columns} dataSource={niftymidsml} />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Table columns={columns} dataSource={niftyauto} />
      </TabPanel>
      <TabPanel value={value} index={8}>
      <Table columns={columns} dataSource={niftybank} />
      </TabPanel>
      <TabPanel value={value} index={9}>
      <Table columns={columns} dataSource={niftyenrgy} />
      </TabPanel>
      <TabPanel value={value} index={10}>
      <Table columns={columns} dataSource={niftyfinser} />
      </TabPanel>
      <TabPanel value={value} index={11}>
      <Table columns={columns} dataSource={niftyfmcg} />
      </TabPanel>
      <TabPanel value={value} index={12}>
      <Table columns={columns} dataSource={niftyit} />
      </TabPanel>
      <TabPanel value={value} index={13}>
      <Table columns={columns} dataSource={niftymedia} />
      </TabPanel>
      <TabPanel value={value} index={14}>
      <Table columns={columns} dataSource={niftymetal} />
      </TabPanel>
      <TabPanel value={value} index={15}>
      <Table columns={columns} dataSource={niftypharma} />
      </TabPanel>
      <TabPanel value={value} index={16}>
      <Table columns={columns} dataSource={niftypsubank} />
      </TabPanel>
      <TabPanel value={value} index={17}>
      <Table columns={columns} dataSource={niftyreality} />
      </TabPanel>
      <TabPanel value={value} index={18}>
      <Table columns={columns} dataSource={niftypvtbank} />
      </TabPanel>
      <TabPanel value={value} index={19}>
      <Table columns={columns} dataSource={niftycommoditi} />
      </TabPanel>
      <TabPanel value={value} index={20}>
      <Table columns={columns} dataSource={niftyindia} />
      </TabPanel>
      <TabPanel value={value} index={21}>
      <Table columns={columns} dataSource={niftycpsc} />
      </TabPanel>
      <TabPanel value={value} index={22}>
      <Table columns={columns} dataSource={niftyinfra} />
      </TabPanel>
      <TabPanel value={value} index={23}>
      <Table columns={columns} dataSource={niftymnc} />
      </TabPanel>
      <TabPanel value={value} index={24}>
      <Table columns={columns} dataSource={niftygrow} />
      </TabPanel>
      <TabPanel value={value} index={25}>
      <Table columns={columns} dataSource={niftypsc} />
      </TabPanel>
      <TabPanel value={value} index={26}>
      <Table columns={columns} dataSource={niftyservice} />
      </TabPanel>
      <TabPanel value={value} index={27}>
      <Table columns={columns} dataSource={niftyliq} />
      </TabPanel>
      <TabPanel value={value} index={28}>
      <Table columns={columns} dataSource={niftymidliq} />
      </TabPanel>
      <TabPanel value={value} index={29}>
      <Table columns={columns} dataSource={niftyfo} />
      </TabPanel>
    </div>
  );
}
