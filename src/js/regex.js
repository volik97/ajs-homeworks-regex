class Validator {
  validateUsername(name) {
    this.name = name;
    return (
      /^[a-zA-Z][a-zA-Z0-9\-_]+[a-zA-Z]$/.exec(this.name) !== null
      && !/[0-9]{4}/.test(this.name)
    );
  }
}

export default Validator;

// const val = new Validator();
// console.log(val.validateUsername("hhhGg_ggg6u"));
// console.log(val.validateUsername("666gggg"));
// console.log(val.validateUsername("ggg6666gggg"));
// console.log(val.validateUsername("ggg!@gg67jjj"));
