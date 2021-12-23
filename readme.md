## Desafio técnico Loja Integrada! - API de Carrinho

O carrinho de compras é parte fundamental de um ecommerce. A partir dele é que o processo de compra se inicia. Na Loja Integrada um produto só pode ser comprado se ele tiver sido adicionado ao carrinho.

Uma API de carrinho de compras tem que ser rápida e consistente. A quantidade de requisições nela é bem alta e quanto mais lenta a resposta, menos as pessoas compram. Mas a velocidade não é tudo! Quando a API não consegue responder corretamente às requisições e não tem os tratamentos de erro corretos isso gera inconsistência e os clientes desistem das compras pois acham que a loja não é confiável.

Pense nas possibilidades reais de uma loja. Os produtos acabam pois seu estoque total foi vendido, alguns produtos tem o seu preço (ou nome) alterado, outros são desabilitados, um carrinho pode ser abandonado. Qual será o comportamento do seu carrinho quando um produto não está mais disponível? Um visitante que deixou o carrinho de compras preenchido quando voltar à loja quer ver o seu carrinho de volta, como mostrar o carrinho correto?

Documentação: É super importante, você deve documentar a sua API para que outros humanos possam ler e usar a API. Lembre-se também de documentar como você inicia o projeto e como soluciona os problemas mais comuns na hora de rodar e fazer atualizações no seu código.

Sabemos que a API do Carrinho depende de outras APIs ou de dados pré-existentes no banco de dados e, para isso, deixamos você livre para decidir como quer fazer essa parte adicional.

Algumas possibilidades: Fazer um mock dos dados de produtos ou criar uma API simples para retornar os dados de um produto. Essa não é uma parte crítica, então foque nos requisitos do desafio.

> ## O que é requerido:

- Adicionar um item no carrinho
- Remover um item do carrinho
- Atualizar a quantidade de um item no carrinho
- Limpar o carrinho
- Adicionar um cupom de desconto ao carrinho
- Gerar totais e subtotais
- Persistir o carrinho
- Recuperar o carrinho
- Retornar um JSON com o carrinho completo (para ser usado no frontend)


> ## Siga esses pontos:

- Escolha a linguagem de programação de sua preferência
- Utilize docker para o criar o ambiente de desenvolvimento
- Você não precisa construir nenhum HTML nesse desafio
- Você precisa fazer o commit de todos os arquivos necessários para rodar o projeto (use mensagens de commit que façam sentido)
- Testes e BDD são bem-vindos
- Documente a sua API (gere uma documentação legível para humanos

> ## Entrega: Deve ser feita em um repositório público no github ou bitbucket com todos os arquivos necessários para rodar o projeto e o histórico de todos os commits, assim como documentações e arquivos auxiliares.

Compartilhar com Github users: alefumes, giancarlosouza, gustavorosolem, iurykrieger, jonatasoliveira, mbanton, alexpsilva, villaca, andersonrostirolla, udleinati, natanfernandes, gabrielzevedo, ericrsilva, mhcamillow.
