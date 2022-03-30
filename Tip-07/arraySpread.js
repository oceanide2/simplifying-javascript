{
  const cart = ['Naming and Necessity', 'Alice in wonderland'];

  const copyCart = [...cart];

  console.log(copyCart);
}

{
  function removeItem(items, removable) {
    const updated = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i] !== removable) {
        updated.push(items[i]);
      }
    }

    return updated;
  }

  const items = [1, 2, 3, 4, 5];
  console.log(removeItem(items, 3));
}

{
  function removeItem(items, removable) {
    const index = items.indexOf(removable);

    items.splice(index, 1);

    return items;
  }

  const items = [1, 2, 3, 4, 5];
  console.log(removeItem(items, 3));
}

{
  function removeItem(items, removable) {
    const index = items.indexOf(removable);

    return items.slice(0, index).concat(items.slice(index + 1));
  }

  const items = [1, 2, 3, 4, 5];
  console.log(removeItem(items, 3));
}

{
  function removeItem(items, removable) {
    const index = items.indexOf(removable);

    return [...items.slice(0, index), ...items.slice(index + 1)];
  }

  const items = [1, 2, 3, 4, 5];
  console.log(removeItem(items, 3));
}
