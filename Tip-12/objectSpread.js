{
  const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
  };

  const update = { ...book, year: 1984 };

  console.log(update);
}

{
  const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
  };

  const update = { ...book, title: 'Reasons & Persons' };
  console.log(update);

  const update2 = { title: 'Reasons & Persons', ...book };
  console.log(update2);
}

{
  const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
  };

  const book = {
    author: 'Joe Morgan',
    title: 'ES6 tips',
  };

  const updated = Object.assign({}, defaults, book);
  console.log(updated);

  const bookWithDefaults = { ...defaults, ...book };
  console.log(bookWithDefaults);
}
