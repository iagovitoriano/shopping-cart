<h4 align="center">
	🚧 Shopping cart - Em desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-proximos-passos">Próximos passos</a> •
 <a href="#-observacoes">Observações</a> •
 <a href="#-executando o projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
</p>


## 💻 Sobre o projeto

O carrinho de compras é parte fundamental de um ecommerce. A partir dele é que o processo de compra se inicia. Essa implementação tem como objetivo implementar a [**Arquitetura Hexagonal**](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749) em uma API utilizando JS com o mínimo de dependências possíveis.

Alguns problemas seriam facilmente resolvidos utilizando IoC, interfaces e alguns outros recursos, mas é interessante testar novas abordagens num escopo limitado - Para fins de estudo.

---

### ⚙️ Funcionalidades

- [x] Adicionar um item no carrinho
- [x] Remover um item do carrinho
- [x] Atualizar a quantidade de um item no carrinho
- [x] Limpar o carrinho
- [x] Adicionar um cupom de desconto ao carrinho
- [x] Gerar totais e subtotais
- [x] Recuperar o carrinho

---

### ⚙️ Próximos passos

- [ ] Testes
- [ ] Logs
- [ ] Implementar serviço de promoção (Para validar cupons e aplicar ofertas promocionais)
- [ ] Implementar serviço entrega (Para calculo de frete e prazos de entrega)
- [ ] Implementar serviço para gerenciar taxa de serviço
- [ ] Implementar serviço para gerenciar o catálogo de produtos (estoque, disponibilidade, preço, etc.)

---

### ⚙️ Observações

Todos os serviços que violam o **DOMÍNIO** foram mockados nos **INTERADORES**. De acordo com a **Arquitetura Hexagonal/Portas e adaptadores** é necessário implementar uma **fonte de dados** que respeite um contrato e faça a ponte entre os serviços. Essa **fonte de dados** pode ser implementada utilizando qualquer protocólo de comunicação, seja HTTP, SOAP, GraphQL, etc.

Após a implementação dos outros serviços muito trabalho adicional será necessário para dar suporte a malha, como adicionar padrões para uma **comunicação resiliente**: Retry, backoff, Jitter, etc. Implementar mecanismos para **observabilidade**, **testes de contrato** e por aí vai...

---

### Pré-requisitos

Você precisará das seguintes ferramentas:
[Git](https://git-scm.com)
[Docker](https://www.docker.com/).

#### 🎲 Executando o projeto

```bash

# Clone este repositório
$ git clone git@github.com:iagovitoriano/shipping-cart.git

# Acesse a pasta do projeto no terminal/cmd
$ cd shipping-cart

# Vá para a pasta server
$ cd server

# Instale as dependências
$ docker-compose up

# O servidor será iniciado na porta "4033" -> disponível em "http://localhost:4033"

```
<p align="center">
  <a href="https://insomnia.rest/run/?label=LojaIntegrada%20-%20ShoppingCart&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fiagovitoriano%2Fshipping-cart%2Fdevelop%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Express](https://expressjs.com/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Helmet](https://github.com/helmetjs/helmet)**
-   **[mongodb](https://github.com/mongodb/node-mongodb-native)**
