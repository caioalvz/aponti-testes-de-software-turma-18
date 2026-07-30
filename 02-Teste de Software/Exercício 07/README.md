# Estruturando Casos de Teste — Tela de Login

**Atividade avaliativa:** criar pelo menos 10 casos de teste completos para uma tela de login, cobrindo o caminho feliz e cenários alternativos.

**Convenções usadas:**
- Cada caso segue: ID, Título, Pré-condição, Dados de entrada, Passos, Resultado esperado (observável), Prioridade.
- Linguagem clara, steps separados, sem termos genéricos como "testar o login" ou "verificar se funciona".

---

## CT-01 — Login com credenciais válidas (caminho feliz)

- **Pré-condição:** usuário "maria@teste.com" cadastrado e ativo, com senha "Senha@123".
- **Dados de entrada:** e-mail: `maria@teste.com` | senha: `Senha@123`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" com `maria@teste.com`.
  3. Preencher o campo "Senha" com `Senha@123`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** usuário é redirecionado para a tela inicial (dashboard) e o nome "Maria" é exibido no cabeçalho.
- **Prioridade:** Alta

---

## CT-02 — Login com senha incorreta

- **Pré-condição:** usuário "maria@teste.com" cadastrado e ativo.
- **Dados de entrada:** e-mail: `maria@teste.com` | senha: `SenhaErrada1`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" com `maria@teste.com`.
  3. Preencher o campo "Senha" com `SenhaErrada1`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** sistema permanece na tela de login e exibe a mensagem "E-mail ou senha inválidos"; o campo de senha é limpo.
- **Prioridade:** Alta

---

## CT-03 — Login com e-mail não cadastrado

- **Pré-condição:** nenhum usuário cadastrado com o e-mail `naoexiste@teste.com`.
- **Dados de entrada:** e-mail: `naoexiste@teste.com` | senha: `Qualquer123`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" com `naoexiste@teste.com`.
  3. Preencher o campo "Senha" com `Qualquer123`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** sistema exibe a mensagem "E-mail ou senha inválidos", sem indicar especificamente que o e-mail não existe (para não expor quais e-mails estão cadastrados).
- **Prioridade:** Alta

---

## CT-04 — Campos obrigatórios vazios

- **Pré-condição:** tela de login carregada, campos em branco.
- **Dados de entrada:** e-mail: *(vazio)* | senha: *(vazio)*
- **Passos:**
  1. Acessar a tela de login.
  2. Deixar os campos "E-mail" e "Senha" em branco.
  3. Clicar no botão "Entrar".
- **Resultado esperado:** sistema não envia a requisição; os campos "E-mail" e "Senha" são destacados em vermelho com a mensagem "Campo obrigatório".
- **Prioridade:** Alta

---

## CT-05 — E-mail em formato inválido

- **Pré-condição:** tela de login carregada.
- **Dados de entrada:** e-mail: `maria@` | senha: `Senha@123`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" com `maria@` (sem domínio).
  3. Preencher o campo "Senha" com `Senha@123`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** sistema exibe a mensagem "Formato de e-mail inválido" abaixo do campo, sem chegar a consultar o servidor.
- **Prioridade:** Média

---

## CT-06 — Bloqueio após múltiplas tentativas incorretas

- **Pré-condição:** usuário "maria@teste.com" cadastrado; política de bloqueio após 5 tentativas incorretas.
- **Dados de entrada:** e-mail: `maria@teste.com` | senha: `SenhaErrada1` (repetida)
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o e-mail correto e a senha incorreta.
  3. Clicar em "Entrar" e repetir os passos 2 e 3 até completar 5 tentativas.
  4. Na 6ª tentativa, inserir a senha correta `Senha@123`.
- **Resultado esperado:** a partir da 6ª tentativa o sistema exibe "Conta temporariamente bloqueada. Tente novamente em X minutos" e não autentica mesmo com a senha correta.
- **Prioridade:** Alta

---

## CT-07 — Sensibilidade a maiúsculas/minúsculas no e-mail

