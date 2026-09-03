# Classificação de Execução dos Testes — Plataforma de Clínica de Psicologia

**Responsável pelos testes:** Caio Alves  
**Avaliador:** Professor André Ribeiro  
**Projeto:** Plataforma de Clínica de Psicologia  
**Situação:** MVP em desenvolvimento  
**Equipe de testes:** 9 pessoas  

---

## 1. Objetivo

O objetivo desta atividade é analisar os principais cenários de testes definidos para a plataforma de clínica de psicologia e determinar se a execução será mais adequada de forma **manual** ou **automatizada**.

A escolha considera fatores como:

- Custo de implementação;
- Frequência de execução;
- Necessidade de repetição;
- Estabilidade da funcionalidade;
- Complexidade do teste;
- Objetivo da validação.

Como o projeto ainda está na fase de **MVP**, a maior parte dos testes inicialmente será realizada de forma manual. Conforme as funcionalidades se tornarem mais estáveis e forem executadas frequentemente, alguns testes poderão ser automatizados.

---

## 2. Cenários de Teste

### 2.1 Login e Autenticação

**Tipo:** Automatizado

**Justificativa:**

O login é uma funcionalidade que será utilizada frequentemente e pode ser testada diversas vezes durante os ciclos de desenvolvimento. Por possuir entradas e resultados previsíveis, é um bom candidato para automação.

A automação poderá verificar, por exemplo:

- Login com usuário e senha corretos;
- Login com senha incorreta;
- Login com campos vazios;
- Bloqueio ou tratamento de credenciais inválidas.

A automação reduzirá o tempo gasto na repetição desses testes.

---

### 2.2 Cadastro de Pacientes

**Tipo:** Automatizado

**Justificativa:**

O cadastro possui regras e campos que podem ser validados de maneira repetitiva.

A automação poderá verificar:

- Cadastro com dados válidos;
- Campos obrigatórios;
- Formatos inválidos;
- Tentativa de cadastro com dados incompletos;
- Confirmação do cadastro.

Como esses testes podem ser repetidos diversas vezes, a automação tende a reduzir o esforço da equipe.

---

### 2.3 Cadastro de Psicólogos

**Tipo:** Automatizado

**Justificativa:**

Assim como o cadastro de pacientes, o cadastro de psicólogos possui regras previsíveis e pode ser executado repetidamente.

A automação poderá validar os campos e verificar se o sistema apresenta os comportamentos esperados para diferentes entradas.

---

### 2.4 Agendamento de Consultas

**Tipo:** Automatizado

**Justificativa:**

O agendamento é uma das principais funcionalidades da plataforma e possui regras que precisam ser verificadas frequentemente.

A automação poderá testar situações como:

- Agendamento válido;
- Campos obrigatórios;
- Datas inválidas;
- Horários inválidos;
- Confirmação do agendamento;
- Consulta aparecendo corretamente na agenda.

Por ser uma funcionalidade importante e que será testada em diferentes ciclos, a automação pode reduzir o esforço de repetição.

---

### 2.5 Alteração e Cancelamento de Consultas

**Tipo:** Automatizado

**Justificativa:**

São operações com comportamentos relativamente previsíveis e que podem ser repetidas em diferentes ciclos.

A automação poderá verificar se uma consulta pode ser alterada ou cancelada corretamente e se o sistema atualiza as informações após a operação.

---

### 2.6 Navegação e Usabilidade

**Tipo:** Manual

**Justificativa:**

Testes de usabilidade dependem da percepção do usuário e da experiência durante a utilização da plataforma.

Os participantes deverão avaliar aspectos como:

- Facilidade de navegação;
- Organização das informações;
- Clareza dos botões;
- Facilidade para encontrar funcionalidades;
- Compreensão das mensagens apresentadas.

Por depender da avaliação humana, esse cenário é mais adequado para execução manual.

---

### 2.7 Validação de Formulários

**Tipo:** Automatizado

**Justificativa:**

As validações dos formulários normalmente possuem regras bem definidas e podem ser testadas com diferentes entradas.

A automação será útil para verificar repetidamente:

