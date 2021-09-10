// TODO: allow caller to specify filters and have those filters applied for the returned rows

import { DIMENSIONS, ALL_DATA } from './data';

const pullDataFactory = placeResults => () => {
  const gridData = ALL_DATA.map(dataObj => Object.values(dataObj));
  placeResults([DIMENSIONS, ...gridData]);
};

export default pullDataFactory;
