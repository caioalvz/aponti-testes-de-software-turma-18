# Atividade Avaliativa: Análise e Níveis de Testes de Software

**Sistema:** Sistema de Gerenciamento de Pedidos (SGP)  
**Atribuição:** Análise de Funcionalidades, Regras de Negócio e Classificação de Testes por Níveis  

---

## 1. Visão Geral do Sistema (SGP)

O **Sistema de Gerenciamento de Pedidos (SGP)** é uma aplicação web utilizada por **clientes** e **administradores** para realizar e gerenciar pedidos de produtos online.

* **Integrações:**
  * Banco de Dados de Produtos
  * Serviço de Autenticação
  * Serviço de Pedidos
* **Funcionalidades Principais:**
  * Cadastro e autenticação de usuários
  * Consulta de produtos disponíveis
  * Adição e remoção de itens no carrinho
  * Cálculo automático do valor total do pedido
  * Finalização do pedido com confirmação
* **Regras de Negócio (RN):**
  * **RN01:** O pedido deve conter pelo menos um item.
  * **RN02:** O valor total deve considerar quantidade e preço dos produtos.
  * **RN03:** Usuários não autenticados não podem finalizar pedidos.
  * **RN04:** Após a confirmação, o pedido não pode ser alterado.

---

## 2. Classificação dos Testes por Níveis

---

### 🧪 2.1. Testes Unitários

#### **O que são e Objetivos:**
Os testes unitários focam em isolar e validar a menor unidade testável de código (funções, métodos, classes ou módulos isolados), sem dependências externas (como banco de dados ou redes), utilizando *mocks* ou *stubs* para simular essas dependências.

#### **Casos de Teste Unitários no SGP:**
1. **Cálculo de Subtotal e Total do Carrinho:**
   * **Caso:** Testar a função isolada `calcularValorTotal(itens)` informando uma lista de objetos `{preco: 10.00, quantidade: 3}` e `{preco: 5.00, quantidade: 2}`.
   * **Resultado Esperado:** Retornar exatamente `40.00` (respeitando a RN02).
2. **Validação de Carrinho Vazio:**
   * **Caso:** Testar o método `validarItensPedido(carrinho)` passando uma lista vazia `[]`.
   * **Resultado Esperado:** Retornar exceção ou booleano `false` indicando que o pedido não pode prosseguir sem itens (respeitando a RN01).
3. **Validação de Estado do Pedido (Imutabilidade):**
   * **Caso:** Executar o método `atualizarPedido(pedidoId, novosItens)` em um objeto `Pedido` cuja propriedade `status` seja `'CONFIRMADO'`.
   * **Resultado Esperado:** O método deve lançar um erro do tipo `PedidoJaConfirmadoException` (respeitando a RN04).
4. **Validação de Formato de Cadastro:**
   * **Caso:** Testar a função `validarDadosUsuario(dados)` com email mal formatado ou senha fora do padrão.
   * **Resultado Esperado:** Retornar falha de validação unitária antes de salvar.

#### **Justificativa (Nível e Objetivo):**
* **Nível:** Unidade / Componente isolado.
* **Objetivo:** Garantir a corretude das regras matemáticas e lógicas internas do sistema em tempo de execução rápido, antes que qualquer infraestrutura ou banco de dados seja acessado.

---

### 🧩 2.2. Testes de Integração

#### **O que são e Objetivos:**
Os testes de integração verificam a comunicação e o fluxo de dados entre duas ou mais unidades/módulos interligados, ou entre a aplicação e seus serviços/sistemas externos (Banco de Dados de Produtos, Serviço de Autenticação e Serviço de Pedidos).

#### **Casos de Teste de Integração no SGP:**
1. **Comunicação com o Serviço de Autenticação:**
   * **Caso:** A camada de controladores do SGP faz uma requisição HTTP REST/gRPC para a API do **Serviço de Autenticação** com credenciais de teste válidas.
   * **Resultado Esperado:** O serviço responde com HTTP 200 OK e um Token JWT válido, permitindo que a sessão do usuário seja criada na aplicação SGP.
2. **Consulta e Persistência no Banco de Dados de Produtos:**
   * **Caso:** O método de busca do SGP executa uma *query* SQL/NoSQL no **Banco de Dados de Produtos**.
   * **Resultado Esperado:** Retornar os produtos com preços e estoques atualizados corretamente armazenados na base de dados.
3. **Comunicação entre Módulo de Carrinho e Serviço de Pedidos:**
   * **Caso:** Ao solicitar o fechamento da compra, o módulo de carrinho envia o objeto do pedido para a API do **Serviço de Pedidos**.
   * **Resultado Esperado:** O Serviço de Pedidos grava o registro no BD, altera o status para `PENDENTE` e retorna o `id_pedido` gerado.

#### **Justificativa (Nível e Objetivo):**
* **Nível:** Integração (Módulo a Módulo / Sistema a Serviço Externo).
* **Objetivo:** Garantir que as interfaces, rotas de API, mapeamentos de banco de dados e contratos de integração entre os subsistemas estejam funcionando e se comunicando de forma consistente.

