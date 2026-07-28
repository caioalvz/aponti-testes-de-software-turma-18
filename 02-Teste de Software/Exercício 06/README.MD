# Desafio — Testes Funcionais e Não Funcionais: Clínica Psi

**Disciplina:** Fundamentos de Testes de Software
**Sistema analisado:** Clínica Psi — https://andrelbribeiro.github.io/clinica-psi/
**Autor:** Caio Alves

---

## Parte 1 — Testes Funcionais

### Exercício 1 — Identificação das funcionalidades

| Funcionalidade | Usuário | Entrada principal | Resultado esperado | Possível erro |
|---|---|---|---|---|
| Cadastro de paciente | Recepcionista | Nome, CPF, data de nascimento, telefone | Paciente salvo e listado na busca | CPF inválido ou duplicado aceito pelo sistema |
| Agendar consulta | Recepcionista | Paciente, psicólogo, data e horário | Consulta registrada e exibida na agenda do psicólogo | Permitir agendar horário já ocupado |
| Check-in do paciente | Recepcionista | Consulta agendada do dia | Status muda para "presente"/"em atendimento" | Permitir check-in de consulta em data futura |
| Registro de evolução/prontuário | Psicólogo | Texto da evolução, consulta associada | Evolução salva vinculada ao prontuário do paciente | Permitir salvar prontuário vazio |
| Lançamento de receita/despesa | Recepcionista/Financeiro | Valor, tipo (receita/despesa), descrição, data | Saldo atualizado no relatório financeiro | Aceitar valores negativos ou não numéricos |
| Controle de estoque de produtos | Recepcionista/Administrador | Produto, quantidade, tipo de movimentação (entrada/saída) | Quantidade em estoque atualizada corretamente | Permitir saída maior que o estoque disponível |

*(6 funcionalidades detalhadas — acima do mínimo de 5 pedido no enunciado, para ampliar a cobertura da análise.)*

---

### Exercício 2 — Testes unitários

| Função/regra | Entrada | Resultado esperado | Por que é unitário? |
|---|---|---|---|
| Validação de CPF | `123.456.789-00` (dígito verificador inválido) | Retorna "CPF inválido" | Testa isoladamente o algoritmo de validação, sem UI, banco ou API |
| Cálculo do saldo financeiro | Receitas: R$ 2.000; despesas: R$ 800 | R$ 1.200 | Verifica apenas a operação matemática, sem depender de tela ou persistência |
| Cálculo do valor total de uma compra | 3 unidades a R$ 15,00 cada | R$ 45,00 | Avalia isoladamente a fórmula de multiplicação/soma, sem integração externa |
| Identificação de estoque abaixo do mínimo | Estoque atual: 2; mínimo definido: 5 | Retorna `true` (alerta deve disparar) | Testa uma regra de comparação simples, independente de outros módulos |
| Validação de e-mail | `usuario@` (sem domínio) | Retorna "e-mail inválido" | Verifica apenas o formato da string, sem enviar e-mail de verdade |
| Cálculo da taxa de presença | 8 consultas agendadas, 6 com check-in | 75% | Testa a fórmula de divisão/porcentagem isoladamente |

**Justificativa geral:** o teste unitário avalia uma pequena unidade de código (uma função ou regra) de forma isolada, sem depender da interface, do banco de dados ou de serviços externos — o que permite executá-lo de forma rápida e repetida durante o desenvolvimento.

---

### Exercício 3 — Testes de integração

| Componentes integrados | Ação | Resultado esperado | Risco |
|---|---|---|---|
| Agendamento + agenda do psicólogo | Agendar consulta | Horário passa a constar como ocupado na agenda | Dois pacientes agendados no mesmo horário |
| Cadastro de paciente + banco de dados | Salvar novo paciente | Paciente persiste e aparece em consultas futuras | Dados perdidos ao recarregar a página |
| Check-in + controle de presença | Realizar check-in | Presença é registrada e refletida no histórico do paciente | Check-in registrado sem vínculo com a consulta correta |
| Consulta realizada + lançamento financeiro | Finalizar atendimento | Receita da consulta é lançada automaticamente no financeiro | Consulta concluída sem gerar lançamento (saldo incorreto) |
| Compra/saída de produto + estoque | Registrar saída de produto | Estoque é decrementado na quantidade correta | Saída não reflete no saldo do estoque |
| Login + controle de perfis e permissões | Autenticar usuário | Menu e telas exibidos conforme o perfil (recepcionista/psicólogo) | Usuário vê funcionalidades que não deveria acessar |
| Reagendamento + liberação do horário anterior | Reagendar consulta | Horário antigo é liberado e novo horário fica ocupado | Horário antigo permanece bloqueado indevidamente |

