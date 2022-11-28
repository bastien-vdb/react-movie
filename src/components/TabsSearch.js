import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material/';

function TabsSearch({ setProductType }) {

  const [value, setValue] = useState(0);

  const handleChange = (e, f) => {
    setValue(f);

    switch (f) {
      case 0:
        setProductType('movie');
        break;
      case 1:
        setProductType('tv');
        break;
      default:
        setProductType('movie');
    }
  }

  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Movies" />
      <Tab label="Series TV" />
    </Tabs>
  );
}

export default TabsSearch;