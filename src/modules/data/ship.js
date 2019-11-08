const ShipFactory = (len,cha) => {
  const hitPos = [];
  const hit = (position) => hitPos.push(position);
  const isSunk = () => hitPos.length >= len;

return { len, isSunk, hit, cha};
};

export default ShipFactory