**Justificativa geral:** o objetivo do teste de integração é verificar a comunicação e a troca de dados entre dois ou mais componentes, garantindo que, juntos, produzam o resultado esperado — algo que o teste unitário não cobre.

---

### Exercício 4 — Testes de sistema

#### Cenário A — Atendimento completo
- **Pré-condições:** sistema com dados de exemplo carregados; nenhum paciente com o nome de teste cadastrado.
- **Dados utilizados:** Paciente "Maria Teste", CPF fictício, psicólogo "Dr. João", data/horário disponível.
- **Passos:**
  1. Cadastrar o paciente "Maria Teste".
  2. Localizar o paciente pela pesquisa.
  3. Agendar uma consulta com "Dr. João".
  4. Fazer o check-in no horário agendado.
  5. Registrar a evolução da sessão.
  6. Lançar a receita referente à consulta.
  7. Conferir o relatório financeiro.
- **Resultado esperado:** paciente cadastrado, consulta agendada, check-in confirmado, evolução salva, receita lançada e refletida no relatório.
- **Resultado obtido:** *(preencher após execução manual na aplicação)*
- **Situação:** Aprovado / Reprovado *(preencher após execução)*
- **Evidência:** *(print de tela de cada etapa)*
- **Justificativa da classificação:** é um teste de sistema porque percorre o fluxo completo do usuário final, do cadastro ao financeiro, passando por várias telas e módulos integrados.

#### Cenário B — Reagendamento
- **Pré-condições:** paciente e psicólogo já cadastrados; existe um agendamento ativo.
- **Dados utilizados:** consulta original em um horário X; novo horário Y disponível.
- **Passos:**
  1. Criar um agendamento no horário X.
  2. Reagendar a consulta para o horário Y.
  3. Verificar que o horário X foi liberado na agenda.
  4. Verificar que o horário Y aparece como ocupado.
  5. Conferir os dados exibidos na agenda (paciente, psicólogo, novo horário).
- **Resultado esperado:** agenda reflete corretamente a mudança, sem deixar o horário antigo bloqueado nem duplicar o agendamento.
- **Resultado obtido / Situação / Evidência:** *(preencher após execução)*
- **Justificativa:** teste de sistema, pois valida o fluxo completo de reagendamento pela interface, tocando agenda e regras de disponibilidade ao mesmo tempo.

#### Cenário C — Controle de estoque
- **Pré-condições:** módulo de produtos acessível; nenhum produto de teste cadastrado.
- **Dados utilizados:** produto "Caneta Teste", estoque mínimo definido como 5 unidades.
- **Passos:**
  1. Cadastrar o produto com estoque inicial de 10 unidades.
  2. Registrar uma entrada de 5 unidades (total: 15).
  3. Registrar uma saída de 12 unidades (total esperado: 3).
  4. Verificar a quantidade final exibida no sistema.
  5. Verificar se o alerta de estoque mínimo é exibido (3 < 5).
- **Resultado esperado:** quantidade final correta (3 unidades) e alerta de estoque baixo visível.
- **Resultado obtido / Situação / Evidência:** *(preencher após execução)*
- **Justificativa:** teste de sistema porque avalia o comportamento fim a fim do módulo de estoque, incluindo o disparo de alertas.

#### Cenário D — Controle de acesso
- **Pré-condições:** existem pelo menos dois perfis configurados: recepcionista e psicólogo.
- **Dados utilizados:** usuário de teste com perfil "recepcionista"; usuário de teste com perfil "psicólogo".
- **Passos:**
  1. Criar (ou usar) perfis com permissões diferentes.
  2. Entrar no sistema como recepcionista.
  3. Tentar acessar os prontuários dos pacientes.
  4. Sair e entrar como psicólogo.
  5. Verificar que o psicólogo consegue acessar os prontuários normalmente.
