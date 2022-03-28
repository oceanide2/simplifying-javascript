// Refernce:
// https://github.com/velopert/learnjs/blob/master/useful/06-destructuring.md
//

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese'],
    }
  },
  value: 5
};

{
  const { name, languages } = deepObject.state.information;
  const { value } = deepObject;

  const extracted = {
    name,
    languages,
    value
  };

  console.log(extracted);
}

{
  const {
    state: {
      information: { name, languages },
    },
    value
  } = deepObject;

  const extracted = {
    name,
    languages,
    value
  };

  console.log(extracted);
}
