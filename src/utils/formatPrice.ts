const formatPrice = (price: number): string =>
  `$ ${Number(price).toFixed(2)}`.replace('.', ',')

export default formatPrice
