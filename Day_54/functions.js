function greetUser(greetingPrefix, userName = "user") {
  // user est donc la valeur définie par défaut.
  console.log(greetingPrefix + " " + userName + " !");
}

greetUser("Coucou", "Laurent");
greetUser("Coucou");
