# Atividade Avaliativa - Análise de Teste de Performance

# Observação Importante

> **Este documento utiliza um relatório de teste de performance totalmente fictício, criado exclusivamente para fins didáticos, uma vez que nenhum relatório real foi disponibilizado na atividade. Todos os números, métricas, cenários e resultados apresentados abaixo foram inventados apenas para simular um ambiente real de análise de performance.**

---

# Sistema Avaliado

## Descrição

Sistema bancário web que possui as seguintes funcionalidades:

- Login do usuário
- Autenticação na plataforma
- Consulta de saldo bancário

---

# Escopo do Teste

Foram consideradas as principais operações do sistema:

| Funcionalidade | Objetivo |
|---------------|----------|
| Login | Permitir acesso ao sistema |
| Autenticação | Validar credenciais do usuário |
| Consulta de saldo | Exibir o saldo disponível |

---

# Relatório de Performance (Fictício)

## Cenário Executado

- Usuários Virtuais (VUs): **500**
- Duração do teste: **20 minutos**
- Crescimento gradual de usuários: **50 usuários por minuto**
- Ambiente: Homologação
- Banco de Dados: PostgreSQL
- Servidor de Aplicação: Java Spring Boot

---

# Resultados Obtidos

| Métrica | Resultado |
|----------|-----------|
| Usuários simultâneos | 500 |
| Tempo médio de Login | 1,8 segundos |
| Tempo médio de Consulta de Saldo | 4,7 segundos |
| Tempo máximo de resposta | 9,4 segundos |
| Requisições por segundo | 165 req/s |
| Erros HTTP 500 | 2,4% |
| Timeouts | 1,1% |
| Uso médio da CPU | 91% |
| Uso médio da Memória | 84% |
| Banco de Dados (CPU) | 95% |
| Banco de Dados (Conexões) | 98% utilizadas |

---

# Critérios de Aprovação

Para este exercício, serão considerados os seguintes critérios:

| Métrica | Valor Aceitável |
|----------|-----------------|
| Tempo médio de resposta | até 2 segundos |
| Taxa de erro | menor que 1% |
| Uso de CPU | menor que 80% |
| Uso de memória | menor que 85% |

---

# Análise dos Resultados

## Tempo de Resposta

### Login

- Tempo médio: **1,8 segundos**
- Situação: ✅ Dentro do esperado.

### Consulta de Saldo

- Tempo médio: **4,7 segundos**
- Situação: ❌ Acima do limite aceitável.

---

## Taxa de Erros

Foram observados:

- 2,4% de erros HTTP 500
- 1,1% de timeouts

Esses valores ultrapassam o limite definido de 1%.

---

## Consumo de Recursos

### Servidor

CPU:

- Média de 91%

Memória:

- Média de 84%

A CPU permanece constantemente acima do limite recomendado.

---

### Banco de Dados

Foi observado:

- CPU em 95%
- 98% das conexões ocupadas

Esses indicadores sugerem forte sobrecarga no banco de dados.

---

# Possíveis Causas Observadas

Durante a análise do cenário, alguns possíveis gargalos foram identificados.

## Banco de Dados

Possíveis problemas:

- Consultas SQL lentas
- Falta de índices
- Grande número de conexões simultâneas

---

## Aplicação

Possíveis problemas:

- Processamento excessivo na consulta de saldo
- Baixo reaproveitamento de cache
- Alto consumo de CPU

---

## Infraestrutura

Possíveis problemas:

- Servidor com poucos recursos computacionais
- Escalabilidade limitada
- Balanceamento de carga inexistente ou insuficiente

---

# Respostas da Atividade

---

## 1. O sistema pode ser considerado aprovado?

**Resposta:**

Não.

Apesar do login apresentar um tempo de resposta aceitável, a funcionalidade de consulta de saldo apresentou tempo médio muito acima do esperado.

Além disso:

- houve taxa de erros superior ao limite definido;
- ocorreram timeouts;
- CPU do servidor permaneceu elevada;
- o banco de dados apresentou utilização próxima do limite máximo.

Esses fatores indicam que o sistema ainda necessita de melhorias antes de ser considerado aprovado.

---

## 2. Quais métricas indicam problemas de performance?

As principais métricas que demonstram problemas são:

- Tempo médio da consulta de saldo: **4,7 segundos**
- Tempo máximo de resposta: **9,4 segundos**
- Erros HTTP 500: **2,4%**
- Timeouts: **1,1%**
- CPU da aplicação: **91%**
- CPU do banco: **95%**
- Conexões do banco: **98% ocupadas**

Esses indicadores mostram degradação de desempenho durante o teste.

---

## 3. Quais possíveis gargalos podem existir?

Os principais gargalos identificados são:

### Banco de Dados

- Consultas SQL ineficientes;
- Falta de índices;
- Grande quantidade de conexões simultâneas.

### Aplicação

- Processamento excessivo da funcionalidade de consulta de saldo;
- Ausência de mecanismos de cache;
- Alto consumo de CPU.

### Infraestrutura

- Recursos computacionais insuficientes;
- Escalabilidade limitada;
- Possível necessidade de balanceamento de carga.

---

## 4. Esse cenário se aproxima mais de Carga, Stress ou Capacidade?

Este cenário se aproxima de um **Teste de Carga (Load Test).**

### Justificativa

O objetivo foi avaliar o comportamento do sistema com uma quantidade prevista de usuários simultâneos (500 usuários), simulando uma utilização normal do ambiente.

Não houve intenção de ultrapassar os limites máximos do sistema para provocar falhas extremas, característica típica de um teste de Stress.

Também não foi realizado um aumento progressivo até descobrir a capacidade máxima suportada, característica de um teste de Capacidade.

Portanto, o cenário representa melhor um **Teste de Carga**.

---

## 5. O que você recomendaria ao time técnico?

As principais recomendações seriam:

- Otimizar as consultas SQL utilizadas na consulta de saldo;
- Revisar índices do banco de dados;
- Implementar mecanismos de cache para informações frequentemente consultadas;
- Avaliar aumento do pool de conexões do banco;
- Monitorar continuamente CPU e memória durante novos testes;
- Revisar o consumo de recursos da aplicação;
- Avaliar escalabilidade horizontal da aplicação;
- Executar novos testes após cada otimização para validar as melhorias.

---

# Conclusão

Com base no relatório fictício apresentado, conclui-se que o sistema ainda **não atende aos critérios mínimos de desempenho definidos para este exercício**.

Embora o processo de login apresente desempenho satisfatório, a funcionalidade de consulta de saldo demonstra degradação significativa quando submetida a uma carga de 500 usuários simultâneos.

Os principais problemas observados estão relacionados ao alto tempo de resposta, aumento da taxa de erros e elevada utilização dos recursos do servidor e do banco de dados.

Dessa forma, recomenda-se que a equipe técnica realize otimizações na aplicação, no banco de dados e na infraestrutura antes da liberação do sistema para produção.

---

# Resumo Executivo

| Questão | Resposta |
|----------|----------|
| Sistema aprovado? | ❌ Não |
| Problemas encontrados | Tempo de resposta elevado, erros HTTP 500, timeouts, CPU alta e banco sobrecarregado |
| Possíveis gargalos | Banco de dados, consultas SQL, processamento da aplicação e infraestrutura |
| Tipo de teste | Teste de Carga (Load Test) |
| Recomendações | Otimização de SQL, cache, revisão da infraestrutura, monitoramento e novos testes |

---

# Referências

- ISTQB® Foundation Level Syllabus
- Conceitos de Teste de Performance
- Boas práticas de Engenharia de Software

---

> **Nota:** Todo o relatório de performance utilizado nesta atividade foi criado com dados fictícios exclusivamente para fins acadêmicos e de aprendizado, não representando resultados obtidos em um sistema real.