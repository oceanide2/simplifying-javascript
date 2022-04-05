{
  const cart = [
    {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false
    },
    {
      name: 'Godel, Escher, Bach',
      price: 15.99,
      discount: false
    },
    {
      name: 'Red Mars',
      price: 5.99,
      discount: true
    }
  ];

  const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0
  };

  function addFreeGift(cart) {
    if (cart.length > 2) {
      cart.push(reward);
      return cart;
    }

    return cart;
  }

  function summarizeCart(cart) {
    const discountable = cart.filter(item => item.discount);

    if (discountable.length > 1) {
      return {
        error: '할인 상품은 하나만 주문할 수 있습니다'
      };
    }

    const cartWithReward = addFreeGift(cart);

    return {
      discounts: discountable.length,
      items: cartWithReward.length,
      cart: cartWithReward
    };
  }

  console.log(summarizeCart(cart));
}

{
  const cart = [
    {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false
    },
    {
      name: 'Godel, Escher, Bach',
      price: 15.99,
      discount: false
    },
    {
      name: 'Red Mars',
      price: 5.99,
      discount: true
    }
  ];

  const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0
  };

  function addFreeGift(cart) {
    if (cart.length > 2) {
      cart.push(reward);
      return cart;
    }

    return cart;
  }

  function summarizeCartUpdated(cart) {
    const cartWithReward = addFreeGift(cart);

    const discountable = cart.filter(item => item.discount);

    if (discountable.length > 1) {
      return {
        error: '할인 상품은 하나만 주문할 수 있습니다'
      };
    }

    return {
      discounts: discountable.length,
      items: cartWithReward.length,
      cart: cartWithReward
    };
  }

  console.log(summarizeCartUpdated(cart));
}

{
  const cart = [
    {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false
    },
    {
      name: 'Godel, Escher, Bach',
      price: 15.99,
      discount: false
    },
    {
      name: 'Red Mars',
      price: 5.99,
      discount: true
    }
  ];

  const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0
  };

  function addGift(cart) {
    if (cart.length > 2) {
      return [...cart, reward];
    }

    return cart;
  }

  function summarizeCartSpread(cart) {
    const cartWithReward = addGift(cart);
    const discountable = cart.filter(item => item.discount);

    if (discountable.length > 1) {
      return {
        error: '할인 상품은 하나만 주문할 수 있습니다',
      };
    }

    return {
      discounts: discountable.length,
      items: cartWithReward.length,
      cart: cartWithReward
    };
  }

  console.log(summarizeCartSpread(cart));
}

{
  const titles = ['Moby Dick', 'White Teeth'];
  const moreTitles = [...titles, 'The Conscious Mind'];
  const evenMoreTitles = ['The Conscious Mind', ...moreTitles];

  console.log(moreTitles);
  console.log(evenMoreTitles);

  const toCopy = ['Moby Dick', 'White Teeth'];
  const copied = toCopy.slice();
  const moreCopies = ['Moby Dick', 'White Teeth'];
  const moreCopied = [...moreCopies];

  console.log(copied);
  console.log(moreCopied);
}
