// @flow

import Rail from 'national-rail-darwin';

const token = 'b79d8ba4-d7a3-470b-bc22-06f034f3c143';

const rail = new Rail(token);

const getDepartureBoard = async (_, args, data) => {
  // rail.getDepartureBoard('MKC', {}, (err, result) => {
  //   console.log('result', result.trainServices[0]);
  // });
  rail.getFastestDeparture('from', 'MKC', {}, (err, result) => {
    console.log('result', result);
  });
  return 'test';
};

export default getDepartureBoard;
