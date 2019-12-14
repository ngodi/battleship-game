/* eslint-disable arrow-parens */
/* eslint-disable no-return-assign */
const ShipFactory = (len, cha) => {
  const hitPos = new Array(len).fill(cha);
  const hit = (position) => hitPos[position] = 'X';
  const isSunk = () => hitPos.every(e => e === 'X');

  return {
    len, isSunk, hit, cha,
  };
};

export default ShipFactory;
