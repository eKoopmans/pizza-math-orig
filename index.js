function getArea(diameter) {
  return Math.PI * Math.pow(diameter / 2, 2)
}
function getValue(diameter, cost) {
  return getArea(diameter) / cost
}
function getRatio(pizza1, pizza2) {
  const values = [pizza1, pizza2].map(pizza => {
    return getValue(pizza.diameter, pizza.cost)
  })
  return values[1] / values[0]
}
