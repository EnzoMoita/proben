Webhook Integration
Este projeto inclui uma funcionalidade de integração via webhook que permite que nosso sistema seja notificado sobre eventos em tempo real de outro sistema. Esses eventos podem incluir a criação, atualização e exclusão de atendimentos médicos.

Como Funciona
Recebendo Webhooks:
Nossa aplicação possui uma rota dedicada para receber webhooks. Essa rota está configurada para lidar com diferentes tipos de eventos.

Processamento de Eventos:
Quando um evento de webhook é recebido, nossa rota processa os dados e executa ações específicas com base no tipo de evento.

Criação de Evento (POST): Ao receber um evento de criação de atendimento, criamos um novo registro no banco de dados para representar esse evento.

Atualização de Evento (PATCH): Quando um evento de atualização de atendimento é recebido, atualizamos os dados do evento no banco de dados com as informações mais recentes.

Exclusão de Evento (DELETE): Ao receber um evento de exclusão de atendimento, excluímos o evento correspondente do banco de dados.

Uso
Para enviar um evento de webhook para nossa aplicação, siga as instruções da documentação do sistema de origem para a estrutura do payload. Certifique-se de incluir os campos corretos, como eventType, date, resource.appointment e resource.type.

# proben
