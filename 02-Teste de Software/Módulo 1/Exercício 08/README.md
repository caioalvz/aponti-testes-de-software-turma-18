# Atividade Avaliativa – Testes de Sistema e Testes de Aceitação

## Objetivo

Praticar a criação, diferenciação e análise de casos de teste de sistema e de aceitação, utilizando uma estrutura padronizada e justificando tecnicamente cada escolha.

---

# Cenário do Sistema

Para este exercício, será utilizado um **Sistema de Login**, onde o usuário pode:

- Acessar sua conta informando e-mail e senha;
- Recuperar a senha por meio da opção **"Esqueci minha senha"**;
- Ser redirecionado para a página inicial (Dashboard) após autenticação.

---

# Etapa 2 – Testes de Sistema

## Objetivo

Validar o funcionamento técnico do sistema, verificando a integração entre telas e funcionalidades.

### TS-01 – Login com credenciais válidas (Fluxo Principal)

| Campo | Descrição |
|--------|-----------|
| **ID** | TS-01 |
| **Título** | Realizar login com credenciais válidas |
| **Pré-condições** | Usuário cadastrado no sistema. |
| **Passos** | 1. Acessar a tela de Login.<br>2. Informar e-mail válido.<br>3. Informar senha válida.<br>4. Clicar em **Entrar**. |
| **Resultado Esperado** | O sistema autentica o usuário e redireciona para a tela inicial (Dashboard). |

---

### TS-02 – Navegação para recuperação de senha (Fluxo Principal)

| Campo | Descrição |
|--------|-----------|
| **ID** | TS-02 |
| **Título** | Acessar tela de recuperação de senha |
| **Pré-condições** | Usuário está na tela de Login. |
| **Passos** | 1. Acessar a tela de Login.<br>2. Clicar em **Esqueci minha senha**. |
| **Resultado Esperado** | O sistema abre corretamente a tela de recuperação de senha. |

---

### TS-03 – Login com senha incorreta (Fluxo Alternativo)

| Campo | Descrição |
|--------|-----------|
| **ID** | TS-03 |
| **Título** | Tentar login com senha inválida |
| **Pré-condições** | Usuário cadastrado. |
| **Passos** | 1. Informar e-mail válido.<br>2. Informar senha incorreta.<br>3. Clicar em **Entrar**. |
| **Resultado Esperado** | O sistema permanece na tela de Login e exibe mensagem de erro informando credenciais inválidas. |

---

### TS-04 – Campos obrigatórios em branco (Fluxo Alternativo)

| Campo | Descrição |
|--------|-----------|
| **ID** | TS-04 |
| **Título** | Tentar realizar login sem preencher os campos |
| **Pré-condições** | Usuário está na tela de Login. |
| **Passos** | 1. Deixar os campos de e-mail e senha em branco.<br>2. Clicar em **Entrar**. |
| **Resultado Esperado** | O sistema impede o envio do formulário e apresenta mensagens indicando que os campos são obrigatórios. |

---

# Etapa 3 – Testes de Aceitação

## Objetivo

Validar se o sistema atende às necessidades do usuário e aos requisitos do negócio.

### TA-01 – Usuário acessa sua conta (Fluxo Principal)

| Campo | Descrição |
|--------|-----------|
| **ID** | TA-01 |
| **Título** | Acessar a conta com sucesso |
| **Pré-condições** | Usuário possui cadastro ativo. |
| **Passos** | 1. Informar e-mail e senha válidos.<br>2. Clicar em **Entrar**. |
| **Resultado Esperado** | O usuário consegue acessar sua conta e utilizar as funcionalidades disponíveis, atendendo ao objetivo principal do sistema. |

---

### TA-02 – Usuário recupera o acesso à conta (Fluxo Principal)

| Campo | Descrição |
|--------|-----------|
| **ID** | TA-02 |
| **Título** | Solicitar recuperação de senha |
| **Pré-condições** | Usuário possui e-mail cadastrado. |
| **Passos** | 1. Acessar a tela de Login.<br>2. Clicar em **Esqueci minha senha**.<br>3. Informar o e-mail cadastrado.<br>4. Confirmar a solicitação. |
| **Resultado Esperado** | O usuário recebe instruções para redefinir sua senha e consegue recuperar o acesso à conta. |

---

### TA-03 – Impedir acesso com credenciais inválidas (Fluxo Alternativo)