- **Pré-condição:** usuário cadastrado como `maria@teste.com`.
- **Dados de entrada:** e-mail: `MARIA@TESTE.COM` | senha: `Senha@123`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" com `MARIA@TESTE.COM` (tudo em maiúsculas).
  3. Preencher o campo "Senha" com `Senha@123`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** login é realizado com sucesso, pois o e-mail deve ser tratado como não sensível a maiúsculas/minúsculas.
- **Prioridade:** Média

---

## CT-08 — Espaços em branco antes/depois dos campos

- **Pré-condição:** usuário "maria@teste.com" cadastrado.
- **Dados de entrada:** e-mail: `" maria@teste.com "` (com espaço antes e depois) | senha: `Senha@123`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" incluindo um espaço em branco antes e depois do texto.
  3. Preencher o campo "Senha" com `Senha@123`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** sistema remove os espaços extras automaticamente (trim) e realiza o login com sucesso.
- **Prioridade:** Baixa

---

## CT-09 — Tentativa de SQL Injection / script no campo de e-mail

- **Pré-condição:** tela de login carregada.
- **Dados de entrada:** e-mail: `' OR '1'='1` | senha: `qualquercoisa`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "E-mail" com `' OR '1'='1`.
  3. Preencher o campo "Senha" com `qualquercoisa`.
  4. Clicar no botão "Entrar".
- **Resultado esperado:** sistema trata a entrada como texto comum, exibe "E-mail ou senha inválidos" e não autentica o usuário nem gera erro no servidor.
- **Prioridade:** Alta

---

## CT-10 — Exibir/ocultar senha

- **Pré-condição:** tela de login carregada, campo de senha preenchido.
- **Dados de entrada:** senha: `Senha@123`
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher o campo "Senha" com `Senha@123`.
  3. Clicar no ícone de "olho" ao lado do campo de senha.
- **Resultado esperado:** a senha passa a ser exibida em texto legível; ao clicar novamente no ícone, volta a ser exibida como pontos/asteriscos.
- **Prioridade:** Baixa

---

## CT-11 — Persistência de sessão com "Lembrar de mim"

- **Pré-condição:** usuário "maria@teste.com" cadastrado; opção "Lembrar de mim" disponível na tela.
- **Dados de entrada:** e-mail: `maria@teste.com` | senha: `Senha@123` | checkbox "Lembrar de mim" marcado
- **Passos:**
  1. Acessar a tela de login.
  2. Preencher e-mail e senha corretos.
  3. Marcar a caixa "Lembrar de mim".
  4. Clicar em "Entrar".
  5. Fechar completamente o navegador e abri-lo novamente, acessando o sistema.
- **Resultado esperado:** usuário permanece autenticado e é direcionado direto ao dashboard, sem precisar logar novamente.
- **Prioridade:** Média

---

## CT-12 — Navegação e envio via teclado (acessibilidade)

- **Pré-condição:** tela de login carregada, foco no campo "E-mail".
- **Dados de entrada:** e-mail: `maria@teste.com` | senha: `Senha@123`
- **Passos:**
  1. Acessar a tela de login sem usar o mouse.
  2. Digitar o e-mail e pressionar "Tab" para ir ao campo de senha.
  3. Digitar a senha.
  4. Pressionar "Enter" para submeter o formulário.
- **Resultado esperado:** login é realizado com sucesso apenas com o teclado, sem necessidade de clicar em botões com o mouse.
- **Prioridade:** Média

---

## Resumo de cobertura

| Categoria | Casos |
|---|---|
| Caminho feliz | CT-01 |
| Credenciais inválidas | CT-02, CT-03 |
| Validação de formulário | CT-04, CT-05 |
| Regras de segurança/negócio | CT-06, CT-09 |
| Normalização de entrada | CT-07, CT-08 |
| Usabilidade/acessibilidade | CT-10, CT-12 |
| Sessão | CT-11 |

Total: **12 casos de teste** (acima do mínimo de 10 solicitado), cobrindo caminho feliz, cenários negativos, segurança, normalização de dados e usabilidade — pensando "fora da caixinha" além do fluxo óbvio de login/senha corretos.
    