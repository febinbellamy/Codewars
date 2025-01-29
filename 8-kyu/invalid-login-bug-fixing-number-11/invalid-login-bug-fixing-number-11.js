function validate(username, password){
  var database = new Database();
  if (password.includes("||") || password.includes("//")) {
    return "Wrong username or password!"
  }
  return database.login(username, password);
}