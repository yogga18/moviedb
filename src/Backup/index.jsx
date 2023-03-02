import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Movie from './Movie';
import api from './api';
import './pages.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='blueGrey'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          <Tab label='Upcoming' {...a11yProps(0)} />
          <Tab label='Now Playing' {...a11yProps(1)} />
          <Tab label='Trending' {...a11yProps(2)} />
          <Tab label='Top Rated' {...a11yProps(3)} />
          <Tab label='Tv Top Rated' {...a11yProps(4)} />
          <Tab label='Tv Now Playing' {...a11yProps(5)} />
          <Tab label='Trending All Day' {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Movie title='Upcoming' url={api.upcoming} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Movie title='Now Playing' url={api.nowPlaying} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Movie title='Trending' url={api.trending} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Movie title='Top Rated' url={api.topRated} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Movie title='Tv Top Rated' url={api.tvTopRated} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Movie title='Tv Now Playing' url={api.tvNowPlaying} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Movie title='Trending All Day' url={api.trendingAllDay} />
      </TabPanel>
    </div>
  );
}