- Campos obrigatórios;
- Formatos inválidos;
- Valores não permitidos;
- Mensagens de erro;
- Dados válidos.

Esse tipo de teste é adequado para automação devido à sua repetição e previsibilidade.

---

### 2.8 Mensagens de Erro e Confirmação

**Tipo:** Automatizado

**Justificativa:**

As mensagens esperadas para determinadas ações podem ser verificadas automaticamente.

Por exemplo, após inserir dados inválidos, o sistema deverá apresentar uma mensagem de erro específica.

A automação permite verificar essas mensagens rapidamente em diferentes ciclos.

---

### 2.9 Testes de Regressão

**Tipo:** Automatizado

**Justificativa:**

Os testes de regressão serão executados após correções de bugs ou implementação de novas funcionalidades.

Como esse tipo de teste precisa ser repetido frequentemente para garantir que alterações não quebrem funcionalidades existentes, a automação é uma opção adequada.

A criação de uma suíte automatizada permitirá executar diversos testes em menos tempo.

---

## 3. Resumo da Classificação

| Cenário | Execução | Justificativa |
|---|---|---|
| Login e autenticação | **Automatizado** | Alta repetição e regras previsíveis |
| Cadastro de pacientes | **Automatizado** | Validações que podem ser repetidas |
| Cadastro de psicólogos | **Automatizado** | Regras e campos previsíveis |
| Agendamento de consultas | **Automatizado** | Funcionalidade importante e frequentemente testada |
| Alteração e cancelamento de consultas | **Automatizado** | Operações previsíveis e repetitivas |
| Navegação e usabilidade | **Manual** | Depende da experiência e percepção do usuário |
| Validação de formulários | **Automatizado** | Muitas combinações de entradas e alta repetição |
| Mensagens de erro e confirmação | **Automatizado** | Resultados esperados podem ser verificados automaticamente |
| Testes de regressão | **Automatizado** | Execução frequente após alterações |

---

## 4. Estratégia de Execução

Como o projeto ainda está em fase de **MVP**, os testes não serão todos automatizados imediatamente.

Inicialmente, os testes serão realizados manualmente para validar as funcionalidades e verificar se elas estão estáveis. Após uma funcionalidade apresentar comportamento consistente, os testes mais repetitivos poderão ser automatizados.

A estratégia será:

**Implementar funcionalidade → Testar manualmente → Corrigir bugs → Validar estabilidade → Automatizar testes repetitivos → Executar automação nos próximos ciclos**

Os testes de usabilidade continuarão sendo realizados manualmente, pois dependem da interação e percepção dos participantes.

---

## 5. Considerações sobre Custo e Benefício

A automação possui um custo inicial maior, pois é necessário desenvolver e manter os scripts de teste.

Por isso, não é vantajoso automatizar imediatamente todos os cenários do MVP.

A automação será priorizada para testes que:

- São executados frequentemente;
- Possuem comportamento previsível;
- Precisam ser repetidos em vários ciclos;
- Possuem grande quantidade de dados ou combinações;
- Fazem parte dos testes de regressão.

Os testes manuais serão priorizados quando:

- A funcionalidade ainda estiver em desenvolvimento;
- O comportamento ainda estiver sofrendo alterações;
- For necessária avaliação visual ou de usabilidade;
- O teste depender da percepção humana.

---

## 6. Conclusão

A abordagem escolhida combina **testes manuais e automatizados**, de acordo com as características de cada cenário.

No projeto da plataforma de clínica de psicologia, os testes relacionados a regras, validações e funcionalidades repetitivas são bons candidatos à automação. Já os testes de usabilidade e experiência do usuário devem continuar sendo realizados manualmente.

Como a aplicação ainda está em MVP, a automação será introduzida gradualmente. Dessa forma, evita-se investir tempo na automação de funcionalidades que ainda podem sofrer grandes alterações.

A estratégia permite equilibrar **custo, repetição, estabilidade e objetivo dos testes**, mantendo os testes manuais para situações em que a avaliação humana é necessária e utilizando automação onde ela pode trazer maior ganho de tempo e confiabilidade.