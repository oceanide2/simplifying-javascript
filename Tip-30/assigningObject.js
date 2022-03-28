const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  location: [32.7122222, -103.1405556]
};

function determineCityAndState(location) {
  const [ latitude, lognitude ] = location;

  if (latitude === 32.7122222 && lognitude === -103.1405556) {
    return {
      city: 'Hobbs',
      county: 'Lea',
      state: {
        name: 'New Mexico',
        abbreviation: 'NM',
      }
    };
  }
}

function getCityAndState({ location }) {
  const { city, state } = determineCityAndState(location);

  return {
    city,
    state: state.abbreviation,
  };
}

function setRegion({ location, ...details }) {
  const { city, state } = determineCityAndState(location);

  return {
    city,
    state: state.abbreviation,
    ...details
  };
}

const getRegionInfo = getCityAndState(landscape);
console.log(getRegionInfo);

const setRegionInfo = setRegion(landscape);
console.log(setRegionInfo);