| Campo | Descrição |
|--------|-----------|
| **ID** | TA-03 |
| **Título** | Tentar acessar a conta com senha incorreta |
| **Pré-condições** | Usuário possui cadastro ativo. |
| **Passos** | 1. Informar e-mail válido.<br>2. Informar senha incorreta.<br>3. Clicar em **Entrar**. |
| **Resultado Esperado** | O usuário não acessa a conta e recebe uma mensagem clara informando que as credenciais são inválidas. |

---

### TA-04 – Recuperação com e-mail não cadastrado (Fluxo Alternativo)

| Campo | Descrição |
|--------|-----------|
| **ID** | TA-04 |
| **Título** | Solicitar recuperação utilizando e-mail inexistente |
| **Pré-condições** | Usuário está na tela de recuperação de senha. |
| **Passos** | 1. Informar um e-mail não cadastrado.<br>2. Confirmar a solicitação. |
| **Resultado Esperado** | O sistema informa que o e-mail não foi encontrado, permitindo que o usuário corrija os dados informados. |

---

# Etapa 4 – Justificativa e Classificação

## TS-01

**Por que este é um teste de sistema?**

- **Objetivo do teste:** verificar se o processo de autenticação funciona corretamente.
- **Ponto de vista adotado:** técnico, validando o funcionamento da aplicação.
- **Tipo de validação realizada:** integração entre a tela de Login e o Dashboard.

---

## TS-02

**Por que este é um teste de sistema?**

- **Objetivo do teste:** validar a navegação entre as telas.
- **Ponto de vista adotado:** funcionamento interno da aplicação.
- **Tipo de validação realizada:** integração entre Login e Recuperação de Senha.

---

## TS-03

**Por que este é um teste de sistema?**

- **Objetivo do teste:** verificar o comportamento da aplicação diante de credenciais inválidas.
- **Ponto de vista adotado:** técnico.
- **Tipo de validação realizada:** exibição da mensagem de erro e permanência na tela de Login.

---

## TS-04

**Por que este é um teste de sistema?**

- **Objetivo do teste:** validar a obrigatoriedade dos campos do formulário.
- **Ponto de vista adotado:** funcionamento da interface.
- **Tipo de validação realizada:** bloqueio do envio e validação dos campos obrigatórios.

---

## TA-01

**Por que este é um teste de aceitação?**

- **Objetivo do teste:** confirmar que o usuário consegue acessar sua conta.
- **Ponto de vista adotado:** usuário final.
- **Tipo de validação realizada:** entrega do valor esperado pelo negócio.

---

## TA-02

**Por que este é um teste de aceitação?**

- **Objetivo do teste:** garantir que o usuário consiga recuperar seu acesso.
- **Ponto de vista adotado:** usuário final.
- **Tipo de validação realizada:** atendimento ao requisito funcional de recuperação de senha.

---

## TA-03

**Por que este é um teste de aceitação?**

- **Objetivo do teste:** assegurar que apenas usuários autorizados tenham acesso ao sistema.
- **Ponto de vista adotado:** usuário e negócio.
- **Tipo de validação realizada:** proteção do acesso e comunicação adequada ao usuário.

---

## TA-04

**Por que este é um teste de aceitação?**

- **Objetivo do teste:** verificar se o sistema orienta corretamente o usuário quando o e-mail informado não existe.
- **Ponto de vista adotado:** experiência do usuário.
- **Tipo de validação realizada:** atendimento aos critérios de aceitação relacionados à recuperação de senha.

---

# Etapa 5 – Revisão por Pares

## Objetivo

Revisar os casos de teste elaborados por outro aluno, verificando sua qualidade e aderência às boas práticas.

## Critérios de revisão

- Clareza na descrição dos casos de teste;
- Estrutura completa (ID, Título, Pré-condições, Passos e Resultado Esperado);
- Coerência entre o tipo de teste (Sistema ou Aceitação);
- Identificação correta dos fluxos principais e alternativos;
- Resultados esperados compatíveis com os objetivos do teste.

### Observações da revisão

Ambos os alunos consideraram corretamente o cenário proposto e elaboraram versões semelhantes de testes cobrindo casos com pequenas diferenças de critério, mas todos os testes foram considerados válidos.

---

# Conclusão

Os testes de sistema tiveram como foco validar o funcionamento técnico da aplicação e a integração entre suas funcionalidades, enquanto os testes de aceitação verificaram se o sistema entrega o valor esperado ao usuário e atende aos requisitos do negócio. Dessa forma, ambos os tipos de teste se complementam para garantir a qualidade do software sob diferentes perspectivas.
