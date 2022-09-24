export const addCartItem = (cartItems, productToAdd) => {
  // Find out if cartItems contains the product
  const isInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
  // If it product is in the cart -> update the quantity
  if (isInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    )
  }
  // Return updated array
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
