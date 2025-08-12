import { test, expect } from '@playwright/test';

import { getAuthActions } from '../support/actions/auth'
import { getLinkActions } from '../support/actions/link';
import {getToast} from '../support/actions/components/Toast'

import { User, getTempUser } from '../support/fixtures/User';

import { removeUserByUserName, insertUser, removeLinks } from '../support/database';

test('deve cadastrar um novo link', async ({ page }) => {

    const auth = getAuthActions(page)
    const link = getLinkActions(page)
    const toast = getToast(page)

    const user: User = getTempUser()
    await removeUserByUserName(user.username)
    await insertUser(user)

    await removeLinks('papito.dev')

    await auth.navigateToLogin()
    await auth.doLogin(user)
    await link.openModal()
    await link.submitLinkForm('Meus Cursos', 'https://papito.dev/cursos')

    await toast.haveText('Sucesso!', 'Link adicionado com sucesso.')
})