# Projeto de Aplicação Web de Gerenciamento de Produtos e Compras

Este é um projeto de aplicação web que tem como objetivo fornecer uma plataforma para gerenciar produtos, criar um carrinho de compras e realizar pagamentos de forma eficiente e amigável para o usuário.

## Funcionalidades Principais

- **Listagem de Produtos:** Exibe uma lista de produtos disponíveis para compra, incluindo detalhes como nome, descrição, preço e disponibilidade.
- **Adicionar, Editar e Excluir Produtos:** Os usuários têm a capacidade de adicionar novos produtos, editar informações existentes e excluir produtos da lista.
- **Carrinho de Compras:** Permite aos usuários adicionar produtos desejados ao carrinho de compras, com a capacidade de ajustar a quantidade de itens no carrinho.
- **Pagamentos:** Oferece uma experiência de pagamento segura, permitindo que os usuários concluam suas compras com métodos de pagamento seguros.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes JavaScript)

## Instalação Manual

Siga estas etapas para instalar manualmente e executar o projeto em sua máquina:

1. Clone este repositório para o seu sistema local usando o seguinte comando no terminal:

   ```shell
   git clone https://github.com/dansantanna/mais-todos.git
   ```
2. Navegue até o diretório do projeto:

   ```shell
   cd mais-todos
   ```

### Primeiro instalaremos o **servidor** da aplicação:

1. Navegue até a pasta *server* que se encontra na raíz e instale as dependências usando o npm

   ```shell
   cd server
   npm install
   ```
2. Após a conclusão da instalação das dependências, você precisará configurar o **banco de dados SQLite3**. Para isto rode o comando:

   ```shell
   npm run knex:migrate
   ```
3. Depois de configurar o banco de dados você poderá popular ele com produtos fakes rodando o comando:

   ```shell
   npm run knex:seed
   ```
4. Agora o servidor está configurado e pronto para uso, para iniciar use o seguinte comando:

```shell
 npm run dev
```

### Agora instalaremos o **Frontend**  da aplicação

1. Navegue até a pasta *client* que se encontra na raíz e instale as dependências usando o npm

   ```shell
   cd ../client
   npm install
   ```
2. Agora que o projeto foi instalado precisaremos configurar as variáveis de ambiente:

   - **Copie o arquivo `.env.example`**:
   - Use um comando de cópia no terminal (Linux, macOS, Windows com Git Bash) para criar uma cópia do arquivo `.env.example` com o nome `.env`:

     ```
     cp .env.example .env
     ```
   - No Windows, você pode usar o seguinte comando no Git Bash:

     ```
     cp .env.example .env
     ```
   - **Edite o arquivo `.env`**:
   - Abra o arquivo `.env` com seu editor de texto preferido (por exemplo, Visual Studio Code, Sublime Text, Notepad++).
   - Dentro do arquivo `.env`, você verá uma lista de variáveis de ambiente no formato `NOME_DA_VARIAVEL=VALOR_DA_VARIAVEL`. Por exemplo:

     ```plaintext
     REACT_APP_APIURL="https://fakestoreapi.com"
     REACT_APP_STRIPE_PUBLISHABLE_KEY=""
     REACT_APP_STRIPE_SECRET_KEY=""
     ```
   - Preencha os valores das variáveis de ambiente com as informações reais que a  aplicação precisa, exemplo:

     ```plaintext
     REACT_APP_APIURL="http://localhost:3100"
     REACT_APP_STRIPE_PUBLISHABLE_KEY="pk_test_51Nxw9kFCcyGVf1aygMp4FdNxteaEkwygOhN8H54plPFlKIjE1OGBTzLyaemLIdLe9mzJaAUDSbMdOqRxuSI18kGp007IKwimy1"  
     REACT_APP_STRIPE_SECRET_KEY="sk_test_51Nxw9kFCcyGVf1aygzqfUVvCNoA0hd3TigLldUGj7aMHViUUNmvclsFkQS0djP0opsKS43nxJSY4KyDlbnOeInug00JtRb4wAs"
     ```
   - **Salve o arquivo `.env`**: Após preencher todas as variáveis de ambiente com os valores apropriados, salve o arquivo.
