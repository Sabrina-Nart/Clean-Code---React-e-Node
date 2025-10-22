// Nomenclatura de variáveis

const users = ['Diego', 'Mayck', 'Rodrigo'];

const usersStartingWithLetterD = users.filter(user => {
    return user.startsWith('D')
});

//Evite diminutivos
//As variáveis devem ter nomes descritivos

// ------------------------------

// Evite nomes genéricos (data, response, list, args, params)

function getUsers() {
    const data = getUsersFromDatabase();

    //Validação
    // Manipulação dos dados (mapping)

    return data;
}

function getCompanies() {
    const data = getCompaniesFromDatabase();

    return data;
}