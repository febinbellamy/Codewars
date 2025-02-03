function searchNames( logins ){
  return logins.filter((account) => account[0].endsWith("_"))
}