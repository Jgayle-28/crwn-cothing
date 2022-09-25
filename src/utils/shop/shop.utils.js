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

export const removeCartItem = (cartItems, productToRemove) => {
  // Find the cartItem to remove
  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )
  // If quantity is === 1 remove the item from cart item
  if (cartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }
  // Return updated array with updated cartItem quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  )
}

export const deleteCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
}
