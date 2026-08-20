# Plano de Testes — Plataforma de Clínica de Psicologia

**Responsável pelos testes:** Caio Alves  
**Avaliador:** Professor André Ribeiro  
**Situação do projeto:** MVP em desenvolvimento  
**Equipe de testes:** 9 pessoas  
**Duração de cada ciclo:** 1 semana  

---

## 1. Objetivo

Este plano de testes tem como objetivo definir de forma simples e executável como serão realizados os testes na plataforma que simula uma clínica de psicologia.

A aplicação encontra-se em fase de **MVP**, portanto os testes serão realizados durante o desenvolvimento para identificar bugs, validar as funcionalidades principais e garantir que as correções realizadas não afetem outras partes do sistema.

---

## 2. Escopo de Testes

Os testes serão concentrados nas principais funcionalidades disponibilizadas pelo MVP da aplicação.

### Funcionalidades que serão testadas

- Login e autenticação de usuários;
- Cadastro de pacientes;
- Cadastro de psicólogos;
- Consulta e gerenciamento de pacientes;
- Agendamento de consultas;
- Alteração e cancelamento de consultas;
- Visualização das informações dos atendimentos;
- Validação dos campos dos formulários;
- Navegação entre as telas;
- Mensagens de erro e confirmação.

Funcionalidades que ainda não estiverem implementadas não farão parte do escopo do ciclo atual e serão incluídas nos próximos ciclos conforme forem desenvolvidas.

---

## 3. Tipos de Teste Aplicados

### Testes Funcionais

Serão realizados para verificar se cada funcionalidade apresenta o resultado esperado.

**Exemplo:** realizar um agendamento e verificar se a consulta aparece corretamente na agenda.

### Testes de Usabilidade

Serão utilizados para verificar se a plataforma é simples de compreender e utilizar.

Serão observados aspectos como:

- Facilidade de navegação;
- Organização das informações;
- Clareza dos botões;
- Clareza das mensagens apresentadas ao usuário.

### Testes de Validação

Serão realizados para verificar se os formulários aceitam informações válidas e rejeitam informações incorretas.

**Exemplo:** tentar realizar um cadastro sem preencher um campo obrigatório.

### Testes de Regressão

Após a correção de um bug, serão realizados novos testes para verificar se o problema foi solucionado e se a correção não afetou outras funcionalidades.

---

## 4. Critérios de Entrada

Um ciclo de testes poderá ser iniciado quando:

- A versão da aplicação estiver disponível no ambiente de testes;
- As funcionalidades previstas para o ciclo estiverem implementadas;
- O ambiente de testes estiver funcionando;
- Os participantes tiverem acesso à aplicação;
- Os dados necessários para realizar os testes estiverem disponíveis.

---

## 5. Critérios de Saída

O ciclo de testes poderá ser encerrado quando:

- As funcionalidades previstas forem testadas;
- Os bugs encontrados forem registrados;
- Os problemas críticos forem identificados e encaminhados para correção;
- Os testes planejados para o ciclo forem concluídos;
- As correções disponíveis forem submetidas a reteste.

O encerramento de um ciclo não significa o encerramento dos testes do projeto. Novos ciclos serão realizados conforme a aplicação evoluir.

---

## 6. Ambiente de Testes

Os testes serão realizados em um ambiente disponibilizado especificamente para testes da aplicação.

Cada um dos **9 participantes** utilizará seu próprio computador para acessar a plataforma.

### Recursos do ambiente

- Computadores pessoais dos participantes;
- Navegador de internet;
- Aplicação em ambiente de testes;
- Dados fictícios para simulação;
- Ferramenta para registro dos bugs;
- Acesso à internet.

Não serão utilizados dados reais de pacientes ou outras informações sensíveis.

---

## 7. Recursos e Responsabilidades

### Responsável pelos testes

**Caio Alves**

Responsabilidades:

- Organizar os ciclos de testes;
- Definir as funcionalidades que serão testadas;
- Orientar os participantes;
- Acompanhar a execução dos testes;
- Consolidar os bugs encontrados;
- Priorizar os problemas identificados;
- Acompanhar os retestes;
- Registrar os resultados dos ciclos.

### Participantes

Os **9 participantes** serão responsáveis por:

- Executar os testes definidos;
- Utilizar a aplicação em seus próprios computadores;
- Identificar possíveis problemas;
- Registrar os bugs encontrados;
- Informar evidências dos problemas;
- Realizar os retestes quando solicitado.

