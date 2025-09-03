import { test, expect } from '@playwright/test'

import { removeUserByEmail } from '../support/database'


import { createFullProfile } from '../support/services'


test('Deve exibir os meus links no meu perfil', async ({ page, request }) => {

    const profile = {
        user: {
            name: 'Steve Jobs',
            email: 'jobs@apple.com',
            username: 'stevejobs',
            bio: '',
            password: 'pwd123'
        },
        links: [
            {
                name: 'Meu Blog',
                url: 'https://blog.apple.com'
            },
            {
                name: 'Portfólio',
                url: 'https://steveportfolio.com'
            },
            {
                name: 'Canal no YouTube',
                url: 'https://www.youtube.com/stevejobs'
            },
            {
                name: 'Repositórios Open Source',
                url: 'https://opensource.apple.com'
            },
            {
                name: 'Medium',
                url: 'https://medium.com/stevejobs'
            }
        ],
        socials: {
            github: {
                platform: 'GitHub',
                username: 'stevejobsdev'
            },
            linkedin: {
                platform: 'LinkedIn',
                username: 'stevejobs'
            },
            instagram: {
                platform: 'Instagram',
                username: 'stevejobs'
            }
        }
    }

    await removeUserByEmail(profile.user.email)
    await createFullProfile(request, profile)




})