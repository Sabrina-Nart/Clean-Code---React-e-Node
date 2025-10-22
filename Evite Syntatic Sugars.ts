// Evite Syntatic Sugars = Coisas muito específicas de uma única linguagem de programação

const numberInString = "1234567890";

const number = +numberInString; // Evite esse tipo de sintatic sugar

const number = parseInt(numberInString); // Use funções nativas que são mais claras e entendíveis

const number = Number(numberInString); // Outra alternativa clara e entendível
const isNumberNotNull = Boolean(number); // Converte para boolean
const numberAsString = String(number); // Converte para string
