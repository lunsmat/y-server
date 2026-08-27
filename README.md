# 🚀 y-server | X 2.0 no IFPA

Bem-vindos, alunos do Ensino Médio Integrado! 👋

Este é o repositório do **y-server**, a API (backend) do nosso projeto da disciplina de **Programação para Dispositivos Móveis**. Ele foi construído para ser moderno, rápido e fácil de entender, servindo como a base de dados e regras de negócio para o nosso aplicativo.

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

Nossa stack (conjunto de tecnologias) foi escolhida para trazer o que há de mais moderno no mercado de desenvolvimento web/mobile. Como estamos construindo uma base sólida, usamos as seguintes ferramentas:

- **[Node.js](https://nodejs.org/) & [TypeScript](https://www.typescriptlang.org/):** A base do nosso projeto. Usamos TypeScript em vez de JavaScript puro para garantir que nosso código tenha tipagem (o que ajuda muito a evitar erros bobos e autocompleta o código no VS Code).
- **[Express (v5)](https://expressjs.com/):** O framework que usamos para criar nossas rotas da API. Ele é quem recebe as requisições do nosso aplicativo mobile e decide o que fazer com elas.
- **[Prisma ORM](https://www.prisma.io/):** A ferramenta mágica que facilita nossa comunicação com o banco de dados. Em vez de escrever códigos SQL complexos na mão, o Prisma faz esse trabalho duro para nós de forma intuitiva.
- **[SQLite](https://sqlite.org/) (via `better-sqlite3`):** Nosso banco de dados. Ele salva os dados em um arquivo local (`dev.db`), o que é perfeito, leve e super prático para o nosso ambiente de sala de aula e aprendizado.
- **[Biome](https://biomejs.dev/):** Uma ferramenta super rápida que analisa nosso código em busca de problemas estruturais (Lint) e já formata tudo no padrão correto (Format). Mantém o código da turma inteira padronizado!
- **[Vitest](https://vitest.dev/) & [Supertest](https://github.com/ladjs/supertest):** Bibliotecas para criarmos testes automatizados. Com elas, testamos se a API funciona perfeitamente antes de conectá-la ao app.

---

## ⚙️ Passo a Passo: Como Rodar o Projeto

Prestem muita atenção nesta etapa! Para que o servidor funcione no computador do laboratório ou na sua casa, siga **exatamente** os passos abaixo na ordem em que aparecem.

### 1. Clonar o repositório

Primeiro, abra o terminal, baixe o código para a sua máquina e entre na pasta do projeto:

```bash
git clone https://github.com/lunsmat/y-server.git
cd y-server
```

### 2. Instalar as dependências do projeto

O Node.js precisa baixar todas as ferramentas e bibliotecas que listamos acima. Para isso, rode o comando:

```bash
npm install
```

_(Isso vai ler o arquivo `package.json` e criar a pasta `node_modules` com todos os pacotes. Pode demorar alguns segundos)._

### 3. Configurar as Variáveis de Ambiente

O projeto precisa de algumas configurações específicas da sua máquina para rodar (como senhas, portas, etc.).

1. Encontre o arquivo chamado `.env.example` na pasta do projeto.
2. Crie um novo arquivo chamado exatamente **`.env`** (com o ponto na frente).
3. Copie todo o conteúdo do `.env.example` e cole dentro do seu novo `.env`.

### 4. Configurar o Banco de Dados (SQLite)

Agora precisamos criar o nosso arquivo de banco de dados e as tabelas que vão guardar as informações do nosso X 2.0. Rode o comando das migrations do Prisma:

```bash
npx prisma migrate dev
```

_(Isso vai criar automaticamente o arquivo `dev.db` com o banco local e aplicar toda a estrutura de tabelas)._

Em seguida, atualize o cliente do Prisma no código rodando:

```bash
npx prisma generate
```

_(Isso ensina o TypeScript a reconhecer as tabelas que acabamos de criar no banco)._

### 5. Iniciar o Servidor! 🚀

Com tudo instalado e o banco pronto, agora é só ligar o servidor para o app mobile poder conversar com ele:

```bash
npm run dev
```

Se tudo deu certo, o terminal mostrará que o servidor está rodando. O comando `dev` usa a biblioteca `tsx` para rodar nosso código TypeScript diretamente e fica em modo "watch" (assistindo). Isso significa que **se você alterar e salvar qualquer arquivo no VS Code, o servidor reinicia sozinho!**

---

## 📜 Outros Comandos Úteis (Scripts)

Esses comandos estão configurados no nosso `package.json`. Você pode rodar qualquer um deles no terminal (sempre usando `npm run <nome-do-script>`):

- **`npm run format`**: Arruma a formatação de todo o seu código usando o Biome. Deixa o código bonito!
- **`npm run lint`**: Procura por erros de escrita ou más práticas no código.
- **`npm run test`**: Roda os testes automatizados para ver se não quebramos nada.
- **`npm run typecheck`**: Verifica se os tipos do TypeScript estão todos corretos sem precisar rodar o servidor.
- **`npm run build`**: Compila o código TypeScript para JavaScript (preparando o projeto para quando formos colocar na internet/produção).
- **`npm run start`**: Roda a versão compilada em JavaScript (usado em produção).

---

## 👨‍🏫 Professor / Autor

**Luan Farias** <luan.farias@ifpa.edu.br>
_(Dúvidas? Podem me chamar durante a aula de Programação para Dispositivos Móveis!)_
