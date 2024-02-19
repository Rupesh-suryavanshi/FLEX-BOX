import React from 'react';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'white',
  },
  box: {
    width: '100px',
    height: '100px',
  },
  red: {
    backgroundColor: 'red',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  green: {
    backgroundColor: 'green',
  },
  purple: {
    backgroundColor: 'purple',
  },
};

const Parent = () => {
  return React.createElement(
    'div',
    { style: styles.row },
        React.createElement('div', { style: { ...styles.box, ...styles.red } }),
      React.createElement('div', { style: { ...styles.box, ...styles.yellow } }),
        React.createElement('div', { style: { ...styles.box, ...styles.green } }),
      React.createElement('div', { style: { ...styles.box, ...styles.purple } })
  );
};

export default Parent;
