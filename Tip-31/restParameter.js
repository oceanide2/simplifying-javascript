{
  function validateCharacterCount(max, items) {
    return items.every(item => item.length < max);
  }

  console.log(validateCharacterCount(10, ['Hobb', 'Eagles']));
  // console.log(validateCharacterCount(10, 'Hobb'));
}

{
  function validateCharacterCount(max) {
    const items = Array.prototype.slice.call(arguments, 1);

    return items.every(item => item.length < max);
  }

  console.log(validateCharacterCount(10, ['Hobb', 'Eagles']));
  console.log(validateCharacterCount(10, 'Hobb'));
}

{
  function validateCharacterCount(max) {
    const items = Array.from(arguments).slice(1);

    return items.every(item => item.length < max);
  }

  console.log(validateCharacterCount(10, ['Hobb', 'Eagles']));
  console.log(validateCharacterCount(10, 'Hobb'));
}

{
  function validateCharacterCount(max, ...items) {
    return items.every(item => item.length < max);
  }

  console.log(validateCharacterCount(10, ['Hobb', 'Eagles']));
  console.log(validateCharacterCount(10, 'Hobb'));
  console.log(validateCharacterCount(10, 'Hobb', 'Eagles'));
}

{
  function getArgumentsObject(...args) {
    return args;
  }

  const person = {
    gender: 'male',
    name: 'oceanide'
  };

  console.log(getArgumentsObject(person));
  // [ { gender: 'male', name: 'oceanide' } ]
}

{
  const movie = ['Spiritd Away', 'Princess Mononoke'];

  const lowerCaseMovie = movie.map((film, ...other) => {
    console.log(other);
    // [ 0, [ 'Spiritd Away', 'Princess Mononoke' ] ]
    // [ 1, [ 'Spiritd Away', 'Princess Mononoke' ] ]

    return film.toLowerCase();
  });

  console.log(lowerCaseMovie);
  // [ 'spiritd away', 'princess mononoke' ]
}
