// Código em inglês

// Evite negações dentro de condicionais
// Escrever de forma que a condicional não precise de uma negação para ser entendida.
// Negação dentro de ifs

const isUserYoungerThan18Years = true;
const doesUsertLivesOutsideBrasil = true;

if (isUserYoungerThan18Years && doesUsertLivesOutsideBrasil) {
  // ...
}

// Early return vs else

function isUserOlderThan18Yars(user) {
  if (!user) {
    return { error: true}
  }

  return user.age > 18;
}

// Evite condicionais aninhadas - condicionais dentro de outras
// Fazer um if embaixo do outro, do que dentro

user.age > 18 ? user.age === 18 ? : :

if (user.age > 18) {
     return;
}

if () {

}