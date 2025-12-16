import { Locator, Page, expect } from "@playwright/test";
import { Perfil, Genero } from '../operacoes/gerarPerfil';

export default class PaginaCadastro {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visitar() {
    await this.page.goto('/');
    await this.page.getByTestId('header-botao-cadastre-se').click();
    // await this.botaoLogin.click();
    // await expect(this.page).toHaveURL('/auth/login');
  }

  async preencherFormulario(perfil: Perfil) {
    await this.page.getByTestId('form-base-input-nome').fill(perfil.nome);
    await this.page.getByTestId('form-base-input-cpf').fill(perfil.cpf);
    await this.page.getByTestId('form-base-input-cidade').fill(perfil.cidade);
    await this.page.getByTestId('form-base-input-email').fill(perfil.email);
    await this.page.getByTestId('form-base-input-senha').fill(perfil.senha);
    await this.page.getByTestId('form-base-input-telefone').fill(perfil.telefone);
    await this.page.pause();
    await this.page.getByTestId('form-base-input-data-nascimento').fill(perfil.dataNascimento);
    await this.page.getByTestId('form-base-container-estado').getByPlaceholder('Estado').fill(perfil.estado);



    await this.page.getByTestId('form-base-container-estado').fill(perfil.estado);
    await this.page.getByTestId('form-base-input-confirmar-email').fill(perfil.email);
    await this.page.getByTestId('form-base-input-confirmar-senha').fill(perfil.senha);
    await this.page.getByLabel('Li e aceito os termos e condi').check();
    await this.selectGenero(perfil.genero);
  }

  private async selectGenero(genero: Genero) {
    const mapaGenero = {
      [Genero.MASCULINO]: 'Masculino',
      [Genero.FEMININO]: 'Feminino',
      [Genero.OUTRO]: 'Prefiro não informar',

    };

    await this.page.getByLabel(mapaGenero[genero]).check();
  }

  async submeter() {
    await this.page.locator('mat-card-actions').click();
  }

  async estaMostrandoMensagemDeErro(mensagem: string) {
    const elementoErro = this.page.getByText(mensagem);
    await expect(elementoErro).toBeVisible();
  }



}