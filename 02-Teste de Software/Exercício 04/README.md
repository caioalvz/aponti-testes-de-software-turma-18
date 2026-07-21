# Atividade Avaliativa: Análise e Níveis de Testes de Software

## Sistema: Sistema de Gerenciamento de Pedidos (SGP)

### Objetivo da Atividade

Nesta atividade, devemos identificar exemplos de testes para cada nível de teste de software (Unitário, Integração, Sistema e Aceitação), relacionando-os às funcionalidades e regras de negócio do sistema.

---

# 1. Visão Geral do Sistema

O **Sistema de Gerenciamento de Pedidos (SGP)** é um sistema utilizado para realizar compras de produtos pela internet.

Existem dois tipos de usuários:

- Cliente
- Administrador

O sistema possui as seguintes funcionalidades:

- Cadastro e login de usuários;
- Consulta de produtos disponíveis;
- Adição e remoção de produtos no carrinho;
- Cálculo do valor total da compra;
- Finalização do pedido.

O sistema também se comunica com:

- Banco de dados de produtos;
- Serviço de autenticação (login);
- Serviço de pedidos.

---

## Regras de Negócio

- **RN01:** O pedido deve possuir pelo menos um item.
- **RN02:** O valor total do pedido deve considerar o preço e a quantidade de cada produto.
- **RN03:** Apenas usuários autenticados podem finalizar pedidos.
- **RN04:** Depois que um pedido for confirmado, ele não poderá ser alterado.

---

# 2. Níveis de Teste

## 2.1 Teste Unitário

### O que é?

O teste unitário verifica uma pequena parte do sistema, como uma função ou método, sem depender de outras partes do software.

### Exemplos

#### Caso 1 – Calcular o valor total

**Entrada:**

- Produto A: R$ 10,00 (3 unidades)
- Produto B: R$ 5,00 (2 unidades)

**Resultado esperado:**

O valor total deve ser **R$ 40,00**, conforme a **RN02**.

---

#### Caso 2 – Carrinho vazio

**Entrada:**

- Carrinho sem produtos.

**Resultado esperado:**

O sistema informa que não é possível finalizar o pedido, conforme a **RN01**.

---

#### Caso 3 – Pedido confirmado

**Entrada:**

- Pedido com status **CONFIRMADO**.

**Resultado esperado:**

O sistema não permite alterar o pedido, conforme a **RN04**.

### Objetivo

Verificar se cada pequena parte do sistema funciona corretamente.

---

# 2.2 Teste de Integração

### O que é?

O teste de integração verifica se diferentes partes do sistema conseguem se comunicar corretamente.

### Exemplos

#### Caso 1 – Login

**Passo:**

O usuário informa login e senha.

**Resultado esperado:**

O sistema confirma o login e permite o acesso.

---

#### Caso 2 – Consulta de produtos

**Passo:**

O usuário pesquisa um produto.

**Resultado esperado:**

O sistema apresenta os produtos cadastrados no banco de dados.

---

#### Caso 3 – Envio do pedido

**Passo:**

O usuário finaliza uma compra.

**Resultado esperado:**

O pedido é enviado corretamente para o serviço responsável pelo registro dos pedidos.

### Objetivo

Garantir que os módulos do sistema troquem informações corretamente.

---

# 2.3 Teste de Sistema

### O que é?

O teste de sistema verifica o funcionamento da aplicação completa, simulando o uso de um usuário.

### Exemplos

#### Caso 1 – Compra completa

**Passos:**

1. Fazer login;
2. Pesquisar um produto;
3. Adicionar ao carrinho;
4. Conferir o valor total;
5. Finalizar a compra.

**Resultado esperado:**

O pedido é criado com sucesso e uma mensagem de confirmação é exibida.

---

#### Caso 2 – Usuário sem login

**Passos:**

1. Adicionar produtos ao carrinho;
2. Tentar finalizar o pedido sem estar autenticado.

**Resultado esperado:**

O sistema solicita que o usuário faça login antes de concluir a compra, conforme a **RN03**.

---

#### Caso 3 – Alterar pedido confirmado

**Passos:**

1. Abrir um pedido já confirmado;
2. Tentar alterar seus itens.

**Resultado esperado:**

O sistema impede a alteração do pedido, conforme a **RN04**.

### Objetivo

Verificar se todas as funcionalidades do sistema funcionam corretamente quando utilizadas em conjunto.

---

# 2.4 Teste de Aceitação

### O que é?

O teste de aceitação verifica se o sistema atende às necessidades do cliente e às regras definidas para o negócio.

### Exemplos

#### Cenário 1 – Pedido sem produtos

```gherkin
Cenário: Impedir finalização de pedido sem itens

Dado que o cliente está autenticado
E o carrinho está vazio

Quando tentar finalizar o pedido

Então o sistema deverá informar que é necessário adicionar pelo menos um produto
E o pedido não será criado.
```

---

#### Cenário 2 – Pedido confirmado

```gherkin
Cenário: Impedir alteração de pedido confirmado

Dado que existe um pedido confirmado

Quando o usuário tentar alterá-lo

Então o sistema deverá impedir a alteração
E apresentar uma mensagem informando que pedidos confirmados não podem ser modificados.
```

### Objetivo

Confirmar que o sistema atende às expectativas do cliente e às regras de negócio.

---

# 3. Resumo dos Níveis de Teste

| Nível de Teste | O que verifica | Exemplo |
|----------------|----------------|----------|
| **Unitário** | Uma pequena parte do sistema (função ou método). | Calcular corretamente o valor total do carrinho. |
| **Integração** | Comunicação entre módulos do sistema. | Verificar se o login funciona corretamente com o serviço de autenticação. |
| **Sistema** | O funcionamento completo da aplicação. | Realizar uma compra do início ao fim. |
| **Aceitação** | Se o sistema atende às necessidades do cliente. | Confirmar que um pedido sem itens não pode ser finalizado. |

---

# Conclusão

Cada nível de teste possui um objetivo diferente:

- **Teste Unitário:** verifica pequenas partes do sistema.
- **Teste de Integração:** verifica a comunicação entre os módulos.
- **Teste de Sistema:** verifica o funcionamento completo da aplicação.
- **Teste de Aceitação:** confirma que o sistema atende às necessidades do cliente e às regras de negócio.

A utilização desses quatro níveis de teste aumenta a qualidade do software, ajuda a encontrar erros mais cedo e garante que o sistema funcione corretamente para os usuários.
