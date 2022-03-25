const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/landscape-nm.jpg',
  location: [32.7122222, -103.1405556],
};

function displayPhoto(photo) {
  const title = photo.title;
  const photographer = photo.photographer || 'Anonymous';
  const location = photo.location;
  const url = photo.src;
  const copy = { ...photo };

  delete copy.title;
  delete copy.photographer;
  delete copy.location;
  delete copy.src;

  const additional = Object.keys(copy).map(key => `${key}: ${copy[key]}`);

  return (`
    <img alt="${title}사진 ${photographer} 촬영" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>위도: ${location[0]}</div>
    <div>위도: ${location[1]}</div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}

const result = displayPhoto(landscape);
console.log(result);

function displayPhotoNew({
  title,
  photographer = 'Anonymous',
  location: [latitude, longitude],
  src: url,
  ...args
}) {
  const additional = Object.keys(args).map(key => `${key}: ${args[key]}`);

  return (`
    <img alt="${title}사진 ${photographer} 촬영" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>위도: ${latitude}</div>
    <div>위도: ${longitude}</div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}

const resultNew = displayPhotoNew(landscape);
console.log(resultNew);
