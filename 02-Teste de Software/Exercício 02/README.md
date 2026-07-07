# Atividade Avaliativa - Importância dos Testes e Custo de Defeitos

Este documento contém apenas as respostas para as questões propostas em sala. O documento referência será upado no repositório em breve.

## Defeito 1 – Ficha de Anamnese

### Em que fase do ciclo o defeito poderia ter sido encontrado?

O defeito da ficha de Anamnese poderia ter sido identificado durante o desenvolvimento da funcionalidade que armazena os dados, por meio de um teste de unidade no campo de pesquisa. Testes de unidade geralmnte são executados pelo desenvolvedor. 

### Impactos do defeito para o usuário e para o negócio

Para o usuário, a impossibilidade de pesquisar pelo paciente o impede de prosseguir no fluxo de atendimento. Do ponto de vista de teste de software, o erro (no código) causa outro bug (na funcionalidade) relacionado à integração, que é quando uma funcionalidade precisa interagir com outra para entregar determinado resultado para o usuário, onde, neste caso, ocorreu uma falha.

### Existe alguma relação com o gráfico do custo de correção de bugs?

A identificação deste problema na ponta mais extrema (usuário final) impacta diretamente no custo necessário para a correção, visto que agora este problema precisará ser identificado no código, corrigido e novamente testado. Cada camada desta correção gera um custo sobressalente que não seria necessário caso identificado no momento correto. 

### Defeito 2 – Agenda de Consultas

### Em que fase do ciclo o defeito poderia ter sido encontrado?

O segundo defeito poderia facilmente ter sido identificado durante o desenvolvimento, novamente em testes unitários, mas supondo que o desenvolvedor apenas verificou se o agendamento foi realizado, sem verificar duplicidades, teria que ser identificado durante a fase de testes, por meio de um TC (Test case) adequado. 

### Impactos do defeito para o usuário e para o negócio

Como a realização de agendamentos no mesmo horário está permitida, haverá um gargalo no atendimento, irá gerar desconforto tanto nos usuários do sistema quanto nos pacientes da clínica, podendo resultar em, além da perda de confiabilidade, possíveis prejuízos financeiros.

### Existe alguma relação com o gráfico do custo de correção de bugs?

O custo desse tipo de poblema é muito superior ao exemplo anterior, de forma que além da necessidade tardia de manutenção, ainda pode impactar diretamente na receita da clínica por parte dos pacientes. 

### Defeito 3 – Cadastro do Psicólogo

### Em que fase do ciclo o defeito poderia ter sido encontrado?

O segundo defeito poderia facilmente ter sido identificado durante o desenvolvimento, novamente em testes unitários, mas supondo que o desenvolvedor apenas verificou se o agendamento foi realizado, sem verificar duplicidades, teria que ser identificado durante a fase de testes, por meio de um TC (Test case) adequado. 

### Impactos do defeito para o usuário e para o negócio

Como a realização de agendamentos no mesmo horário está permitida, haverá um gargalo no atendimento, irá gerar desconforto tanto nos usuários do sistema quanto nos pacientes da clínica, podendo resultar em, além da perda de confiabilidade, possíveis prejuízos financeiros.

### Existe alguma relação com o gráfico do custo de correção de bugs?

O custo desse tipo de poblema é muito superior ao exemplo anterior, de forma que além da necessidade tardia de manutenção ser alvo de custo elevado, ainda pode impactar diretamente na receita da clínica por parte dos pacientes.

## Defeito 4 – Controle Financeiro

### Em que fase do ciclo o defeito poderia ter sido encontrado?

O defeito do controle financeiro poderia ter sido identificado na fase de desenvolvimento por meio de testes de unidade que validassem as regras de entrada de dados no campo de recebimento. Caso passasse pelo desenvolvedor, deveria ser pego na fase de testes funcionais ao aplicar técnicas de análise de valor limite no campo de entrada.

### Impactos do defeito para o usuário e para o negócio

Para o usuário operacional, gera retrabalho imediato para estornar e corrigir os lançamentos. Para o negócio, o impacto é crítico, pois causa furos no fluxo de caixa e inconsistência em relatórios de faturamento, podendo modificar o saldo real e prejudicar diretamente a contabilidade da clínica.

### Existe alguma relação com o gráfico do custo de correção de bugs?

