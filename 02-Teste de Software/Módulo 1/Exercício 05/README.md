# Atividade Avaliativa: Checklist de Testes Não Funcionais

## Sistema: Plataforma de Agendamento de Consultas (PACO)

| Categoria | Item do Checklist | O que será verificado | Risco caso não seja atendido |
|-----------|-------------------|-----------------------|------------------------------|
| **Performance** | Tempo de resposta | Verificar se as telas de login, pesquisa de médicos e agendamento carregam rapidamente. | O usuário pode abandonar o sistema devido à demora. |
| **Performance** | Acesso simultâneo | Verificar se vários usuários conseguem acessar e agendar consultas ao mesmo tempo sem falhas. | Lentidão, travamentos ou indisponibilidade do sistema. |
| **Performance** | Pesquisa de profissionais | Verificar se a busca por especialidades e médicos retorna os resultados rapidamente. | O usuário pode não conseguir encontrar um profissional em tempo hábil. |
| **Segurança** | Controle de acesso | Verificar se apenas usuários autenticados conseguem realizar agendamentos. | Pessoas não autorizadas podem acessar funcionalidades restritas. |
| **Segurança** | Proteção de dados | Verificar se informações pessoais dos usuários ficam protegidas durante o uso do sistema. | Exposição de dados pessoais e perda de privacidade. |
| **Segurança** | Encerramento de sessão | Verificar se o sistema encerra a sessão após um período de inatividade. | Outra pessoa pode utilizar a conta do usuário indevidamente. |
| **Usabilidade** | Facilidade de navegação | Verificar se o usuário consegue localizar facilmente as opções de agendar, cancelar e visualizar consultas. | Dificuldade de uso e aumento de erros durante a navegação. |
| **Usabilidade** | Mensagens do sistema | Verificar se mensagens de confirmação, aviso e erro são claras e fáceis de entender. | O usuário pode não compreender o que aconteceu ou como resolver um problema. |
| **Usabilidade** | Formulários | Verificar se os campos de cadastro e agendamento são simples de preencher e possuem validações básicas. | O usuário pode preencher informações incorretas ou desistir da operação. |
| **Compatibilidade** | Navegadores | Verificar se o sistema funciona corretamente nos navegadores Chrome, Edge e Firefox. | Alguns usuários podem não conseguir utilizar o sistema. |
| **Compatibilidade** | Dispositivos | Verificar se o sistema pode ser utilizado em computadores, tablets e celulares. | O sistema pode apresentar falhas em determinados dispositivos. |
| **Compatibilidade** | Diferentes tamanhos de tela | Verificar se os elementos da interface permanecem organizados em diferentes resoluções. | Botões e informações podem ficar fora da tela ou difíceis de acessar. |

---

# Conclusão

O checklist apresentado avalia aspectos importantes da qualidade da Plataforma de Agendamento de Consultas (PACO). Os testes de **performance** verificam o desempenho do sistema; os de **segurança** garantem a proteção dos dados e o acesso correto às funcionalidades; os de **usabilidade** avaliam a facilidade de utilização; e os de **compatibilidade** verificam se o sistema funciona corretamente em diferentes navegadores e dispositivos.