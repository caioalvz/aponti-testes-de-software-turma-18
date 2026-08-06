# Atividade Avaliativa - Testes Exploratórios e Usabilidade

# Sistema Avaliado

## Descrição

O sistema utilizado nesta atividade é um **sistema bancário web**, que possui as seguintes funcionalidades principais:

- Login do usuário;
- Autenticação na plataforma;
- Consulta de saldo bancário.

---

# Objetivo da Atividade

Responder às seguintes questões:

1. Cite **5 pontos que você exploraria livremente no sistema**;
2. Cite **5 possíveis problemas de usabilidade que poderiam existir**;
3. Explique **por que esses problemas impactam o usuário**.

---

# 1. Cinco pontos que eu exploraria livremente no sistema

O teste exploratório consiste em utilizar o sistema de forma livre, buscando identificar comportamentos inesperados, falhas e oportunidades de melhoria.

## 1. Fluxo de Login

Verificaria diferentes cenários de acesso, como:

- login com usuário válido;
- senha incorreta;
- campos em branco;
- caracteres especiais;
- tentativas consecutivas de login.

**Objetivo:** identificar falhas na autenticação e no tratamento de erros.

---

## 2. Consulta de Saldo

Exploraria diferentes situações após o login, verificando:

- atualização correta do saldo;
- tempo de carregamento;
- atualização após nova autenticação;
- comportamento ao atualizar a página.

**Objetivo:** garantir que as informações financeiras sejam exibidas corretamente.

---

## 3. Encerramento da Sessão (Logout)

Testaria:

- funcionamento do botão de logout;
- acesso às páginas utilizando o botão "Voltar" do navegador;
- encerramento automático por inatividade.

**Objetivo:** verificar a segurança da sessão do usuário.

---

## 4. Navegação Entre as Telas

Exploraria toda a navegação do sistema, verificando:

- menus;
- botões;
- links;
- retorno às páginas anteriores;
- funcionamento em diferentes resoluções.

**Objetivo:** identificar problemas de navegação e inconsistências na interface.

---

## 5. Validação dos Campos

Testaria os campos de entrada utilizando diferentes tipos de dados, como:

- campos vazios;
- textos muito longos;
- espaços em branco;
- caracteres especiais;
- números onde não são esperados.

**Objetivo:** verificar se o sistema valida corretamente as informações informadas pelo usuário.

---

# 2. Cinco possíveis problemas de usabilidade

## 1. Mensagens de erro pouco claras

Exemplo:

> "Erro inesperado."

Sem explicar o motivo ou como resolver o problema.

### Impacto

O usuário não consegue entender o que aconteceu e pode repetir a mesma ação diversas vezes, causando frustração.

---

## 2. Botões pouco visíveis

Exemplo:

Botões importantes com cores semelhantes ao fundo ou com tamanho muito pequeno.

### Impacto

Dificulta a navegação, aumenta o tempo para realizar tarefas e pode causar erros durante o uso.

---

## 3. Informações importantes mal organizadas

Exemplo:

O saldo bancário ficar escondido entre muitas informações na tela.

### Impacto

O usuário demora para localizar a informação principal, tornando a experiência menos eficiente.

---

## 4. Falta de feedback após uma ação

Exemplo:

Após clicar em "Entrar", o sistema não apresenta nenhuma indicação de que está processando a solicitação.

### Impacto

O usuário pode acreditar que o sistema travou e clicar várias vezes no botão, gerando múltiplas requisições.

---

## 5. Layout não adaptado para dispositivos móveis

Exemplo:

Campos desalinhados ou necessidade de rolagem horizontal em celulares.

### Impacto

A utilização do sistema torna-se difícil em smartphones e tablets, prejudicando a experiência do usuário.

---

# 3. Por que esses problemas impactam o usuário?

Problemas de usabilidade afetam diretamente a experiência do usuário, pois dificultam a realização das tarefas de forma simples, rápida e segura.

Quando um sistema possui mensagens confusas, navegação complicada ou elementos mal posicionados, o usuário pode cometer erros, gastar mais tempo para concluir suas atividades e perder a confiança na aplicação.

No contexto de um sistema bancário, esses impactos são ainda mais relevantes, pois os usuários lidam com informações financeiras sensíveis e esperam um ambiente confiável, intuitivo e seguro. Uma interface de difícil utilização pode gerar insegurança, dúvidas e até mesmo abandono do sistema.

Por isso, investir em usabilidade contribui para uma melhor experiência do usuário, reduz erros operacionais e aumenta a satisfação e a confiança na plataforma.

---

# Conclusão

Durante um teste exploratório, é importante analisar não apenas o funcionamento das funcionalidades, mas também a forma como o usuário interage com o sistema.

No sistema bancário avaliado, explorar cenários de login, autenticação, consulta de saldo, navegação e validação de campos permite identificar falhas que podem comprometer tanto a qualidade do software quanto a experiência do usuário.

Além disso, aspectos de usabilidade, como mensagens claras, organização da interface, feedback das ações e adaptação para dispositivos móveis, são fundamentais para oferecer uma aplicação intuitiva, eficiente e segura.

---