3. Agora o Frontend está configurado e pronto para uso, para iniciar use o seguinte comando:

```shell
 npm run start
```

## Storybook

### Motivo

A inclusão do Storybook em nosso projeto é uma decisão estratégica devido às várias vantagens que oferece. Ele nos permite desenvolver e testar componentes individualmente, simplificando o ciclo de desenvolvimento e garantindo a qualidade. Além disso, gera documentação automática detalhada, facilita testes visuais, promove a colaboração eficiente entre equipes de desenvolvimento e design, e personaliza-se facilmente às nossas necessidades. O Storybook também incentiva a reutilização de componentes, simplifica os testes unitários e possui um ecossistema de addons robusto. Com suporte multiplataforma, o Storybook é uma escolha essencial para melhorar a qualidade e a eficiência do nosso projeto.

### Uso

1. Execute `npm run storybook` para iniciar o Storybook.
2. Acesse a aplicação em seu navegador, normalmente em `http://localhost:6006`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request com melhorias ou correções.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Autor

Daniel Sant'Anna

## Contato

Em caso de dúvidas ou sugestões, entre em contato via [danielcarlossantanna@gmail.com].

Este é um projeto em desenvolvimento, e novos recursos e melhorias estão planejados para o futuro. Agradecemos por seu interesse e apoio a este projeto!

# Principais tecnologias utilizadas no Frontend

## [TypeScript](https://www.typescriptlang.org/)

O TypeScript é uma extensão do JavaScript que introduz tipagem estática opcional, tornando o código mais seguro e legível. Com ele, você pode declarar tipos para variáveis, argumentos de função e retornos de função, permitindo a detecção de erros em tempo de desenvolvimento. Isso resulta em uma experiência de desenvolvimento mais robusta, com recursos aprimorados, como autocompletar e refatoração. Além disso, a tipagem forte facilita a documentação embutida no código, melhorando a manutenção e a compreensão do código fonte. O TypeScript é uma escolha valiosa para qualquer projeto JavaScript, oferecendo benefícios significativos em termos de qualidade, eficiência e segurança do código.

## [React](https://react.dev/)

O React é uma biblioteca JavaScript de código aberto amplamente adotada para a criação de interfaces de usuário interativas e eficientes em aplicativos web. Desenvolvido pelo Facebook, o React oferece uma abordagem inovadora para o desenvolvimento de interfaces de usuário, baseada em componentes reutilizáveis. Com o React, os desenvolvedores podem criar interfaces de usuário declarativas, onde as atualizações são tratadas de forma eficiente por meio do mecanismo de reconciliação virtual, resultando em uma experiência de usuário suave e responsiva

## [Styled-Components](https://styled-components.com/)

O Styled-components é uma biblioteca de estilo para aplicações JavaScript e React que utiliza a técnica de CSS-in-JS para estilizar componentes de forma dinâmica e encapsulada. Ela permite que os desenvolvedores definam estilos diretamente em seus componentes React, aproveitando a sintaxe do JavaScript e a capacidade de usar propriedades dinâmicas. Com o Styled-components, você pode criar estilos baseados em estados, props ou variáveis, tornando-os altamente reutilizáveis e mantendo um código CSS limpo e organizado. Além disso, a biblioteca lida automaticamente com a criação de classes CSS únicas para cada componente, evitando conflitos de estilo. Sua abordagem de estilo orientada a componentes facilita a construção de interfaces de usuário consistentes e altamente customizáveis. O Styled-components é amplamente adotado na comunidade React devido à sua simplicidade e eficácia na gestão de estilos em aplicações modernas.

## [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

O Zustand é uma pequena, mas poderosa, biblioteca de gerenciamento de estado para aplicativos React. Ele oferece uma alternativa simples ao Redux e outras soluções mais complexas, permitindo que os desenvolvedores gerenciem o estado de suas aplicações de forma eficiente e desacoplada. O Zustand utiliza o contexto do React e os hooks para fornecer um mecanismo de gerenciamento de estado intuitivo e flexível. Com o Zustand, é fácil criar e compartilhar estados entre componentes sem a necessidade de configurar uma grande quantidade de código boilerplate. Ele também oferece funcionalidades avançadas, como middlewares e persistência de estado, que podem ser facilmente integradas em seu aplicativo. O Zustand é uma escolha popular para projetos React menores e médios, devido à sua simplicidade e eficácia, tornando o gerenciamento de estado mais acessível e menos verboso.

