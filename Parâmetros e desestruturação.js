// Parâmetros e desestruturação

// Rota para criação do usuário (name, email, password)
// Controller (name, email, password)
// Repositorio (name, email, password)

function createUserRoute(body) {
    // Validações

    createUserController(body);
}

function createUserController(data) {
    userRepository.create(data);
}

const userRepository = {
    create(data) {
        // Cria o usuário (name, email, password)
        const { name, email, password } = data;
    }
}

/////////////////////////////////////////////////////////////////////

// Mais legível

function createUserController(body) {
    const { name, email, password } = body;
    
    createUaserController({
        name,
        email,
        password
    })
}

/////////////////////////////////////////////////////////////////////

const usersRepository = {
    create(data) {
        const user = createUserOnDatabase()

        return {
            user,
        }
    }
}