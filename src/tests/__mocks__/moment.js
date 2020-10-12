//requires actual library para usar na mock library
const moment = require.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};
