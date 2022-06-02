export type Person = {
  id: string;
  name: string;
  number?: string;
};

export type CreatePersonInput = {
  name: string;
  number?: string;
};

export type PersonResponse = {
  result: string;
  msg: string;
};
