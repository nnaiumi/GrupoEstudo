import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query } from '@nestjs/common';

@Controller('produtos')
export class AppController {

  // 1. GET - Buscar todos os produtos (pode passar filtros via Query)
  @Get()
  listarProdutos(@Query('nome') nome?: string) {
    if (nome) {
      return { mensagem: `Buscando produtos com o nome: ${nome}` };
    }
    return { mensagem: 'Listando todos os produtos da Panvel' };
  }

  // 2. GET - Buscar produto por ID
  @Get(':id')
  buscarProdutoPorId(@Param('id') id: string) {
    return { mensagem: `Buscando o produto com ID: ${id}` };
  }

  // 3. POST - Criar um novo produto
  @Post()
  criarProduto(@Body() dadosDoProduto: any) {
    return {
      mensagem: 'Produto criado com sucesso!',
      dadosRecebidos: dadosDoProduto,
    };
  }

  // 4. PUT - Substituir um produto inteiro
  @Put(':id')
  atualizarProdutoInteiro(@Param('id') id: string, @Body() dados: any) {
    return {
      mensagem: `Produto ${id} substituído por completo!`,
      novosDados: dados,
    };
  }

  // 5. PATCH - Atualizar apenas um dado do produto
  @Patch(':id')
  atualizarParteDoProduto(@Param('id') id: string, @Body() dadosParciais: any) {
    return {
      mensagem: `Produto ${id} atualizado parcialmente!`,
      alteracoes: dadosParciais,
    };
  }

  // 6. DELETE - Deletar um produto
  @Delete(':id')
  deletarProduto(@Param('id') id: string) {
    return { mensagem: `Produto com ID ${id} foi removido com sucesso!` };
  }
}