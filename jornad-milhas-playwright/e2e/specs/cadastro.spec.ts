import { gerarPerfil } from "e2e/operacoes/gerarPerfil";
import PaginaCadastro from "e2e/page-objects/paginaCadastro";
import { test } from "e2e/setup/fixtures";

test.describe('Página de cadastro', () => {
    test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
        await paginaCadastro.visitar();

        const novoUsuario = gerarPerfil();

        console.log(novoUsuario);
        

        //prencher form dados com novoUsuario a cadastrar no BD 
        //na primeira execução sucesso!
        //na segunda falha
    });
});