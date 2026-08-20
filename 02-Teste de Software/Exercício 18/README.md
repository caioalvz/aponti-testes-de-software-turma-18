# Análise de Riscos com Heurísticas de Testes

**Projeto:** Plataforma de Clínica de Psicologia  
**Funcionalidade analisada:** Agendamento de Consultas  
**Responsável pelos testes:** Caio Alves  
**Avaliador:** Professor André Ribeiro  
**Situação do projeto:** MVP em desenvolvimento

---

## 1. Objetivo

O objetivo desta atividade é aplicar heurísticas de testes à funcionalidade de **Agendamento de Consultas** da plataforma de clínica de psicologia.

A análise busca identificar possíveis falhas, riscos e áreas que precisam de maior atenção durante os testes.

Para isso, foram escolhidas duas heurísticas de testes e uma heurística de usabilidade de **Nielsen**.

---

## 2. Heurísticas Escolhidas

Foram escolhidas as seguintes abordagens:

### 2.1 Heurística: Teste de Valores Limite

A heurística de **Valores Limite** consiste em testar valores próximos dos limites aceitos pelo sistema.

No agendamento de consultas, essa abordagem é importante para verificar situações relacionadas a:

- Horários;
- Datas;
- Campos obrigatórios;
- Limites de entrada;
- Conflitos de horários.

### 2.2 Heurística: Teste de Regressão

A heurística de **Regressão** busca verificar se alterações ou correções realizadas no sistema não causaram problemas em funcionalidades que anteriormente estavam funcionando.

Essa abordagem é importante porque o projeto está em desenvolvimento contínuo e os bugs encontrados em um ciclo serão corrigidos antes do próximo.

### 2.3 Heurística de Nielsen: Prevenção de Erros

A heurística de Nielsen escolhida foi **Prevenção de Erros**.

Ela verifica se o sistema consegue evitar que o usuário cometa erros ou realiza ações inválidas.

No agendamento de consultas, o sistema deve impedir, por exemplo, que o usuário agende uma consulta em um horário que já esteja ocupado.

---

# 3. Aplicação das Heurísticas

## 3.1 Funcionalidade: Agendamento de Consultas

### Comportamento esperado

Um usuário autorizado deve conseguir selecionar um paciente, um psicólogo, uma data e um horário disponível e realizar o agendamento corretamente.

Quando houver informações inválidas ou conflitos, o sistema deve impedir o agendamento e apresentar uma mensagem adequada.

---

## 4. Aplicação da Heurística de Valores Limite

### Cenários analisados

| Situação | Resultado esperado |
|---|---|
| Agendar no primeiro horário disponível | Agendamento realizado |
| Agendar no último horário disponível | Agendamento realizado |
| Agendar em horário anterior ao permitido | Agendamento impedido |
| Agendar em horário posterior ao permitido | Agendamento impedido |
| Não informar horário | Sistema deve solicitar o preenchimento |
| Selecionar uma data válida | Data aceita |
| Selecionar uma data não permitida | Sistema deve impedir o agendamento |

### Falhas que podem ser encontradas

- Sistema permitindo agendamento fora do horário de funcionamento;
- Sistema aceitando horários inválidos;
- Sistema permitindo agendamento sem selecionar horário;
- Sistema aceitando datas que não deveriam estar disponíveis;
- Sistema apresentando informações incorretas sobre a disponibilidade.

### Riscos identificados

- Agendamentos fora do horário de atendimento;
- Conflitos de agenda;
- Dados inconsistentes;
- Falhas na validação de datas e horários.

### Área que merece mais atenção

A **validação de datas e horários** merece atenção especial, pois erros nessa área podem afetar diretamente a agenda da clínica.

---

# 5. Aplicação da Heurística de Regressão

Como a aplicação está em desenvolvimento e os testes serão realizados em ciclos semanais, cada correção poderá gerar impactos em outras funcionalidades.

### Cenários analisados

Após corrigir um problema relacionado ao agendamento, deverão ser novamente testadas:

- Criação de uma nova consulta;
- Alteração de uma consulta;
- Cancelamento de uma consulta;
- Visualização da agenda;
- Visualização dos dados do paciente;
- Verificação de conflitos de horários.

### Falhas que podem ser encontradas

- Correção do agendamento afetando a visualização da agenda;
- Consulta cancelada continuando disponível;
- Alteração de horário não sendo refletida na agenda;
- Paciente ou psicólogo não aparecendo corretamente;
- Consulta duplicada após uma alteração.

### Riscos identificados

- Correções introduzirem novos bugs;
- Informações ficarem inconsistentes entre telas;
- Funcionalidades que dependem do agendamento deixarem de funcionar;
- Perda ou duplicação de informações.