- **Resultado esperado:** recepcionista é bloqueada ou não vê a opção de prontuários; psicólogo acessa sem restrição.
- **Resultado obtido / Situação / Evidência:** *(preencher após execução)*
- **Justificativa:** teste de sistema que valida uma regra de negócio crítica (sigilo do prontuário) através da interface real, com dois perfis distintos.

---

### Exercício 5 — Testes de aceitação

1. **Dado que** o paciente e o psicólogo estejam cadastrados,
   **quando** a recepcionista selecionar uma data e horário disponíveis,
   **então** o sistema deve registrar a consulta e exibi-la na agenda do psicólogo.

2. **Dado que** já exista uma consulta agendada para um psicólogo em determinado horário,
   **quando** outra pessoa tentar agendar o mesmo psicólogo no mesmo horário,
   **então** o sistema deve impedir o agendamento e exibir uma mensagem de conflito.

3. **Dado que** um usuário esteja autenticado com perfil de recepcionista,
   **quando** ele tentar abrir o prontuário de um paciente,
   **então** o sistema deve negar o acesso, permitindo a consulta apenas a psicólogos autorizados.

4. **Dado que** uma receita ou despesa seja lançada no financeiro,
   **quando** o usuário acessar o relatório financeiro,
   **então** o saldo exibido deve estar atualizado com o novo lançamento.

5. **Dado que** o estoque de um produto atinja a quantidade mínima configurada,
   **quando** o usuário visualizar a tela de produtos,
   **então** o sistema deve exibir um alerta indicando estoque baixo.

6. **Dado que** um usuário saia do sistema e entre novamente,
   **quando** ele acessar os dados previamente cadastrados,
   **então** todas as informações (pacientes, agendamentos, financeiro, estoque) devem estar preservadas.

**Justificativa geral:** o teste de aceitação verifica se o sistema atende às necessidades reais do negócio (a clínica) e, por isso, é o tipo de teste normalmente aprovado pelo cliente ou pelo responsável pela área, e não apenas pela equipe técnica.

---

### Exercício 6 — Classificação dos testes

| # | Cenário | Classificação | Justificativa |
|---|---|---|---|
| 1 | Verificar se `receitas − despesas` retorna o saldo correto | **Unitário** | Testa uma única regra de cálculo, isolada de UI, API ou banco |
| 2 | Verificar se uma receita salva aparece no relatório financeiro | **Integração** | Envolve a comunicação entre o módulo de lançamentos e o módulo de relatórios |
| 3 | Executar todo o fluxo entre cadastro, atendimento e pagamento | **Sistema** | Percorre o sistema completo, do início ao fim, como o usuário faria |
| 4 | Confirmar com a direção da clínica se o relatório atende às necessidades administrativas | **Aceitação** | Avalia se o sistema atende a uma necessidade de negócio, validada pelo cliente |
| 5 | Verificar isoladamente a validação de CPF | **Unitário** | Testa uma função específica, sem depender de outras partes do sistema |
| 6 | Verificar se um reagendamento atualiza a agenda | **Integração** | Envolve a comunicação entre o módulo de agendamento e o módulo de agenda |
| 7 | Avaliar se apenas psicólogos podem visualizar prontuários | **Sistema** (com viés de segurança) | Valida uma regra de negócio completa através da interface, com login e permissões reais |
| 8 | Confirmar com a recepcionista se o processo de agendamento é adequado à rotina da clínica | **Aceitação** | Valida a usabilidade/adequação do processo do ponto de vista do usuário final do negócio |

---

## Parte 2 — Checklist de Testes Não Funcionais

### Performance

| Categoria | O que verificar | Como verificar | Critério esperado | Risco associado | Prioridade |
|---|---|---|---|---|---|
| Performance | Tempo para abrir a agenda | Medir com muitos agendamentos cadastrados | Abrir em até 2 segundos | Atraso no atendimento | Alta |
| Performance | Tempo de carregamento da página inicial | Medir o tempo do primeiro carregamento do sistema | Carregar em até 3 segundos | Má primeira impressão / abandono | Média |
| Performance | Velocidade da pesquisa de pacientes | Buscar paciente com uma base de 1.000+ registros | Resultado exibido em até 2 segundos | Demora na localização durante o atendimento | Alta |
| Performance | Tempo para salvar/excluir registros | Cadastrar e excluir paciente/produto e cronometrar | Confirmação em até 1-2 segundos | Sensação de travamento, retrabalho | Média |
| Performance | Comportamento com grande volume de dados (1.000+ registros) | Popular o sistema com muitos registros de exemplo | Sistema mantém desempenho estável, sem travar | Lentidão geral, travamento do navegador | Alta |

