const ShipFactory = (len) => {
  const hitPos = [];
  const hit = (position) => hitPos.push(position);
  const isSunk = () => hitPos.length >= len;

return { len, isSunk, hit};
};

export default ShipFactory