### Áreas que merecem mais atenção

A **integração entre agendamento, agenda, pacientes e psicólogos** merece maior atenção.

Sempre que houver uma alteração no funcionamento do agendamento, essas funcionalidades deverão ser testadas novamente.

---

# 6. Aplicação da Heurística de Nielsen — Prevenção de Erros

A aplicação deve auxiliar o usuário a evitar ações incorretas.

### Cenários analisados

- Tentar agendar em horário ocupado;
- Tentar agendar sem selecionar um paciente;
- Tentar agendar sem selecionar um psicólogo;
- Tentar agendar sem selecionar data;
- Tentar agendar sem selecionar horário;
- Tentar confirmar um agendamento com dados inválidos.

### Falhas que podem ser encontradas

- Sistema permitindo agendamento em horário ocupado;
- Sistema permitindo cadastro incompleto;
- Falta de mensagens de erro;
- Mensagens pouco claras;
- Sistema não destacando os campos obrigatórios;
- Usuário conseguindo confirmar uma operação inválida.

### Riscos identificados

- Agendamentos duplicados;
- Erros causados pelo usuário;
- Informações incompletas;
- Confusão durante o uso da plataforma;
- Comprometimento da organização da agenda.

### Área que merece mais atenção

A **validação dos dados antes da confirmação do agendamento** merece atenção especial.

O sistema deve verificar todas as informações antes de registrar a consulta e informar claramente o usuário caso exista algum problema.

---

# 7. Resumo dos Riscos

| Heurística | Falha/Risco | Área de atenção |
|---|---|---|
| Valores Limite | Datas ou horários inválidos sendo aceitos | Validação de datas e horários |
| Valores Limite | Agendamento fora do horário permitido | Regras de funcionamento |
| Regressão | Correções causando novos problemas | Agendamento e agenda |
| Regressão | Alterações não refletidas em outras telas | Integração entre funcionalidades |
| Nielsen — Prevenção de Erros | Agendamento em horário ocupado | Validação de disponibilidade |
| Nielsen — Prevenção de Erros | Cadastro incompleto | Formulários e mensagens |

---

# 8. Áreas que Merecem Mais Atenção

Com base na aplicação das heurísticas, as seguintes áreas devem receber maior atenção nos testes:

### 1. Datas e horários

É necessário garantir que o sistema aceite apenas datas e horários válidos para atendimento.

### 2. Disponibilidade da agenda

O sistema deve impedir conflitos e evitar que duas consultas sejam marcadas para o mesmo horário.

### 3. Validação dos formulários

Todos os campos obrigatórios devem ser corretamente validados antes da confirmação.

### 4. Integração entre funcionalidades

Alterações no agendamento devem ser refletidas corretamente na agenda e nas informações relacionadas ao paciente e ao psicólogo.

### 5. Mensagens para o usuário

As mensagens de erro e confirmação devem ser claras e indicar ao usuário como resolver o problema.

---

# 9. Justificativa das Escolhas

As heurísticas de **Valores Limite** e **Regressão** foram escolhidas porque estão diretamente relacionadas ao funcionamento atual do projeto.

A heurística de Valores Limite é importante para o agendamento porque existem regras relacionadas a datas, horários e disponibilidade. Esses valores podem gerar erros caso não sejam devidamente validados.

A heurística de Regressão foi escolhida porque o projeto está em fase de MVP e seguirá um processo de testes contínuos em ciclos de uma semana. Os bugs encontrados serão corrigidos e a aplicação será testada novamente. Portanto, existe o risco de uma correção afetar funcionalidades que já estavam funcionando.

A heurística de Nielsen de **Prevenção de Erros** foi escolhida porque o sistema deve evitar que o usuário realize ações inválidas, principalmente em uma funcionalidade importante como o agendamento.

---

# 10. Conclusão

A aplicação das heurísticas permitiu identificar riscos importantes na funcionalidade de **Agendamento de Consultas**.

Os principais pontos de atenção são:

- Validação de datas e horários;
- Conflitos de agenda;
- Campos obrigatórios;
- Prevenção de ações inválidas;
- Impactos causados por correções;
- Integração entre as funcionalidades;
- Clareza das mensagens apresentadas ao usuário.

Como o projeto está em desenvolvimento e os testes são realizados continuamente em ciclos semanais, essas áreas deverão ser verificadas regularmente.

A combinação das heurísticas de **Valores Limite**, **Regressão** e **Prevenção de Erros de Nielsen** permite analisar tanto problemas relacionados às regras do sistema quanto problemas que podem afetar a experiência do usuário.