## [React Router](https://reactrouter.com/en/main)

O React Router é uma biblioteca popular para navegação e roteamento em aplicativos React. Ele permite que os desenvolvedores criem aplicativos de página única (SPA) com várias rotas e URLs. O React Router oferece uma maneira declarativa de definir como as diferentes partes do seu aplicativo devem ser renderizadas com base nas URLs.

## [React Hook Form](https://react-hook-form.com/)

O React Hook Form é uma biblioteca leve e eficiente que simplifica a validação e gerenciamento de formulários em aplicações React. Ele se baseia em hooks nativos do React para fornecer uma solução intuitiva para a coleta e validação de dados de formulários. O React Hook Form permite que os desenvolvedores capturem facilmente os valores dos campos de formulário, definam regras de validação personalizadas e exibam feedback de erro de forma eficiente. Além disso, ele evita renderizações desnecessárias, tornando-o altamente performático. Com sua sintaxe simples e fácil integração com a biblioteca Yup para validação, o React Hook Form é uma escolha popular para agilizar o desenvolvimento de formulários em projetos React, melhorando a experiência do usuário e economizando tempo de desenvolvimento

## [Yup](https://github.com/jquense/yup)

O Yup é uma biblioteca de validação de esquema JavaScript extremamente flexível e poderosa. Ele é amplamente usado para validar dados de entrada, como formulários, antes de serem processados ou armazenados. O Yup permite que os desenvolvedores definam regras de validação complexas e personalizadas de forma declarativa, o que torna a validação de dados fácil e robusta. Com sua sintaxe simples e recursos avançados, como validações condicionais e mensagens de erro personalizadas, o Yup é uma escolha popular para garantir que os dados de entrada em aplicativos sejam precisos, confiáveis e seguros. Além disso, ele é frequentemente utilizado em conjunto com outras bibliotecas, como o React Hook Form e o Formik, para simplificar ainda mais a validação de formulários em aplicações JavaScript e React.

## [React-Query](https://tanstack.com/query/v3/)

O React-Query é uma biblioteca JavaScript de gerenciamento de estado e consulta de dados para aplicativos React. Ela foi projetada para simplificar a gestão de dados assíncronos, incluindo consultas a APIs, dados locais e estado global da aplicação. O React-Query oferece uma abordagem declarativa e poderosa para buscar e manter dados em sincronia com a interface do usuário, permitindo que você se concentre na lógica do aplicativo em vez de lidar com gerenciamento de estado complexo. Ele também inclui funcionalidades avançadas, como invalidação de cache, consultas em paralelo, paginação e atualização otimista, tornando-o uma escolha popular para aplicativos React escaláveis e que envolvem muitas interações com API. Com sua arquitetura flexível e suporte à integração com outras bibliotecas, o React-Query é uma ferramenta poderosa para simplificar o desenvolvimento de aplicativos React que dependem de dados assíncronos.

## [Jest](https://jestjs.io/)

O Jest é uma estrutura de teste de JavaScript amplamente utilizada, especialmente em projetos baseados em React e Node.js. Ele fornece uma suíte de testes completa e uma ampla variedade de recursos para automatizar testes unitários, testes de integração e testes de comportamento em seus aplicativos. O Jest é conhecido por sua configuração simplificada, facilitando a criação e execução de testes. Ele inclui recursos como testes de snapshot, mocks de funções, suporte para testes assíncronos e ferramentas para medir a cobertura de código. Além disso, o Jest é altamente configurável e extensível, o que o torna adequado para uma ampla gama de projetos e cenários de teste. Como uma das ferramentas de teste mais populares na comunidade JavaScript, o Jest desempenha um papel fundamental na garantia da qualidade do código e na manutenção de aplicativos robustos e confiáveis.

## [Testing Library](https://testing-library.com/docs/)

