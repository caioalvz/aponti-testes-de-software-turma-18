# Cenários BDD — Plataforma de Clínica de Psicologia

**Responsável pelos testes:** Caio Alves  
**Avaliador:** Professor André Ribeiro  
**Projeto:** Plataforma de Clínica de Psicologia  
**Situação:** MVP em desenvolvimento  

---

## 1. Objetivo

O objetivo desta atividade é transformar os principais requisitos funcionais da plataforma de clínica de psicologia em cenários de testes utilizando a abordagem **BDD (Behavior-Driven Development)**.

Os cenários serão descritos utilizando as estruturas:

- **Given (Dado):** representa o estado inicial do sistema;
- **When (Quando):** representa a ação realizada pelo usuário;
- **Then (Então):** representa o resultado esperado e observável.

Para cada cenário foram considerados os seguintes pontos:

- Quem é o ator?
- Qual é o estado inicial?
- Qual ação realmente importa?
- Qual é o resultado esperado?

---

# 2. Requisito: Login de Usuário

### Comportamento esperado

Um usuário cadastrado deve conseguir acessar a plataforma informando suas credenciais válidas.

### Cenário 1 — Login com dados válidos

**Ator:** Usuário cadastrado

```gherkin
Feature: Login de usuário

Scenario: Realizar login com credenciais válidas
  Given que o usuário possui uma conta cadastrada
  And está na tela de login
  When informa seu usuário e senha válidos
  And seleciona a opção de entrar
  Then o sistema deve permitir o acesso à plataforma