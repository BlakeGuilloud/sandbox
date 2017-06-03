function stripAndShape(number) {
  let newData = data.replace(/[^0-9]/g, '');

  if (newData[0] === '1') {
    newData = `+${newData}`;
  } else {
    newData = `+1${newData}`;
  }

  return newData;
}

module.exports = stripAndShape;