O Testing Library é uma coleção de bibliotecas que promovem a escrita de testes centrados no usuário, priorizando a simulação de interações do usuário real em vez de focar em detalhes de implementação internos. Com suas bibliotecas específicas para diferentes frameworks, como React Testing Library, ela oferece utilitários para selecionar elementos, disparar eventos, consultar conteúdo e realizar verificações, resultando em testes mais robustos que refletem a experiência do usuário final, tornando-os menos suscetíveis a quebras com mudanças na estrutura do código. Isso a torna uma escolha valiosa para o desenvolvimento de testes de integração e comportamentais em aplicações JavaScript e React.

## [Stripe](https://stripe.com/)

A Stripe é uma plataforma de pagamentos online amplamente utilizada que permite a empresas e desenvolvedores aceitar pagamentos pela internet. Ela oferece uma variedade de ferramentas e APIs que facilitam a integração de sistemas de pagamento em sites e aplicativos. A Stripe suporta diversos métodos de pagamento, incluindo cartões de crédito e débito, carteiras digitais, pagamentos por assinatura e muito mais. Além disso, a plataforma lida com questões de segurança e conformidade, o que ajuda as empresas a manter os dados financeiros dos clientes protegidos. Com sua documentação detalhada e suporte ativo, a Stripe é uma escolha popular para aqueles que desejam adicionar capacidades de pagamento a suas aplicações online, tornando o processo de aceitação de pagamentos mais simples e seguro.

## [Storybook UI](https://storybook.js.org/)

O Storybook é uma poderosa ferramenta de desenvolvimento para projetar e documentar componentes de interface de usuário (UI) em aplicações web. Ele oferece um ambiente isolado e interativo onde os desenvolvedores podem criar, visualizar e testar componentes individualmente, permitindo um processo de desenvolvimento mais eficiente e colaborativo. Com o Storybook, é possível criar histórias (stories) para cada componente, mostrando diferentes estados e variações de uso, o que facilita a visualização e compreensão de como os componentes funcionam em diferentes contextos. Além disso, o Storybook suporta uma variedade de frameworks e bibliotecas, tornando-o uma escolha versátil para equipes de desenvolvimento que desejam criar e compartilhar componentes reutilizáveis de forma mais eficaz, melhorar a colaboração entre desenvolvedores e designers, e criar uma documentação viva e interativa para seus projetos de UI.

# Principais tecnologias utilizadas no Backend

## [Nodemon](https://nodemon.io/)

O Nodemon é uma ferramenta popular para desenvolvimento em Node.js que ajuda os desenvolvedores a monitorar e reiniciar automaticamente suas aplicações Node.js sempre que ocorrem alterações nos arquivos do projeto. Isso elimina a necessidade de reiniciar manualmente o servidor a cada vez que você faz uma modificação no código, o que agiliza o processo de desenvolvimento. O Nodemon é especialmente útil durante o desenvolvimento de aplicativos web e servidores, onde você deseja ver instantaneamente as mudanças refletidas sem interrupções no fluxo de trabalho. Com sua configuração simples e ampla adoção na comunidade Node.js, o Nodemon é uma ferramenta valiosa para tornar o desenvolvimento em Node.js mais produtivo e eficiente.

## [Knex](https://knexjs.org/)

O Knex.js, geralmente chamado apenas de "Knex", é um popular construtor de consultas SQL para Node.js. Ele simplifica a interação com bancos de dados relacionais, permitindo que os desenvolvedores escrevam consultas SQL de forma programática usando JavaScript em vez de escrever SQL puro. O Knex oferece uma maneira fácil de criar, modificar e consultar bancos de dados, além de fornecer suporte para várias bases de dados, como PostgreSQL, MySQL, SQLite e outros. Além disso, o Knex ajuda a lidar com migrações de banco de dados e a criar esquemas de banco de dados de maneira organizada e controlada. É uma ferramenta amplamente adotada na comunidade Node.js para simplificar o desenvolvimento de aplicativos que utilizam bancos de dados relacionais, tornando o processo de consulta e gerenciamento de dados mais eficiente e legível.

## [Express](https://expressjs.com/)

