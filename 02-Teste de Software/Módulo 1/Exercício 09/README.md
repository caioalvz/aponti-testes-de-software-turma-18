# Atividade Avaliativa – Tipos de Testes (Smoke, Sanidade e Regressão)

## Cenário

Uma nova versão de um sistema bancário foi implantada com as seguintes alterações:

- Correção no processo de login.
- Ajuste na exibição do saldo na tela inicial.

O sistema possui as seguintes funcionalidades principais:

- Login do usuário.
- Autenticação.
- Exibição do saldo na tela principal.

Com base nesse cenário, foram elaborados cenários de teste para os tipos **Smoke**, **Sanidade** e **Regressão**, utilizando abordagens menos convencionais, explorando situações reais que normalmente passam despercebidas durante a validação funcional.

---

# 1. Testes de Smoke

## Objetivo

Os testes de **Smoke** verificam rapidamente se as funcionalidades essenciais do sistema continuam operacionais após a implantação, utilizando cenários que simulam comportamentos reais dos usuários.

### Cenário 1 – Acesso ao sistema utilizando um link salvo nos favoritos

**Passos:**

1. Abrir o navegador.
2. Acessar o sistema através de um favorito previamente salvo.
3. Verificar o carregamento da aplicação.

**Resultado esperado:**

A tela de login deve ser carregada normalmente.

**Justificativa:**

Muitos usuários acessam sistemas corporativos por favoritos. O teste garante que alterações na implantação não invalidaram URLs ou redirecionamentos.

---

### Cenário 2 – Login após atualização automática da página

**Passos:**

1. Abrir a tela de login.
2. Atualizar a página (F5).
3. Informar credenciais válidas.
4. Clicar em **Entrar**.

**Resultado esperado:**

O login deve ser realizado normalmente.

**Justificativa:**

Valida que a inicialização da aplicação continua íntegra mesmo após um recarregamento da página.

---

### Cenário 3 – Login utilizando o teclado

**Passos:**

1. Informar usuário.
2. Informar senha.
3. Pressionar **Enter**, sem clicar no botão.

**Resultado esperado:**

O sistema deve autenticar o usuário normalmente.

**Justificativa:**

Verifica se o fluxo principal funciona independentemente da forma de interação utilizada.

---

### Cenário 4 – Exibição do saldo após restauração da sessão do navegador

**Passos:**

1. Efetuar login.
2. Fechar o navegador sem realizar logout.
3. Reabrir o navegador restaurando a sessão anterior.

**Resultado esperado:**

O saldo deve ser exibido corretamente apenas se a sessão ainda for válida; caso contrário, o usuário deverá ser redirecionado para o login.

**Justificativa:**

Valida rapidamente o funcionamento do fluxo principal considerando restauração de sessão.

---

### Cenário 5 – Logout utilizando múltiplas abas

**Passos:**

1. Abrir duas abas autenticadas.
2. Realizar logout em uma delas.
3. Atualizar a segunda aba.

**Resultado esperado:**

A segunda aba também deve invalidar a sessão e solicitar novo login.

**Justificativa:**

Confirma rapidamente que o gerenciamento de sessão permanece consistente.

---

# 2. Testes de Sanidade

## Objetivo

Os testes de **Sanidade** validam especificamente as funcionalidades alteradas na versão, utilizando situações que podem revelar comportamentos inesperados.

### Cenário 1 – Login imediatamente após expiração da sessão

**Passos:**

1. Permanecer inativo até a sessão expirar.
2. Informar usuário e senha válidos.
3. Efetuar novo login.

**Resultado esperado:**

O acesso deve ocorrer normalmente, sem mensagens inconsistentes.

**Justificativa:**

Valida que a correção do login funciona mesmo após o encerramento automático da sessão.

---

### Cenário 2 – Tentativa de login utilizando dados preenchidos automaticamente pelo navegador

**Passos:**

1. Permitir que o navegador preencha usuário e senha automaticamente.
2. Clicar em **Entrar**.

**Resultado esperado:**

O login deve ocorrer normalmente.

**Justificativa:**

Verifica se alterações no login continuam compatíveis com recursos amplamente utilizados pelos usuários.

---

### Cenário 3 – Comparação do saldo após atualização automática

**Passos:**

1. Efetuar login.
2. Registrar o saldo apresentado.
3. Atualizar a página (F5).

**Resultado esperado:**

O saldo deve permanecer consistente após o recarregamento.

**Justificativa:**

Confirma que a correção da exibição do saldo permanece válida após reconstrução da interface.