### Equipe de Desenvolvimento

Será responsável por:

- Analisar os bugs registrados;
- Corrigir os problemas identificados;
- Disponibilizar novas versões da aplicação;
- Informar quando as correções estiverem disponíveis para reteste.

### Avaliador

**Professor André Ribeiro**

Responsável pela avaliação da atividade e do documento apresentado.

---

## 8. Cronograma Básico

Os testes serão realizados continuamente durante o desenvolvimento, organizados em ciclos de uma semana.

| Período | Atividade |
|---|---|
| **Dia 1** | Preparação e definição das funcionalidades a serem testadas |
| **Dias 2 a 4** | Execução dos testes pelos participantes |
| **Dia 5** | Registro, análise e priorização dos bugs |
| **Após o ciclo** | Correção dos bugs pela equipe de desenvolvimento |
| **Próximo ciclo** | Reteste das correções e testes de novas funcionalidades |

O cronograma poderá ser adaptado de acordo com o prazo de entrega e com o andamento do desenvolvimento.

---

## 9. Riscos e Contingências

Durante a execução dos testes, alguns problemas podem afetar o andamento do plano.

| Risco | Impacto | Contingência |
|---|---|---|
| Ambiente de testes indisponível | Alto | Aguardar a normalização ou utilizar uma versão alternativa disponível |
| Participante indisponível | Médio | Redistribuir os testes entre os demais participantes |
| Bug impede a utilização de uma funcionalidade | Alto | Registrar o problema e priorizar sua correção |
| Pouco tempo para execução dos testes | Alto | Priorizar as funcionalidades mais importantes do MVP |
| Problemas diferentes em computadores/navegadores | Médio | Registrar o ambiente utilizado e reproduzir o problema em outro computador |
| Novas funcionalidades atrasarem o cronograma | Médio | Testar primeiro as funcionalidades já disponíveis e priorizadas |

---

## 10. Processo de Execução

O processo de testes seguirá o seguinte fluxo:

**1. Preparação**

Definir as funcionalidades que serão avaliadas durante o ciclo.

**2. Execução**

Os participantes realizam os testes utilizando seus próprios computadores.

**3. Registro**

Os problemas encontrados são registrados como bugs.

**4. Análise**

Caio Alves analisa e prioriza os problemas encontrados.

**5. Correção**

A equipe de desenvolvimento realiza as correções necessárias.

**6. Reteste**

Os problemas corrigidos são testados novamente.

**7. Novo ciclo**

Um novo ciclo de uma semana é iniciado, contemplando novas funcionalidades e os problemas corrigidos.

---

## 11. Resultado Esperado

Ao final de cada ciclo, espera-se:

- Validar as principais funcionalidades do MVP;
- Identificar os principais bugs;
- Registrar os problemas encontrados;
- Priorizar os problemas mais importantes;
- Validar as correções realizadas;
- Garantir a evolução contínua da qualidade da aplicação.

---

## 12. Resumo do Plano

| Item | Definição |
|---|---|
| **Projeto** | Plataforma de clínica de psicologia |
| **Situação** | MVP em desenvolvimento |
| **Responsável pelos testes** | Caio Alves |
| **Avaliador** | Professor André Ribeiro |
| **Equipe de testes** | 9 pessoas |
| **Ambiente** | Ambiente de testes disponível |
| **Equipamentos** | Computador próprio dos participantes |
| **Ciclo de testes** | 1 semana |
| **Execução** | Contínua durante o desenvolvimento |
| **Principais testes** | Funcionais, usabilidade, validação e regressão |
| **Registro de bugs** | Durante cada ciclo |
| **Reteste** | Após a correção dos bugs |
| **Encerramento** | Ao concluir os testes planejados para cada ciclo |

---

## 13. Conclusão

O plano de testes foi elaborado para ser simples, executável e adequado às condições atuais do projeto.

Considerando que a aplicação está em fase de MVP, possui funcionalidades principais definidas, prazo de entrega estabelecido, equipe reduzida e ambiente de testes disponível, os testes serão realizados de forma contínua em ciclos semanais.

O responsável pela organização e acompanhamento dos testes será **Caio Alves**, contando com a participação de **9 pessoas**. Os problemas encontrados serão registrados, priorizados, corrigidos e posteriormente submetidos a novos testes.

Dessa forma, o plano permite acompanhar a qualidade da aplicação durante seu desenvolvimento, reduzindo riscos e aumentando a confiabilidade do produto final.