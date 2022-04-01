{
  const sections = ['shipping'];

  function displaySections(sections) {
    if (sections.indexOf('shipping')) {
      return true;
    }

    return false;
  }

  console.log(displaySections(sections));
  // false
}

{
  const sections = ['shipping'];

  function displaySections(sections) {
    return sections.indexOf('shipping') > -1;
  }

  console.log(displaySections(sections));
  // true
}

{
  const sections = ['shipping'];

  function displaySections(sections) {
    return sections.includes('shipping');
  }

  console.log(displaySections(sections));
  // true
}
