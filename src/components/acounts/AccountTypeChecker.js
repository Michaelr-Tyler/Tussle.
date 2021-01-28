export  const accoutTypeChecker = (currentUser) => {

  if (currentUser.accountTypeId !== 1) {
    return "/wrestler"
  } else {
    return "/organizer"
  }
}