O Express.js, frequentemente conhecido como "Express," é um framework web simples e eficiente projetado para Node.js. Sua abordagem minimalista e flexível o torna uma escolha popular para o desenvolvimento de aplicativos web e APIs, permitindo que os desenvolvedores criem rapidamente servidores web, defina rotas, manipule solicitações HTTP e adicione middlewares para aprimorar a funcionalidade. Com uma comunidade ativa e uma ampla gama de recursos disponíveis, o Express é uma ferramenta versátil que simplifica o desenvolvimento de servidores web robustos e escaláveis, tornando-o uma opção confiável para projetos em Node.js.

# Documentação do CRUD de Produtos

Esta parte da documentação descreve as operações CRUD (Create, Read, Update, Delete) para a entidade "Produto" em um sistema de gerenciamento de produtos. Cada produto é definido pelas seguintes propriedades:

- **ID**: Identificador único do produto (chave primária).
- **Imagem**: URL da imagem do produto.
- **Título**: Nome do produto.
- **Descrição**: Descrição detalhada do produto.
- **Categoria**: Categoria à qual o produto pertence.
- **Preço**: Preço do produto.

## Endpoints da API

A seguir, são listados os endpoints da API para executar as operações CRUD em produtos:

### 1. **Listar Produtos**

- **Método**: GET
- **Endpoint**: `/products`
- **Descrição**: Retorna uma lista de todos os produtos disponíveis.

### 2. **Buscar Produto por ID**

- **Método**: GET
- **Endpoint**: `/products/:id`
- **Descrição**: Retorna os detalhes de um produto específico com base em seu ID.

### 3. **Criar Produto**

- **Método**: POST
- **Endpoint**: `/products`
- **Descrição**: Cria um novo produto com base nos dados fornecidos no corpo da solicitação. Os campos necessários são `image`, `title`, `description`, `category`, e `price`.

### 4. **Atualizar Produto**

- **Método**: PUT
- **Endpoint**: `/products/:id`
- **Descrição**: Atualiza os dados de um produto existente com base no ID fornecido. Os campos que podem ser atualizados são `image`, `title`, `description`, `category`, e `price`.

### 5. **Excluir Produto**

- **Método**: DELETE
- **Endpoint**: `/products/:id`
- **Descrição**: Exclui um produto com base no ID fornecido.

## Exemplos de Dados do Produto

Aqui está um exemplo de como os dados do produto podem ser representados no corpo das solicitações para criar e atualizar produtos:

```json
{
  "image": "https://exemplo.com/imagem-do-produto.jpg",
  "title": "Produto de Exemplo",
  "description": "Descrição detalhada do produto de exemplo.",
  "category": "Categoria de Exemplo",
  "price": 19.99
}
```

## Respostas da API

A API deve fornecer respostas adequadas com base nas operações realizadas. Os principais códigos de resposta HTTP incluem:

- **200 OK**: Usado para operações bem-sucedidas, como listar produtos ou buscar um produto por ID.
- **201 Created**: Retornado após a criação bem-sucedida de um novo produto.
- **204 No Content**: Retornado após a exclusão bem-sucedida de um produto.
- **400 Bad Request**: Retornado em caso de dados inválidos ou ausentes no corpo da solicitação.
- **404 Not Found**: Retornado quando um produto com o ID especificado não é encontrado.
- **500 Internal Server Error**: Retornado em caso de erros internos do servidor.

## Exemplo de Uso da API

Aqui está um exemplo de como usar a API para criar, listar, atualizar e excluir produtos:

1. **Listar Produtos**:

   - Método: GET
   - Endpoint: `/products`
2. **Buscar Produto por ID**:

   - Método: GET
   - Endpoint: `/products/1` (substitua "1" pelo ID do produto desejado)
3. **Criar Produto**:

   - Método: POST
   - Endpoint: `/products`
   - Corpo da Solicitação: Dados do produto em formato JSON.
4. **Atualizar Produto**:

   - Método: PUT
   - Endpoint: `/products/1` (substitua "1" pelo ID do produto a ser atualizado)
   - Corpo da Solicitação: Dados do produto atualizados em formato JSON.
5. **Excluir Produto**:

   - Método: DELETE
   - Endpoint: `/products/1` (substitua "1" pelo ID do produto a ser excluído)

## Rodando os testes

1. Acesse a pasta `client` que se encontra na raíz do projeto:

```bash
  cd client
```

2. Rode o comando para que o jest execute os testes:

```bash
  npm run test
```

