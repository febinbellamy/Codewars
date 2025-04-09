const numbers = (...args) => {
  return args.filter((element) => typeof element === 'number').length === args.length;
}