---

### Cenário 4 – Verificação do saldo utilizando duas abas simultâneas

**Passos:**

1. Abrir duas abas autenticadas.
2. Comparar o saldo exibido em ambas.

**Resultado esperado:**

O saldo deve ser exatamente o mesmo nas duas abas.

**Justificativa:**

Garante que a alteração realizada não produz inconsistências entre diferentes instâncias da aplicação.

---

### Cenário 5 – Alternância rápida entre usuários

**Passos:**

1. Realizar login com o Usuário A.
2. Fazer logout.
3. Realizar login imediatamente com o Usuário B.

**Resultado esperado:**

O segundo usuário deve visualizar apenas seus próprios dados.

**Justificativa:**

Confirma que a correção do login não reutiliza informações da sessão anterior.

---

# 3. Testes de Regressão

## Objetivo

Os testes de **Regressão** verificam se as alterações implementadas não introduziram falhas em funcionalidades já existentes, incluindo aspectos de segurança e gerenciamento de sessão.

### Cenário 1 – Acesso pelo histórico após logout

**Passos:**

1. Efetuar login.
2. Confirmar a exibição do saldo.
3. Realizar logout.
4. Utilizar o botão **Voltar** do navegador.
5. Atualizar a página (F5).

**Resultado esperado:**

O sistema deve redirecionar para a tela de login e nenhuma informação sensível deve permanecer acessível.

**Justificativa:**

Garante que alterações no login não comprometeram a proteção da sessão e o controle do cache do navegador.

---

### Cenário 2 – Tentativa de reutilização da URL da área autenticada

**Passos:**

1. Efetuar login.
2. Copiar a URL da tela principal.
3. Realizar logout.
4. Colar novamente a URL copiada.

**Resultado esperado:**

O sistema deve exigir nova autenticação.

**Justificativa:**

Verifica que a proteção das páginas autenticadas continua funcionando após as alterações.

---

### Cenário 3 – Sessão compartilhada entre abas

**Passos:**

1. Efetuar login.
2. Duplicar a aba do navegador.
3. Realizar logout em uma das abas.
4. Atualizar a outra aba.

**Resultado esperado:**

A segunda aba também deve perder o acesso imediatamente.

**Justificativa:**

Confirma que o gerenciamento de sessão permanece íntegro após as alterações implementadas.

---

### Cenário 4 – Atualização da página durante o encerramento da sessão

**Passos:**

1. Efetuar login.
2. Clicar em **Sair**.
3. Pressionar rapidamente **F5** durante o redirecionamento.

**Resultado esperado:**

O sistema não deve retornar para a área autenticada.

**Justificativa:**

Garante que condições de corrida durante o logout não permitam acesso indevido.

---

### Cenário 5 – Exibição de dados após troca de usuário no mesmo navegador

**Passos:**

1. Realizar login com o Usuário A.
2. Fazer logout.
3. Efetuar login com o Usuário B.
4. Verificar o saldo e demais informações exibidas.

**Resultado esperado:**

Nenhuma informação pertencente ao Usuário A deve ser apresentada ao Usuário B.

**Justificativa:**

Valida que alterações recentes não introduziram vazamento de dados entre sessões diferentes, preservando o isolamento das informações.

---

# Comparação entre os tipos de teste

| Tipo de Teste | Objetivo |
|---------------|----------|
| **Smoke** | Validar rapidamente se as funcionalidades essenciais continuam operacionais após a implantação utilizando fluxos reais de utilização. |
| **Sanidade** | Confirmar que as funcionalidades alteradas (login e exibição do saldo) funcionam corretamente em situações pouco exploradas, mas comuns no uso diário. |
| **Regressão** | Garantir que as alterações implementadas não afetaram funcionalidades existentes, principalmente relacionadas ao gerenciamento de sessão, isolamento de dados e segurança da aplicação. |

---

# Conclusão

A utilização combinada dos testes de **Smoke**, **Sanidade** e **Regressão** com cenários menos convencionais amplia significativamente a cobertura dos testes da aplicação. Em vez de validar apenas o fluxo esperado, esses cenários exploram comportamentos reais dos usuários, como utilização de múltiplas abas, restauração de sessões, preenchimento automático do navegador, reutilização de URLs e navegação pelo histórico.

Essa abordagem aumenta a probabilidade de identificar defeitos relacionados ao gerenciamento de sessão, segurança, consistência de dados e experiência do usuário, reduzindo os riscos de falhas em produção e aumentando a confiabilidade da nova versão do sistema bancário.
