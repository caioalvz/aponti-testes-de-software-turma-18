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

  Scenario: Tentar agendar uma consulta em horário indisponível
    Given que o usuário está autenticado na plataforma
    And existe um paciente cadastrado
    And existe um psicólogo cadastrado
    And o horário escolhido já possui uma consulta agendada
    When o usuário seleciona o paciente, o psicólogo, a data e o horário ocupado
    And confirma o agendamento
    Then o sistema não deve registrar a nova consulta
    But deve informar que o horário selecionado está indisponível