# Documentação dos hooks

Nesta seção da documentação, abordaremos os hooks utilizados em nossa aplicação. Os hooks desempenham um papel fundamental no desenvolvimento, permitindo-nos compartilhar lógica de estado e comportamento entre componentes de maneira eficaz. Vamos explorar os diferentes hooks que fazem parte da nossa arquitetura e como eles são utilizados para melhorar a experiência do usuário e simplificar o desenvolvimento.

## useProducts()

O `useProducts` é um hook personalizado que fornece funcionalidades para interagir com produtos em nossa aplicação. Ele encapsula lógica relacionada à obtenção, salvamento e remoção de produtos e é projetado para simplificar a gestão dos dados.

### Uso

Para utilizar o `useProducts`, você deve importá-lo no seu componente:

```javascript
import useProducts from "./useProducts";

// ...

const { products, isLoading, isError, saveMutation, removeMutation } = useProducts(id);
```

- `products`: Uma matriz de produtos obtidos da API. Pode ser vazia se nenhum produto for encontrado.
- `isLoading`: Um booleano que indica se a consulta está em andamento.
- `isError`: Um booleano que indica se ocorreu um erro durante a consulta.
- `saveMutation`: Uma função que permite salvar ou atualizar um produto. Ela aceita um objeto de produto como argumento.
- `removeMutation`: Uma função que permite remover um produto com base no seu ID.

### Mutations

#### `saveMutation`

A função `saveMutation` é usada para salvar ou atualizar um produto. Ela aceita um objeto de produto como argumento e lida com a comunicação com a API. Esta função também gerencia o cache local de produtos.

##### Exemplo de Uso:

```javascript
const productToSave = { /* ... */ };

saveMutation.mutate(productToSave);
```

#### `removeMutation`

A função `removeMutation` é usada para remover um produto com base no seu ID. Ela lida com a comunicação com a API e atualiza o cache local de produtos.

##### Exemplo de Uso:

```javascript
const productIdToRemove = 1; // ID do produto a ser removido

removeMutation.mutate(productIdToRemove);
```

### Queries

O `useProducts` também utiliza uma query para obter os produtos da API. Você não precisa interagir diretamente com essa query, pois o hook encapsula seu funcionamento interno.

### Exemplos

Aqui está um exemplo de como utilizar o `useProducts` em um componente React:

```javascript
import React from "react";
import useProducts from "./useProducts";

function ProductList() {
  const { products, isLoading, isError, saveMutation, removeMutation } = useProducts();

  if (isLoading) {
    return <p>Carregando produtos...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao carregar os produtos.</p>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} ({product.price})
            <button onClick={() => saveMutation.mutate(product)}>Editar</button>
            <button onClick={() => removeMutation.mutate(product.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

Isso conclui a documentação para o `useProducts`. Certifique-se de utilizar os métodos `saveMutation` e `removeMutation` com cuidado e entender seu funcionamento interno para uma integração adequada em sua aplicação.

## useCart()

O `useCart` é um hook personalizado que fornece funcionalidades para gerenciar o carrinho de compras em nossa aplicação. Ele encapsula lógica relacionada à adição, atualização, remoção e limpeza de produtos no carrinho, tornando-o uma ferramenta essencial para o controle de produtos no contexto de compras.

### Uso

Para utilizar o `useCart`, você deve importá-lo no seu componente:

```javascript
import useCart from "./useCart";

// ...

const { products, addProduct, updateQuantity, removeProduct, clearProducts } = useCart();
```

- `products`: Uma matriz de produtos que representa os itens no carrinho.
- `addProduct`: Uma função que permite adicionar um produto ao carrinho. Ela aceita um objeto de produto como argumento.
- `updateQuantity`: Uma função que permite atualizar a quantidade de um produto no carrinho. Ela aceita um objeto de produto e a nova quantidade como argumentos.
- `removeProduct`: Uma função que permite remover um produto do carrinho. Ela aceita um objeto de produto como argumento.
- `clearProducts`: Uma função que permite limpar completamente o carrinho, removendo todos os produtos.

### Exemplos de Uso

Aqui está um exemplo de como utilizar o `useCart` em um componente React:

```javascript
import React from "react";
import useCart from "./useCart";

