const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

declare interface packagename {
  add: (a: number, b: number) => number;
}

export default (): packagename => {
  return {
    add,
  };
};
