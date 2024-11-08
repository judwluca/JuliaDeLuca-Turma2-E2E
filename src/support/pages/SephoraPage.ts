import { Page } from '@playwright/test';
import SephoraElements from '../elements/SephoraElements';

export default class SephoraPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Acessa a página inicial da Sephora
  async openHomePage() {
    await this.page.goto('https://www.sephora.com.br/');
  }

  // Pesquisa um termo na Sephora
  async searchProduct(term: string) {
    const searchInput = this.page.getByRole('textbox', { name: 'Busca' })
    const searchButton = this.page.locator(SephoraElements.searchButton);

    // Preenche o campo de pesquisa e clica no botão de pesquisa
    await searchInput.fill(term);
    await searchButton.click();
  }

}
