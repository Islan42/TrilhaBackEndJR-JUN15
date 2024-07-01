![Código Certo Coders](https://utfs.io/f/3b2340e8-5523-4aca-a549-0688fd07450e-j4edu.jfif)

# Introdução

Olá. Esta é a minha versão do desafio da Trilha Inicial BackEnd Jr proposto pela "Código Certo Coders".

Neste desafio, desenvolvi uma API REST para gerenciar tarefas (CRUD) utilizando ExpressJS e SQLite. Além disso utilizei JWT para autenticação e proteção de rotas, e Swagger para documentação da API. Aprendi MUITO no decorrer desse projeto: Finalmente entendi DE VERDADE o significado de API REST; Aprendi sobre autenticação JWT; Apanhei pra configurar o SQLite de uma maneira que fizesse sentido para mim; E aprendi muito sobre Swagger e OpenAPI, e como são poderosas ferramentas para documentar e testar a API.

Por fim, além de todo pessoal da Código Certo pelo incentivo e pelas dicas quando precisei, gostaria de agradecer ao canal [Academind](https://www.youtube.com/@academind) e sua playlist [Building a RESTful API with NodeJS](https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q) por terem sido a base para o código desse projeto. Aprendi insanamente no decorrer do 'curso' e pude ir além.

## Instalação

Antes de tudo é necessário ter o [git](https://git-scm.com/downloads) e o [node >=10](https://nodejs.org/en/download/package-manager/current) instalados. E então:

1. Clone este repositório

    Abra o seu terminal no seu diretório preferido e em seguida:
   ```
   git clone https://github.com/Islan42/TrilhaBackEndJR-JUN15.git
   ```
2. Instale as dependências

   ```
   cd TrilhaBackEndJR-JUN15
   ```
   ```
   npm install
   ```
   
3. Renicie o Banco de Dados

   Opcional*
   ```
   npm run reset-db
   ```
4. Inicie o servidor
   ```
   npm run start
   ```

## Documentação da API

Após iniciar o servidor (acima) a documentação pode ser acessada em http://localhost:3000/api-docs

Ou na versão hospedada do projeto https://successful-zippy-chestnut.glitch.me/api-docs

## Hospedagem

A API foi hospedada no Glitch e pode ser acessada pelo link: https://successful-zippy-chestnut.glitch.me

# 📚 Trilha Inicial BackEnd Jr
Este projeto tem como objetivo desenvolver uma API RESTful para gerenciamento de tarefas, proporcionando funcionalidades de CRUD (Create, Read, Update, Delete) de tarefas, autenticação de usuários e armazenamento dos dados em um banco de dados.

## Objetivos:
- Criar uma API que permita CRUD (Create, Read, Update, Delete) de tarefas.
- Implementar autenticação de usuários.
- Utilizar um banco de dados SQLite para armazenar as tarefas.
- Documentar todo o processo e apresentar as conclusões.

## Requisitos Funcionais:
- Criar Tarefa: Endpoint para criar uma nova tarefa.
- Listar Tarefas: Endpoint para listar todas as tarefas.
- Atualizar Tarefa: Endpoint para atualizar uma tarefa existente.
- Deletar Tarefa: Endpoint para deletar uma tarefa existente.

## Autenticação de Usuários:
- Registro de Usuário: Endpoint para registrar um novo usuário.
- Login de Usuário: Endpoint para autenticar um usuário e gerar um token JWT.
- Proteção de Rotas: Garantir que apenas usuários autenticados possam acessar os endpoints de tarefas.

## Banco de Dados:
- Utilizar SQLite como banco de dados para armazenar informações de usuários e tarefas.

   #### Estrutura do Projeto:
   ```plaintext
   project-root/
   │
   ├── src/
   │   ├── controllers/
   │   ├── models/
   │   ├── routes/
   │   ├── middlewares/
   │   ├── database/
   │   └── app.js
   │
   ├── .env
   ├── .gitignore
   ├── README.md
   └── package.json
   ```
## Entregáveis:
   1. **Código Fonte:**
      - Código fonte do projeto, organizado conforme a estrutura acima.
   2. **Repositório GitHub:**
      - Repositório público contendo o código fonte e documentação.
   3. **Documentação:**
      - README.md com instruções sobre como configurar e executar o projeto, além de detalhes dos endpoints da API.

### Detalhes Técnicos: 🔧
- **Boas Práticas:** Utilizar boas práticas de código limpo, legível e bem documentado.
- **Git:** Utilizar Git para controle de versão e submeter o projeto através de um repositório público no GitHub.

### Dicas para Abordar o Projeto 🌟
- **Crie um Fork desse Repositório.**
- **Criar do Zero:** É fundamental que o projeto seja desenvolvido completamente do zero, demonstrando suas habilidades e criatividade desde o início.
- **Utilize bibliotecas** como Express para criação da API e jsonwebtoken para autenticação.
- **Documente cada etapa do processo para facilitar a compreensão.**

### Critérios de Avaliação: 📝
- **Funcionalidade:** A aplicação atende aos requisitos funcionais e funciona corretamente?
- **Qualidade do Código:** O código é limpo, bem estruturado e adequadamente documentado?
- **Segurança:** A autenticação foi implementada corretamente e as rotas estão protegidas?
- **Uso do Git:** O controle de versão é usado de forma eficaz com mensagens de commit significativas?
- **Documentação:** A documentação é clara e detalha o processo de desenvolvimento e uso da API?

### Não Queremos 🚫
- Descobrir que o candidato não foi quem realizou o teste.
- Ver commits grandes sem muita explicação nas mensagens no repositório.
- Entregas padrão ou cópias de outros projetos. Buscamos originalidade e autenticidade em cada contribuição.

### Prazo ⏳
Os candidatos devem completar a trilha em no máximo em 2 semanas, começando a contar a partir de 15/06.

A conclusão da trilha inicial é um requisito obrigatório para avançar para a trilha 
final. Caso a trilha inicial não seja concluída dentro do prazo estabelecido, o 
candidato estará impossibilitado de prosseguir para trilha final.

**Data máxima para entrega: 29/06**

### Instruções de Entrega: 📬
Após finalizar o projeto, publique-o em uma URL pública (por exemplo, Vercel, Netlify, GitHub Pages, etc.) e hospede o seu servidor na nuvem. Use serviços que ofereçam uso gratiuto por um período, como a AWS e preencha o [Formulário](https://forms.gle/gZViPMTSDV5nidSu6):  

---

### Desafio da Inovação 🚀
Achou esse projeto inicial simples? Eleve ainda mais! Estamos em busca de mentes inovadoras que não apenas criem, mas que também desafiem os padrões. Como você pode transformar essa estrutura inicial em algo verdadeiramente extraordinário? Demonstre o poder da sua criatividade e o impacto das suas ideias inovadoras!

---

🔗 **Mantenha-se Conectado:**
- [Discord](https://discord.gg/wzA9FGZHNv)
- [Website](http://www.codigocertocoders.com.br/)
- [LinkedIn](https://www.linkedin.com/company/codigocerto/)
  
🌐 **Contato:**
- Email: codigocertocoders@gmail.com

---

### Precisa de Ajuda?
Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário.

**Construindo o amanhã, hoje.**
