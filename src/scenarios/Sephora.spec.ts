import { test, expect } from '@playwright/test';
import SephoraPage from '../support/pages/SephoraPage';
import SephoraElements from '../support/elements/SephoraElements';

test('Verificar placeholder do campo de busca', async ({ page }) => {
  const sephoraPage = new SephoraPage(page);
  await sephoraPage.openHomePage();
  const placeholderText = await page.getByRole('textbox', { name: 'Busca' }).getAttribute('placeholder');
  expect(placeholderText).toBe('Busca');
});
test('Pesquisar por blush e verificar redirecionamento', async ({ page }) => {
  const sephoraPage = new SephoraPage(page);
  await sephoraPage.openHomePage();
  await sephoraPage.searchProduct('blush');
  await expect(page).toHaveURL(/busca\/\?q=blush/);
});

