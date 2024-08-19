class CartDTO {
  constructor(cart) {
    this.id = cart._id;
    this.products = cart.products.map((item) => {
      return {
        _id: item._id,
        quantity: item.quantity,
      };
    });
  }
}

export default CartDTO;
