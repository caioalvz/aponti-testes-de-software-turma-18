# Casos de Teste — Técnicas de Testes

**Projeto:** Plataforma de Clínica de Psicologia  
**Funcionalidade principal:** Agendamento de Consultas  
**Responsável pelos testes:** Caio Alves  
**Avaliador:** Professor André Ribeiro  
**Situação do projeto:** MVP em desenvolvimento

---

## 1. Objetivo

O objetivo desta atividade é aplicar técnicas de testes na plataforma de clínica de psicologia, utilizando a funcionalidade de **Agendamento de Consultas**.

Serão aplicadas as seguintes técnicas:

- 3 casos de **Valor Limite**;
- 3 casos de **Particionamento de Equivalência**;
- 3 possíveis **Estados e Transições**.

Todos os testes serão estruturados contendo:

- Entradas;
- Técnica utilizada;
- Resultado esperado.

---

# 2. Casos de Teste — Valor Limite

A técnica de **Valor Limite** será utilizada para testar valores próximos aos limites aceitos pelo sistema.

Neste projeto, serão considerados os limites relacionados aos horários disponíveis para agendamento.

---

## CT-VL-001 — Primeiro horário permitido

**Objetivo:** Verificar se o sistema permite o agendamento no primeiro horário disponível.

**Entradas:**

- Paciente: paciente cadastrado;
- Psicólogo: psicólogo cadastrado;
- Data: data válida;
- Horário: primeiro horário disponível para atendimento.

**Técnica utilizada:** Valor Limite — limite inferior.

**Resultado esperado:**

O sistema deve permitir o agendamento e registrar a consulta corretamente.

---

## CT-VL-002 — Último horário permitido

**Objetivo:** Verificar se o sistema permite o agendamento no último horário disponível.

**Entradas:**

- Paciente: paciente cadastrado;
- Psicólogo: psicólogo cadastrado;
- Data: data válida;
- Horário: último horário permitido para atendimento.

**Técnica utilizada:** Valor Limite — limite superior.

**Resultado esperado:**

O sistema deve permitir o agendamento e apresentar a consulta corretamente na agenda.

---

## CT-VL-003 — Horário fora do limite permitido

**Objetivo:** Verificar se o sistema impede o agendamento fora do horário de atendimento.

**Entradas:**

- Paciente: paciente cadastrado;
- Psicólogo: psicólogo cadastrado;
- Data: data válida;
- Horário: horário imediatamente posterior ao limite permitido.

**Técnica utilizada:** Valor Limite — valor fora do limite superior.

**Resultado esperado:**

O sistema deve impedir o agendamento e informar que o horário selecionado não está disponível para atendimento.

---

# 3. Casos de Teste — Particionamento de Equivalência

A técnica de **Particionamento de Equivalência** divide as possíveis entradas em grupos que devem apresentar comportamentos semelhantes.

Para o agendamento, serão consideradas entradas válidas e inválidas.

---

## CT-PE-001 — Dados válidos para agendamento

**Objetivo:** Verificar se o sistema permite um agendamento quando todas as informações são válidas.

**Entradas:**

- Paciente cadastrado;
- Psicólogo cadastrado;
- Data válida;
- Horário disponível;
- Todos os campos obrigatórios preenchidos.

**Técnica utilizada:** Particionamento de Equivalência — classe válida.

**Resultado esperado:**

O sistema deve registrar a consulta e apresentar o agendamento na agenda.

---

## CT-PE-002 — Dados obrigatórios incompletos

**Objetivo:** Verificar se o sistema impede o agendamento quando informações obrigatórias não são preenchidas.

**Entradas:**

- Paciente cadastrado;
- Psicólogo cadastrado;
- Data válida;
- Horário disponível;
- Campo obrigatório não preenchido.

**Técnica utilizada:** Particionamento de Equivalência — classe inválida.

**Resultado esperado:**

O sistema não deve registrar a consulta e deve informar qual informação obrigatória precisa ser preenchida.

---

## CT-PE-003 — Horário ocupado

**Objetivo:** Verificar o comportamento do sistema quando o usuário tenta realizar um agendamento em um horário já utilizado.