Sim. Como o defeito chegou até o usuário final, o custo é elevado. Além do esforço técnico padrão de correção no código, há um custo operacional sobressalente para auditar o banco de dados e corrigir manualmente os saldos que ficaram incorretos devido aos lançamentos negativos anteriores.

## Defeito 5 – Controle de Estoque

### Em que fase do ciclo o defeito poderia ter sido encontrado?

Este defeito de regra de negócio poderia ter sido pego logo na fase de requisitos. No ciclo de desenvolvimento, seria identificado por meio de testes unitários ou em testes de integração, simulando cenários onde a quantidade de saída de materiais é propositalmente maior do que a quantidade disponível em estoque.

### Impactos do defeito para o usuário e para o negócio

Para o usuário, o sistema passa uma falsa impressão de que há insumos disponíveis, gerando gargalos no atendimento. Para o negócio, causa a interrupção de consultas e testes psicológicos devido à falta física de material, resultando em quebra de confiança por parte do paciente e desorganização no planejamento de compras.

### Existe alguma relação com o gráfico do custo de correção de bugs?

Sim. Identificar que o estoque ficou negativo em produção significa que o problema já impactou a ponta final. O custo de correção envolve não apenas alterar a lógica de decremento no código e testar novamente, mas também o custo de realizar um inventário físico emergencial para recalibrar o sistema.

## Defeito 6 – Exclusão de Paciente

### Em que fase do ciclo o defeito poderia ter sido encontrado?

Poderia ser identificado na fase de desenvolvimento ou em testes de banco de dados (testes de integração). Um caso de teste simples focado em cenários de exclusão de registros que possuem dependências teria detectado a ausência de chaves estrangeiras restritivas ou de um comportamento de exclusão em cascata.

### Impactos do defeito para o usuário e para o negócio

Para o usuário, gera uma agenda poluída com horários ocupados por consultas sem identificação, impossibilitando saber quem era o paciente associado. Para o negócio, causa inconsistência e corrupção de dados, o que fere regras de auditoria e o histórico clínico obrigatório, gerando dados inconsistentes.

### Existe alguma relação com o gráfico do custo de correção de bugs?

Sim, e neste caso a relação é severa. Corrigir falhas de integridade na ponta mais extrema exige que o desenvolvedor crie scripts complexos para tratar os registros órfãos que já foram corrompidos no banco de dados, elevando drasticamente o tempo, o risco e o custo da manutenção.

## Defeito 7 – Pesquisa de Pacientes

### Em que fase do ciclo o defeito poderia ter sido encontrado?

Poderia ter sido facilmente detectado na fase de desenvolvimento em testes funcionais simples na interface ou por meio de testes de unidade na query de busca do banco de dados, verificando se a pesquisa ignora letras maiúsculas e minúsculas.

### Impactos do defeito para o usuário e para o negócio

Para o usuário, o impacto é na usabilidade, gerando a falsa sensação de que o paciente não está cadastrado e levando à criação de cadastros duplicados por engano. Para o negócio, o impacto é menor por ser de prioridade baixa, mas causa um acúmulo de dados redundantes a longo prazo.

### Existe alguma relação com o gráfico do custo de correção de bugs?

Sim, embora o custo financeiro direto de um bug de usabilidade seja menor, corrigi-lo tardiamente ainda exige abrir o código da busca, alterar a query, testar e publicar a alteração. Cada camada dessa manutenção gera um custo que seria evitado se o desenvolvedor tivesse configurado a busca corretamente no início.

## Defeito 8 – Login

### Em que fase do ciclo o defeito poderia ter sido encontrado?

Deveria ter sido previsto logo na fase de arquitetura ou requisitos de segurança. No ciclo de validação, seria facilmente identificado na fase de testes por meio de testes não-funcionais de segurança, simulando tentativas consecutivas de acessos automatizados.

### Impactos do defeito para o usuário e para o negócio

Para os usuários, há uma vulnerabilidade crítica na privacidade de seus dados clínicos e pessoais. Para o negócio, o risco é urgente e altíssimo: a clínica fica totalmente exposta a ataques de força bruta, invasões e vazamento de informações confidenciais, podendo resultar em graves penalidades jurídicas.

### Existe alguma relação com o gráfico do custo de correção de bugs?

A relação aqui é exponencial. O custo técnico de implementar uma política de bloqueio de tentativas é padrão, mas o custo de não corrigir isso a tempo e sofrer uma invasão em produção pode ser devastador para a receita da clínica, além de destruir completamente a reputação do negócio no mercado.