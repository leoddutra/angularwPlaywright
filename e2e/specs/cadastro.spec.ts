import { gerarPerfil } from "e2e/operacoes/gerarPerfil";
import { test } from "e2e/setup/fixtures";


test.describe('Página de cadastro', () => {
    test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
        const perfil = gerarPerfil();
        await paginaCadastro.visitar();

        await paginaCadastro.preencherFormulario(perfil);
        await paginaCadastro.submeter();

            console.log(perfil);



        //prencher form dados com novoUsuario a cadastrar no BD 
        //na primeira execução sucesso!
        //na segunda falha
    });
});