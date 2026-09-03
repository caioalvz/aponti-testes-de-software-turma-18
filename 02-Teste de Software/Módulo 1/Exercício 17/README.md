# Comparação entre BDD e Teste Tradicional

**Projeto:** Plataforma de Clínica de Psicologia  
**Funcionalidade:** Agendamento de Consultas  
**Responsável pelos testes:** Caio Alves  
**Avaliador:** Professor André Ribeiro  
**Situação do projeto:** MVP em desenvolvimento

---

## 1. Objetivo

Esta atividade tem como objetivo comparar duas abordagens diferentes para testar o mesmo comportamento do sistema:

- BDD (Behavior-Driven Development);
- Teste Tradicional.

A funcionalidade escolhida para a comparação é o **agendamento de consultas**, uma das principais funcionalidades da plataforma de clínica de psicologia.

---

## 2. Cenário BDD

No BDD, o comportamento esperado é descrito utilizando uma linguagem próxima da linguagem de negócio e a estrutura `Given`, `When` e `Then`.

### Feature: Agendamento de Consultas

    # language: pt

    Feature: Agendamento de consultas
      Como um usuário autorizado da clínica
      Quero realizar o agendamento de consultas
      Para organizar os atendimentos dos pacientes

      Scenario: Realizar o agendamento de uma consulta com sucesso
        Given que o usuário está autenticado na plataforma
        And existe um paciente cadastrado
        And existe um psicólogo cadastrado
        And existe um horário disponível
        When o usuário seleciona o paciente, o psicólogo, a data e o horário
        And confirma o agendamento
        Then o sistema deve registrar a consulta
        And deve apresentar a consulta na agenda

### Estrutura do cenário

- **Given:** define o estado inicial do sistema;
- **When:** define a ação realizada pelo usuário;
- **Then:** define o resultado esperado.

---

## 3. Cenário de Teste Tradicional

No formato tradicional, o teste apresenta as pré-condições, os passos que devem ser executados e os resultados esperados.

### Caso de Teste: CT-001 — Agendamento de Consulta

**Objetivo:**  
Verificar se o usuário consegue realizar o agendamento de uma consulta com sucesso.

### Pré-condições

- O usuário deve estar autenticado na plataforma;
- Deve existir um paciente cadastrado;
- Deve existir um psicólogo cadastrado;
- Deve existir um horário disponível para agendamento.

### Passos do teste

| Nº | Ação | Resultado Esperado |
|---|---|---|
| 1 | Acessar a tela de agendamento | A tela de agendamento deve ser apresentada |
| 2 | Selecionar um paciente cadastrado | O paciente deve ser selecionado |
| 3 | Selecionar um psicólogo cadastrado | O psicólogo deve ser selecionado |
| 4 | Selecionar uma data disponível | A data deve ser selecionada |
| 5 | Selecionar um horário disponível | O horário deve ser selecionado |
| 6 | Confirmar o agendamento | O sistema deve registrar a consulta |
| 7 | Acessar a agenda | A consulta deve aparecer na agenda |

### Resultado esperado

Ao finalizar o teste, a consulta deve estar registrada corretamente e ser apresentada na agenda da plataforma.

---

## 4. Comparação das Abordagens

### 4.1 Qual formato é mais fácil de escrever?

Para este projeto, o **BDD é mais simples e objetivo** para descrever o comportamento esperado.

A estrutura `Given`, `When` e `Then` permite organizar o cenário de maneira clara, sem a necessidade de descrever muitos detalhes técnicos.

O formato tradicional também é simples, mas normalmente exige uma descrição mais detalhada dos passos de execução.

### 4.2 Qual comunica melhor o comportamento?

O **BDD comunica melhor o comportamento do sistema**.

Isso acontece porque o cenário descreve diretamente:

- O estado inicial;
- A ação realizada;
- O resultado esperado.

Além disso, o BDD utiliza uma linguagem próxima da linguagem de negócio, facilitando a compreensão por desenvolvedores, testadores e demais pessoas envolvidas no projeto.

### 4.3 Qual seria mais fácil de manter?

O **BDD tende a ser mais fácil de manter**, pois os cenários são focados no comportamento do sistema e não necessariamente nos detalhes da interface.

Por exemplo, se a posição de um botão mudar na tela, o cenário BDD provavelmente continuará válido. Já um teste tradicional que descreve detalhadamente a localização ou sequência de elementos da interface pode precisar ser atualizado.

---

## 5. Tabela Comparativa

| Critério | BDD | Teste Tradicional |
|---|---|---|
| Facilidade de escrita | Alta | Média/Alta |
| Comunicação do comportamento | Alta | Média |
| Linguagem de negócio | Alta | Média |
| Facilidade de manutenção | Alta | Média |
| Detalhamento dos passos | Médio | Alto |
| Facilidade para execução manual | Média | Alta |
| Foco no comportamento | Alto | Médio |

---

## 6. Vantagens do BDD

- Utiliza uma linguagem próxima do negócio;
- Facilita a comunicação entre os membros da equipe;
- Deixa claro o comportamento esperado;
- Permite utilizar os cenários como base para automação;
- Facilita a manutenção dos testes;
- Ajuda a identificar possíveis ambiguidades nos requisitos.

---

## 7. Vantagens do Teste Tradicional

- Apresenta os passos de execução de forma detalhada;
- É fácil de utilizar em testes manuais;
- Permite registrar o resultado esperado para cada etapa;
- É adequado quando é necessário seguir uma sequência específica de ações;
- Pode ser utilizado por pessoas com pouca experiência em BDD.

---

## 8. Conclusão

As duas abordagens podem ser utilizadas no projeto da plataforma de clínica de psicologia, porém possuem objetivos diferentes.

O **BDD é mais adequado para representar o comportamento esperado das funcionalidades**, pois apresenta os requisitos de forma clara e próxima da linguagem de negócio.

O **teste tradicional é mais adequado quando é necessário detalhar os passos de execução**, principalmente durante a realização de testes manuais.

Para este projeto, recomenda-se utilizar **BDD para descrever os comportamentos e requisitos** e **testes tradicionais quando for necessário detalhar os passos de execução manual**.

---

## 9. Respostas da Atividade

### Qual formato é mais fácil de escrever?

O **BDD**, por ser mais direto e possuir uma estrutura simples baseada em `Given`, `When` e `Then`.

### Qual comunica melhor o comportamento?

O **BDD**, pois deixa claro o estado inicial, a ação realizada e o resultado esperado.

### Qual seria mais fácil de manter?

O **BDD**, pois é focado no comportamento do sistema e sofre menos impacto quando detalhes da interface são alterados.

### Abordagem recomendada

Utilizar **BDD para especificar os comportamentos do sistema** e **testes tradicionais para documentar procedimentos detalhados de execução manual**.