**Entradas:**

- Paciente cadastrado;
- Psicólogo cadastrado;
- Data válida;
- Horário que já possui uma consulta agendada.

**Técnica utilizada:** Particionamento de Equivalência — classe inválida.

**Resultado esperado:**

O sistema deve impedir o agendamento e informar que o horário escolhido está indisponível.

---

# 4. Estados e Transições

A funcionalidade de agendamento possui diferentes estados durante seu ciclo de vida.

Serão considerados três possíveis estados:

1. Consulta disponível;
2. Consulta agendada;
3. Consulta cancelada.

---

## ET-001 — Horário disponível para agendamento

**Estado inicial:** Horário disponível.

**Entrada/Ação:**

O usuário seleciona um paciente, um psicólogo, uma data e um horário disponível e confirma o agendamento.

**Técnica utilizada:** Teste de Estados e Transições.

**Resultado esperado:**

O sistema deve registrar a consulta e realizar a transição:

**Disponível → Agendada**

---

## ET-002 — Consulta agendada

**Estado inicial:** Consulta agendada.

**Entrada/Ação:**

O usuário solicita o cancelamento da consulta e confirma a operação.

**Técnica utilizada:** Teste de Estados e Transições.

**Resultado esperado:**

O sistema deve cancelar a consulta e realizar a transição:

**Agendada → Cancelada**

---

## ET-003 — Consulta cancelada

**Estado inicial:** Consulta cancelada.

**Entrada/Ação:**

O usuário tenta utilizar o mesmo registro cancelado como se estivesse ativo.

**Técnica utilizada:** Teste de Estados e Transições.

**Resultado esperado:**

O sistema não deve permitir que a consulta cancelada seja tratada como uma consulta ativa.

O sistema deve manter o estado:

**Cancelada → Cancelada**

---

# 5. Resumo dos Casos de Teste

| ID | Técnica | Cenário | Resultado Esperado |
|---|---|---|---|
| CT-VL-001 | Valor Limite | Primeiro horário permitido | Agendamento realizado |
| CT-VL-002 | Valor Limite | Último horário permitido | Agendamento realizado |
| CT-VL-003 | Valor Limite | Horário fora do limite | Agendamento impedido |
| CT-PE-001 | Particionamento de Equivalência | Dados válidos | Agendamento realizado |
| CT-PE-002 | Particionamento de Equivalência | Dados incompletos | Agendamento impedido |
| CT-PE-003 | Particionamento de Equivalência | Horário ocupado | Agendamento impedido |
| ET-001 | Estados e Transições | Disponível → Agendada | Consulta registrada |
| ET-002 | Estados e Transições | Agendada → Cancelada | Consulta cancelada |
| ET-003 | Estados e Transições | Consulta cancelada | Estado permanece cancelado |

---

# 6. Resumo das Técnicas Utilizadas

## Valor Limite

Utilizado para verificar o comportamento do sistema próximo aos limites de horários permitidos.

**Casos:** CT-VL-001, CT-VL-002 e CT-VL-003.

## Particionamento de Equivalência

Utilizado para dividir as entradas em classes válidas e inválidas, reduzindo a quantidade de testes necessários sem deixar de avaliar os principais comportamentos.

**Casos:** CT-PE-001, CT-PE-002 e CT-PE-003.

## Estados e Transições

Utilizado para verificar como uma consulta muda de estado de acordo com as ações realizadas pelo usuário.

**Estados principais:**

**Disponível → Agendada → Cancelada**

**Casos:** ET-001, ET-002 e ET-003.

---

# 7. Conclusão

As técnicas utilizadas permitem testar diferentes aspectos da funcionalidade de **Agendamento de Consultas**.

A técnica de **Valor Limite** ajuda a identificar problemas relacionados aos limites de horários. O **Particionamento de Equivalência** permite validar diferentes grupos de entradas, enquanto **Estados e Transições** verifica o comportamento da consulta durante seu ciclo de vida.

A combinação dessas técnicas proporciona uma cobertura maior dos principais riscos da funcionalidade e pode ser incorporada aos ciclos semanais de testes definidos anteriormente para o projeto.