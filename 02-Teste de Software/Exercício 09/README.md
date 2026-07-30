# Atividade Avaliativa – Tipos de Testes (Smoke, Sanidade e Regressão)

## Cenário

Uma nova versão de um sistema bancário foi implantada com as seguintes alterações:

- Correção no processo de login.
- Ajuste na exibição do saldo na tela inicial.

O sistema possui as seguintes funcionalidades principais:

- Login do usuário.
- Autenticação.
- Exibição do saldo na tela principal.

Com base nesse cenário, foram elaborados cenários de teste para os tipos **Smoke**, **Sanidade** e **Regressão**, com suas respectivas justificativas.

---

# 1. Testes de Smoke

## Objetivo

Os testes de **Smoke** verificam rapidamente se as funcionalidades principais do sistema continuam funcionando após uma nova implantação. Caso algum desses testes falhe, a execução dos demais testes é interrompida, pois o sistema não está estável o suficiente.

### Cenário 1 – Acessar a tela de login

**Passos:**

1. Abrir o sistema.
2. Verificar se a tela de login é exibida.

**Resultado esperado:**

A tela de login deve ser carregada corretamente.

**Justificativa:**

É a porta de entrada da aplicação. Se ela não carregar, não é possível validar nenhuma outra funcionalidade.

---

### Cenário 2 – Login com credenciais válidas

**Passos:**

1. Informar usuário válido.
2. Informar senha válida.
3. Clicar em **Entrar**.

**Resultado esperado:**

O usuário deve ser autenticado com sucesso.

**Justificativa:**

O login foi uma das funcionalidades alteradas nesta versão e é essencial para utilização do sistema.

---

### Cenário 3 – Carregamento da tela principal

**Passos:**

1. Realizar login.
2. Aguardar o carregamento da tela inicial.

**Resultado esperado:**

A tela principal deve ser apresentada sem erros.

**Justificativa:**

Confirma que o fluxo principal da aplicação continua funcionando após a atualização.

---

### Cenário 4 – Exibição do saldo

**Passos:**

1. Efetuar login.
2. Observar o saldo exibido na tela inicial.

**Resultado esperado:**

O saldo deve aparecer corretamente.

**Justificativa:**

A exibição do saldo também sofreu alteração nesta versão e precisa ser validada rapidamente.

---

### Cenário 5 – Logout

**Passos:**

1. Estando logado, clicar em **Sair**.

**Resultado esperado:**

O usuário deve retornar para a tela de login.

**Justificativa:**

Garante que o fluxo básico de autenticação (entrada e saída) permanece funcional.

---

# 2. Testes de Sanidade

## Objetivo

Os testes de **Sanidade** verificam se as funcionalidades alteradas realmente foram corrigidas e se estão funcionando conforme esperado.

### Cenário 1 – Login com usuário válido

**Passos:**

1. Informar usuário e senha válidos.
2. Efetuar login.

**Resultado esperado:**

O acesso deve ser realizado com sucesso.

**Justificativa:**

Valida diretamente a correção implementada no login.

---

### Cenário 2 – Login com senha incorreta

**Passos:**

1. Informar usuário válido.
2. Informar senha incorreta.
3. Clicar em **Entrar**.

**Resultado esperado:**

O sistema deve impedir o acesso e exibir uma mensagem de erro.

**Justificativa:**

Confirma que a correção do login não comprometeu a validação das credenciais.

---

### Cenário 3 – Conferência do saldo exibido

**Passos:**

1. Realizar login.
2. Comparar o saldo apresentado com o saldo registrado da conta.

**Resultado esperado:**

O valor exibido deve ser exatamente igual ao saldo armazenado.

**Justificativa:**

Valida a alteração realizada na exibição do saldo.

---

### Cenário 4 – Atualização do saldo após novo login

**Passos:**

1. Realizar login.
2. Anotar o saldo.
3. Fazer logout.
4. Entrar novamente.

**Resultado esperado:**

O saldo deve permanecer consistente entre os acessos.

**Justificativa:**

Verifica que a alteração continua funcionando após uma nova autenticação.

---

### Cenário 5 – Login com usuários diferentes

**Passos:**

1. Entrar com o Usuário A.
2. Verificar o saldo.
3. Fazer logout.
4. Entrar com o Usuário B.

**Resultado esperado:**

Cada usuário deve visualizar apenas o seu próprio saldo.

**Justificativa:**

Garante que a alteração não afetou a separação das informações entre contas.

---

# 3. Testes de Regressão

## Objetivo

Os testes de **Regressão** verificam se as alterações implementadas não causaram falhas em funcionalidades que já funcionavam anteriormente.

### Cenário 1 – Login continua funcionando

**Passos:**

1. Efetuar login normalmente.

**Resultado esperado:**

O usuário deve acessar o sistema sem erros.

**Justificativa:**

Confirma que a correção do login não introduziu novos defeitos.

---

### Cenário 2 – Navegação entre telas

**Passos:**

1. Realizar login.
2. Navegar entre a tela inicial, extrato, perfil e configurações.

**Resultado esperado:**

Todas as telas devem abrir normalmente.

**Justificativa:**

Mudanças podem impactar componentes compartilhados da aplicação.

---

### Cenário 3 – Logout

**Passos:**

1. Efetuar login.
2. Encerrar a sessão.

**Resultado esperado:**

O sistema deve redirecionar para a tela de login.

**Justificativa:**

Verifica que o fluxo de autenticação permanece íntegro.

---

### Cenário 4 – Proteção da sessão

**Passos:**

1. Fazer logout.
2. Tentar acessar diretamente a URL da tela principal.

**Resultado esperado:**

O sistema deve redirecionar o usuário para a tela de login.

**Justificativa:**

Garante que a segurança da aplicação não foi comprometida pelas alterações.

---

### Cenário 5 – Atualização da página inicial

**Passos:**

1. Efetuar login.
2. Pressionar **F5** ou atualizar a página.

**Resultado esperado:**

O saldo deve continuar sendo exibido corretamente após o recarregamento.

**Justificativa:**

Confirma que a alteração na exibição do saldo continua funcionando após o reload da aplicação.

---

# Comparação entre os tipos de teste

| Tipo de Teste | Objetivo |
|---------------|----------|
| **Smoke** | Validar rapidamente se as principais funcionalidades do sistema estão operacionais após a implantação. |
| **Sanidade** | Verificar especificamente as funcionalidades que sofreram alteração (login e exibição do saldo). |
| **Regressão** | Garantir que as mudanças implementadas não afetaram funcionalidades existentes do sistema. |

---

# Conclusão

A utilização combinada dos testes de **Smoke**, **Sanidade** e **Regressão** permite validar diferentes aspectos da qualidade da aplicação:

- Os **testes de Smoke** verificam se o sistema está apto para testes mais detalhados.
- Os **testes de Sanidade** confirmam que as correções realizadas na nova versão funcionam conforme esperado.
- Os **testes de Regressão** garantem que funcionalidades já existentes continuam operando normalmente após as alterações.

Essa estratégia reduz o risco de falhas em produção e aumenta a confiabilidade da nova versão do sistema bancário.