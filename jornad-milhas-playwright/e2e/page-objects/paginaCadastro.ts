import { Locator, Page, expect } from "@playwright/test";

export default class PaginaCadastro {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visitar() {
    await this.page.goto('/');
    // await this.botaoLogin.click();
    // await expect(this.page).toHaveURL('/auth/login');
  }

  async estaMostrandoMensagemDeErro(mensagem: string) {
    const elementoErro = this.page.getByText(mensagem);
    await expect(elementoErro).toBeVisible();
  }
}