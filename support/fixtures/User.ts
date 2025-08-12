import { faker } from '@faker-js/faker'

export interface User {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
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

export function getDuplicateUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Bruno',
        username: 'bruno',
        email: 'bruno@bruno.dev',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getLoginUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Fernando Papito',
        username: 'papito',
        email: 'papito@link.ai',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getTempUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'Camila dos Santos',
        username: 'camila',
        email: 'camila@link.ai',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}