---

### 🖥️ 2.3. Testes de Sistema

#### **O que são e Objetivos:**
Os testes de sistema avaliam o comportamento do software como um todo, em um ambiente totalmente integrado e similar ao de produção. Validam os fluxos ponta a ponta (E2E - End-to-End), incluindo interface web (UI), desempenho, segurança e regras operacionais.

#### **Casos de Teste de Sistema no SGP:**
1. **Fluxo Completo de Compra pelo Cliente (E2E):**
   * **Caso:** O usuário acessa a interface web → realiza login → busca um produto → adiciona 2 unidades ao carrinho → verifica o valor total calculado → clica em "Finalizar Pedido" → confirma a compra.
   * **Resultado Esperado:** O pedido é finalizado com sucesso, exibe mensagem de confirmação na tela, limpa o carrinho e gera a ordem de pedido no sistema.
2. **Bloqueio de Finalização por Usuário Anônimo (RN03):**
   * **Caso:** Usuário não autenticado navega pela web UI, adiciona itens ao carrinho e clica em "Finalizar Pedido".
   * **Resultado Esperado:** O sistema intercepta a ação, redireciona para a tela de Login/Cadastro com mensagem explicativa e impede o envio do pedido.
3. **Bloqueio de Edição de Pedido Confirmado pela Web UI (RN04):**
   * **Caso:** O cliente ou administrador visualiza a lista de "Meus Pedidos", seleciona um pedido com status `CONFIRMADO` e tenta clicar no botão de alterar/editar itens.
   * **Resultado Esperado:** Os botões de edição estarão desabilitados/ausentes na UI, e qualquer tentativa direta via URL/requisição retornará erro de operação não permitida.

#### **Justificativa (Nível e Objetivo):**
* **Nível:** Sistema / End-to-End.
* **Objetivo:** Verificar se a aplicação completa atende às especificações técnicas e funcionais globais quando executada de ponta a ponta em um ambiente completo.

---

### 🎯 2.4. Testes de Aceitação

#### **O que são e Objetivos:**
Os testes de aceitação são focados em validar se o sistema atende às necessidades de negócio do cliente final e das partes interessadas (*stakeholders*). Frequentemente escritos em linguagem natural/orientada a comportamento (BDD/Gherkin), eles determinam se o sistema está pronto para ser implantado em produção.

#### **Casos / Cenários de Teste de Aceitação no SGP (Exemplos BDD):**

```gherkin
Cenário: Impedir finalização de pedido sem itens
  Dado que o cliente está autenticado no SGP
  E o seu carrinho de compras está vazio
  Quando ele tentar clicar em "Finalizar Pedido"
  Então o sistema deve exibir a mensagem "Adicione pelo menos um item ao carrinho para prosseguir"
  E o pedido não deve ser gerado.

Cenário: Restrição de alteração em pedidos confirmados
  Dado que o administrador consulta o pedido "#1002"
  E o status deste pedido é "CONFIRMADO"
  Quando o administrador tentar remover ou alterar a quantidade de um item deste pedido
  Então o sistema deve impedir a alteração
  E exibir o aviso "Pedidos confirmados não podem ser alterados".
```

#### **Justificativa (Nível e Objetivo):**
* **Nível:** Aceitação (Negócio e Usuário Final).
* **Objetivo:** Validar o valor de negócio da aplicação e obter a aprovação do cliente/PO para implantação, garantindo que o software realmente cumpre o propósito para o qual foi concebido.

---

## 📊 3. Matriz Resumo dos Níveis de Teste

| Nível de Teste | Alvo / Escopo | Objetivo Principal | Exemplo Prático no SGP |
| :--- | :--- | :--- | :--- |
| **Unitário** | Funções e Métodos isolados | Validar a lógica interna e regras de cálculo em isolamento. | Testar a função `calcularValorTotal()` com diferentes preços e quantidades. |
| **Integração** | Comunicação entre módulos e APIs | Validar a troca de dados entre SGP, BD e Serviços externos. | Verificar se a requisição de login retorna o JWT correto do Serviço de Autenticação. |
| **Sistema** | Aplicação completa (E2E / UI) | Validar fluxos completos e comportamento global do sistema. | Simular o fluxo do cliente: Login $
ightarrow$ Busca $
ightarrow$ Carrinho $
ightarrow$ Checkout na UI web. |
| **Aceitação** | Critérios de Aceite / Negócio | Confirmar que o sistema atende aos requisitos do negócio (PO/Cliente). | Validar a regra BDD de que pedidos confirmados não podem sofrer alterações. |

---

## 📌 Conclusão
A separação dos testes nestes quatro níveis garante a cobertura completa da Pirâmide de Testes no SGP, permitindo detectar bugs precocemente (nos testes unitários e de integração) e assegurar a usabilidade e o valor de negócio do produto final (nos testes de sistema e aceitação).