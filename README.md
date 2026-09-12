![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white) ![GitHub API](https://img.shields.io/badge/GitHub%20API-181717.svg?style=for-the-badge&logo=github&logoColor=white)

# GitFind

Aplicação web desenvolvida com React para consultar usuários do GitHub e listar seus repositórios públicos.

Ao informar um nome de usuário, a aplicação consulta a API do GitHub e exibe o avatar, nome, login, biografia e repositórios públicos encontrados. A busca pode ser realizada pelo botão `BUSCAR` ou pressionando `ENTER` no campo de usuário.

## Tecnologias

- React
- JavaScript
- CSS
- Create React App
- GitHub REST API
- React Testing Library

## Estrutura do projeto

```text
src/
├── index.js
├── styles.css
├── assets/
│   └── github-img.png
├── components/
│   ├── Header/
│   │   ├── index.js
│   │   └── styles.css
│   ├── ItemList/
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── RepositoryList/
│   │   └── index.js
│   ├── SearchForm/
│   │   └── index.js
│   └── UserProfile/
│       └── index.js
├── hooks/
│   └── useGitHubUser.js
├── pages/
│   └── Home/
│       ├── index.js
│       ├── index.test.js
│       └── styles.css
└── services/
    └── github.js
```

### Responsabilidades principais

- `pages/Home/index.js`: compõe a página e conecta os componentes ao hook de busca.
- `components/SearchForm`: controla o campo de usuário e dispara a busca pelo botão ou pela tecla `ENTER`.
- `components/UserProfile`: exibe os dados do usuário encontrado.
- `components/RepositoryList`: exibe a lista de repositórios públicos.
- `components/ItemList`: exibe individualmente o nome e a descrição de um repositório.
- `components/Header`: renderiza o cabeçalho da aplicação.
- `hooks/useGitHubUser.js`: controla loading, erros, usuário atual e repositórios.
- `services/github.js`: centraliza as requisições e o tratamento básico da API do GitHub.
- `pages/Home/index.test.js`: testa o fluxo de busca usando a tecla `ENTER`.
- `styles.css` e arquivos `styles.css` dos componentes: definem os estilos globais e específicos da interface.

## Como executar

Instale as dependências do projeto:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Depois, acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Outros comandos

Gerar uma versão otimizada para produção:

```bash
npm run build
```

Executar os testes:

```bash
npm test
```

## Observações

- A aplicação utiliza os endpoints públicos da API do GitHub.
- Buscas para usuários inexistentes ou problemas de comunicação exibem uma mensagem de erro.
- Usuários sem repositórios públicos recebem uma mensagem informativa.