### Segurança

| Categoria | O que verificar | Como verificar | Critério esperado | Risco associado | Prioridade |
|---|---|---|---|---|---|
| Segurança | Acesso a prontuários sem autenticação | Tentar abrir a tela de prontuário sem estar logado | Sistema deve bloquear/redirecionar para login | Violação de sigilo e exposição de dados de saúde | Alta |
| Segurança | Restrição por perfil de usuário | Logar como recepcionista e tentar acessar telas de psicólogo | Acesso deve ser negado | Acesso indevido a informações sensíveis | Alta |
| Segurança | Exposição de dados no localStorage | Inspecionar o armazenamento local do navegador (DevTools) | Dados sensíveis não devem ficar expostos em texto puro | Acesso a dados por pessoas não autorizadas | Alta |
| Segurança | Entrada de HTML/JavaScript nos formulários | Inserir `<script>` ou tags HTML em campos de texto | Sistema deve tratar/escapar a entrada, sem executar o script | Execução de código malicioso no navegador (XSS) | Alta |
| Segurança | Encerramento e expiração da sessão | Deixar o sistema inativo e tentar continuar a navegação | Sessão deve expirar ou exigir novo login após período definido | Uso indevido de sessão aberta por terceiros | Média |

### Usabilidade

| Categoria | O que verificar | Como verificar | Critério esperado | Risco associado | Prioridade |
|---|---|---|---|---|---|
| Usabilidade | Clareza dos nomes dos menus | Navegar pelos menus sem instruções prévias | Usuário encontra a funcionalidade desejada sem ajuda externa | Dificuldade de aprendizado do sistema | Média |
| Usabilidade | Facilidade para cadastrar um paciente | Realizar um cadastro completo do início ao fim | Cadastro concluído em poucas etapas, sem confusão | Cadastro incorreto ou incompleto | Alta |
| Usabilidade | Mensagens de sucesso e erro | Provocar erros propositais (ex.: campo obrigatório vazio) | Mensagens claras, indicando o que fazer para corrigir | Frustração do usuário, dados inválidos salvos | Alta |
| Usabilidade | Confirmação antes de exclusões | Tentar excluir um paciente ou produto | Sistema deve pedir confirmação antes de excluir | Exclusão acidental de dados importantes | Alta |
| Usabilidade | Indicação clara de campos obrigatórios | Observar formulários de cadastro | Campos obrigatórios devem estar visualmente destacados | Envio de formulários incompletos | Média |

### Compatibilidade

| Categoria | O que verificar | Como verificar | Critério esperado | Risco associado | Prioridade |
|---|---|---|---|---|---|
| Compatibilidade | Funcionamento no Chrome, Firefox e Edge | Executar os mesmos fluxos nos três navegadores | Sistema funciona de forma equivalente nos três | Funções indisponíveis para parte dos usuários | Alta |
| Compatibilidade | Funcionamento em celular, tablet e computador | Acessar o sistema nos três tipos de dispositivo | Layout se adapta e todas as funções continuam acessíveis | Tabelas cortadas ou botões inacessíveis em dispositivos móveis | Alta |
| Compatibilidade | Resoluções de 360px, 768px e 1366px | Redimensionar a janela/usar modo responsivo do navegador | Conteúdo se reorganiza sem cortar informações | Perda de informação visual em telas menores | Média |
| Compatibilidade | Exibição correta de acentos e símbolos | Cadastrar nomes com acentuação e caracteres especiais (ex.: "José", "Ação") | Caracteres exibidos corretamente em todas as telas e relatórios | Caracteres ilegíveis, dados corrompidos visualmente | Média |
| Compatibilidade | Comportamento com JavaScript desativado | Desativar JS no navegador e tentar usar o sistema | Sistema deve informar a limitação de forma clara (já que é uma SPA) | Tela em branco sem explicação, confusão do usuário | Baixa |