function ShoppingCart() {
  const { products, addProduct, updateQuantity, removeProduct, clearProducts } = useCart();

  const handleAddToCart = (product) => {
    addProduct(product);
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    updateQuantity(product, newQuantity);
  };

  const handleRemoveFromCart = (product) => {
    removeProduct(product);
  };

  const handleClearCart = () => {
    clearProducts();
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantidade: {product.quantity}
            <button onClick={() => handleUpdateQuantity(product, product.quantity + 1)}>Aumentar Quantidade</button>
            <button onClick={() => handleUpdateQuantity(product, product.quantity - 1)}>Diminuir Quantidade</button>
            <button onClick={() => handleRemoveFromCart(product)}>Remover do Carrinho</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Limpar Carrinho</button>
    </div>
  );
}

export default ShoppingCart;
```

Este é um exemplo simples de como você pode usar o `useCart` para criar um carrinho de compras em sua aplicação.

## usePayment()

O `usePayment` é um hook personalizado que oferece funcionalidades relacionadas a pagamentos em nossa aplicação. Ele é responsável por gerar o `clientSecret` necessário para processar pagamentos através da Stripe. Este hook encapsula lógica de criação de pagamentos, cálculo do valor total e interações com a API da Stripe.

### Uso

Para utilizar o `usePayment`, você deve importá-lo no seu componente:

```javascript
import usePayment from "./usePayment";

// ...

const { clientSecret } = usePayment();
```

- `clientSecret`: Uma string que representa o segredo do cliente (client secret) necessário para processar pagamentos.

## Método `getClientSecret`

O `getClientSecret` é um método assíncrono que gera o `clientSecret` com base nos produtos no carrinho e nas configurações da Stripe. Ele é chamado automaticamente quando o hook é utilizado e quando os produtos no carrinho são atualizados.

### Exemplo de Uso:

```javascript
const { getClientSecret } = usePayment();
```

Lembre-se de que a Stripe requer a configuração de uma chave secreta válida no arquivo de ambiente (`REACT_APP_STRIPE_SECRET_KEY`) para que o `getClientSecret` funcione corretamente.

Este é um exemplo simples de como você pode usar o `usePayment` para obter o `clientSecret` necessário para processar pagamentos com a Stripe em sua aplicação.

Certifique-se de personalizar a documentação para atender às necessidades específicas do seu projeto e fornecer informações adicionais, como descrições detalhadas de como integrar o `clientSecret` em seu fluxo de pagamento.

# Estrutura de Pastas do Projeto

```markdown
my-react-app/
├── src/
│   ├── assets/
│   │   ├── lotties/
│   ├── components/
│   ├── pages/
│   ├── helpers/
│   ├── hooks/
│   ├── schemas/
│   ├── services/
│   └── types/
├── public/
   └── images/
