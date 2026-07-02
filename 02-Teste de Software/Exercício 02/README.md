#

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