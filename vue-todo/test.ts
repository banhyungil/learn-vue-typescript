interface temp {
  id: string;
  name: string;
}

type temp2<Type> = { [p in keyof Type]: number };
const a: temp2<temp> = { id: 2, name: 1 };

function fnTemp(param: Partial<temp>) {
  return param;
}
