export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product) => {
  const cart = getCart();

  const exists = cart.find(item => item._id === product._id);

  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  return cart;
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item._id !== id);
  saveCart(cart);
  return cart;
};


export const increaseQty = (id) => {
  const cart = getCart().map(item =>
    item._id === id ? { ...item, quantity: item.quantity + 1 } : item
  );

  saveCart(cart);
  return cart;
};

export const decreaseQty = (id) => {
  const cart = getCart()
    .map(item =>
      item._id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );

  saveCart(cart);
  return cart;
};
