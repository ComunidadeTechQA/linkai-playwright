import { faker } from '@faker-js/faker'

export interface UserSignup {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
}

export interface UserLogin {
    name: string
    username: string
    password: string
}

export function getFakeUser() {
    const defaultPassword = 'pwd123'

    return {
        name: faker.person.fullName(),
        username: faker.internet.username().replace('.', ''),
        email: faker.internet.email(),
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getNewUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Papito Fernando',
        username: 'fernando',
        email: 'fernando@papito.dev',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}


export const Users = {
    validUser: {
        name: 'Fernando',
        username: 'papito',
        password: 'pwd123'
    },
    wrongPassword: {
        name: 'Fernando',
        username: 'papito',
        password: '123456'
    },
    userNotFound: {
        name: 'Fernando',
        username: 'not-found',
        password: '123456'
    },
    emptyFields: {
        name: 'Fernando',
        username: '',
        password: ''
    },
    missingUsername: {
        name: 'Fernando',
        username: '',
        password: 'pwd123'
    },
    missingPassword: {
        name: 'Fernando',
        username: 'papito',
        password: ''
    }
}