├── node_modules/
├── package.json
├── README.md
└── ...
```

## assets

A pasta `assets` é geralmente usada para armazenar recursos estáticos, como fontes, arquivos CSS ou outros arquivos que não são código JavaScript ou React. Esses recursos podem ser importados e utilizados em componentes e páginas conforme necessário.

## components

A pasta `components` é onde você deve colocar seus componentes React reutilizáveis. Cada componente deve estar em seu próprio arquivo para facilitar a importação e a manutenção. Esta pasta é essencial para organizar e reutilizar partes da interface do usuário em todo o projeto.

## pages

A pasta `pages` é usada para definir as páginas principais do seu aplicativo, cada uma geralmente correspondendo a uma rota específica. Cada página pode conter vários componentes e lógica relacionada àquela página específica.

## helpers

A pasta `helpers` é usada para armazenar funções de utilidade ou módulos auxiliares que não são componentes React, mas que desempenham um papel importante na lógica do aplicativo.

## hooks

A pasta `hooks` é onde você pode criar hooks personalizados que encapsulam lógica compartilhada entre componentes. Esses hooks podem ser reutilizados em todo o aplicativo para melhorar a modularidade e a manutenção.

## schemas

A pasta `schemas` é geralmente usada para definir esquemas de dados ou modelos que são usados em várias partes do aplicativo, como validação de dados ou mapeamento de API para objetos JavaScript.

## services

A pasta `services` é onde você pode definir serviços de API ou outros serviços de backend usados pelo aplicativo. Isso ajuda a manter a lógica de comunicação com o servidor centralizada e organizada.

## types

A pasta `types` é usada para definir tipos de dados personalizados, como tipos TypeScript, que são usados em todo o projeto para melhorar a segurança e a integridade do código.

Lembre-se de que esta é uma estrutura sugerida e pode ser adaptada às necessidades específicas do seu projeto. Organizar seu projeto em pastas facilita a colaboração e a manutenção a longo prazo.

# Documentação dos componentes

Neste projeto, os componentes foram construídos com a biblioteca Styled Components, seguindo o padrão de design conhecido como Atomic Design. Este padrão organiza os componentes em cinco níveis de complexidade, cada um representando um grau diferente de abstração.

## Atomic Design

O Atomic Design é uma metodologia de design que divide a interface de usuário em cinco níveis distintos:

1. **Átomos (Atoms)**: São os blocos de construção mais básicos, como botões, campos de texto e ícones.
2. **Moléculas (Molecules)**: São combinações de átomos que formam componentes mais complexos, como um campo de formulário com um rótulo e uma entrada de texto.
3. **Organismos (Organisms)**: São combinações de moléculas e átomos que formam partes de uma interface, como um cabeçalho de página com um menu de navegação.
4. **Templates (Templates)**: São layouts ou estruturas de página que combinam múltiplos organismos em uma visualização completa.
5. **Páginas (Pages)**: São as páginas finais que são construídas com a composição de templates e outros componentes.

## Styled Components e Temas

Os Styled Components não apenas facilitam a estilização de componentes, mas também permitem a criação de temas para o seu aplicativo. Os temas são uma maneira eficaz de gerenciar a aparência e o estilo do aplicativo de forma centralizada, o que pode ser útil para personalização, theming e garantia de consistência visual.

Neste projeto, utilizamos a funcionalidade de temas do Styled Components para definir e aplicar estilos globais. Isso significa que a paleta de cores, fontes, espaçamentos e outros estilos podem ser gerenciados de maneira coesa e flexível por meio do tema. Por exemplo:

```javascript
// Definição de um tema global com Styled Components
const theme = {
 colors: {
    main: "#00a786",
    dark: "#008465",
    text: "#324a6d",
    secondary: "#584696",
    disabled: "#324a6d",
    white: "#fff",
    error: "#d00",
  }
};

// Uso do tema em um componente
const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  // ...outros estilos
`;
```

Isso torna a personalização do aplicativo mais fácil, permitindo que você altere as cores ou a tipografia em um único lugar, refletindo essas mudanças em todos os componentes.

## Testes no Storybook

Todos os componentes deste projeto podem ser testados no Storybook. O Storybook é uma ferramenta de desenvolvimento que permite criar e visualizar componentes de forma isolada e interativa. Isso significa que você pode testar cada componente individualmente em um ambiente controlado, facilitando a identificação de erros e a verificação visual.

O Storybook é uma adição valiosa ao desenvolvimento, especialmente quando se trata de garantir a funcionalidade e o design de componentes. Certifique-se de explorar o Storybook para testar e verificar todos os componentes à medida que desenvolve e mantém este projeto.

## Vantagens

A combinação do Atomic Design, dos Styled Components e dos temas oferece várias vantagens:

- **Reutilização**: Componentes são altamente reutilizáveis em toda a aplicação.
- **Consistência**: Estilos são aplicados de maneira consistente em toda a interface.
- **Escalabilidade**: A estrutura é escalável à medida que novos componentes são adicionados.
- **Manutenção**: Facilita a manutenção e a atualização de componentes e estilos.
- **Legibilidade**: O código é mais legível e organizado.

Esperamos que esta documentação ajude você a compreender como os componentes foram desenvolvidos seguindo o padrão Atomic Design, utilizando Styled Components e temas, e como podem ser testados no Storybook neste projeto.

## Referência

- [Stripe Documentation](https://stripe.com/docs/payments/elements)
- [React-Query Documentation](https://tanstack.com/query/v4/docs/react/overview)
- [Knex Documentation](https://knexjs.org/)
