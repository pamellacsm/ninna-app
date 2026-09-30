# Especificação Técnica Completa - NINNA

## 1. Visão Geral do Projeto

**NINNA** é um aplicativo mobile (iOS e Android) para acompanhamento de rotina e desenvolvimento de bebês (0-3 anos).

### Objetivos Principais
- Reduzir carga mental de pais/cuidadores
- Registrar e organizar dados de rotina
- Acompanhar desenvolvimento
- Sincronizar entre dispositivos
- Oferecer funcionalidades Premium

### Públicos
- Mães
- Pais
- Avós
- Cuidadores
- Babás

---

## 2. Requisitos Funcionais

### 2.1 Autenticação
- [ ] Registro com email/senha
- [ ] Login
- [ ] Recuperação de senha
- [ ] Logout
- [ ] Permanecer conectado (Remember me)
- [ ] Autenticação social (Google, Apple)
- [ ] Biometria (fingerprint, face)

### 2.2 Perfil do Bebê
- [ ] Criar perfil
- [ ] Editar dados
- [ ] Múltiplos bebês na mesma conta
- [ ] Trocar entre perfis rapidamente
- [ ] Foto do bebê
- [ ] Cálculo automático de idade (dias, semanas, meses)
- [ ] Marcar como primogênito/gêmeos/etc

### 2.3 Tela Inicial (Hoje)
- [ ] Mostrar nome e idade do bebê
- [ ] Foto do bebê
- [ ] Cronômetros desde último evento:
  - Última mamada
  - Último sono
  - Último banho
  - Última troca de fralda
  - Último xixi
  - Último cocô
- [ ] Temperatura registrada
- [ ] Episódios de cólica (se Premium)
- [ ] Resumo do dia

### 2.4 Registros de Rotina

#### 2.4.1 Mamadeira/Alimentação
- [ ] Registrar mamada
- [ ] Registrar mamadeira
- [ ] Selecionar horário
- [ ] Registrar quantidade (ml)
- [ ] Tipo de alimentação
- [ ] Observações
- [ ] Cronômetro de mamada
- [ ] Editar registro
- [ ] Excluir registro
- [ ] Histórico

#### 2.4.2 Sono
- [ ] Iniciar sono (automático)
- [ ] Registrar sono manual
- [ ] Horário início/fim
- [ ] Cronômetro se ainda dormindo
- [ ] Duração calculada
- [ ] Histórico de sono
- [ ] Total de sono do dia
- [ ] Editar horário
- [ ] Excluir

#### 2.4.3 Banho
- [ ] Registrar banho
- [ ] Data/horário
- [ ] Duração
- [ ] Observações
- [ ] Cronômetro (opcional)
- [ ] Editar
- [ ] Excluir

#### 2.4.4 Fraldas
- [ ] Registrar xixi
- [ ] Registrar cocô
- [ ] Registrar troca
- [ ] Tipo (xixi/cocô/ambos/troca simples)
- [ ] Observações (consistência, cor, etc)
- [ ] Editar
- [ ] Excluir

#### 2.4.5 Temperatura
- [ ] Registrar temperatura
- [ ] Método de medição
- [ ] Data/horário
- [ ] Observações
- [ ] Histórico
- [ ] Editar
- [ ] Excluir

#### 2.4.6 Cólica (Premium)
- [ ] Registrar início
- [ ] Registrar fim
- [ ] Duração calculada
- [ ] Intensidade (leve/moderada/intensa)
- [ ] Observações
- [ ] Histórico
- [ ] Estatísticas por período
- [ ] Gráficos

### 2.5 Crescimento
- [ ] Registrar peso
- [ ] Registrar altura
- [ ] Data
- [ ] Observações
- [ ] Histórico
- [ ] Gráficos de evolução
- [ ] Editar
- [ ] Excluir

### 2.6 Desenvolvimento (1-36 meses)
- [ ] Linha mês a mês
- [ ] Destacar mês atual
- [ ] Marcos por categoria:
  - Comunicação
  - Linguagem
  - Interação
  - Movimento
  - Coordenação
  - Habilidades motoras
  - Interação social
  - Brincadeiras
  - Autonomia
  - Comportamento
- [ ] Atividades adequadas à idade
- [ ] Fases de desenvolvimento
- [ ] Permitir consultar meses anteriores/posteriores

### 2.7 Diário/Memórias
- [ ] Adicionar entrada
- [ ] Título
- [ ] Texto
- [ ] Foto
- [ ] Data
- [ ] Momentos especiais marcados
- [ ] Timeline visual
- [ ] Editar
- [ ] Excluir

### 2.8 Histórico
- [ ] Timeline unificada
- [ ] Filtros por tipo
- [ ] Filtros por data
- [ ] Visualizar detalhes
- [ ] Editar
- [ ] Excluir

### 2.9 Funcionalidades Premium

#### 2.9.1 Medicamentos
- [ ] Registrar medicamento
- [ ] Nome
- [ ] Dose prescrita
- [ ] Horário
- [ ] Frequência
- [ ] Data início/fim
- [ ] Observações
- [ ] Marcar como administrado
- [ ] Lembretes
- [ ] Histórico
- [ ] Editar
- [ ] Excluir

#### 2.9.2 Vacinas
- [ ] Carteira de vacinação
- [ ] Registrar vacina
- [ ] Dose
- [ ] Data
- [ ] Lote
- [ ] Local
- [ ] Observações
- [ ] Próxima dose
- [ ] Lembretes
- [ ] Baseado em calendário oficial

#### 2.9.3 Consultas
- [ ] Agendar consulta
- [ ] Profissional
- [ ] Especialidade
- [ ] Data/horário
- [ ] Local
- [ ] Observações
- [ ] Lembretes
- [ ] Perguntas para levar

#### 2.9.4 Relatório para Pediatra
- [ ] Gerar relatório
- [ ] Selecionar período
- [ ] Incluir alimentação
- [ ] Incluir sono
- [ ] Incluir fraldas
- [ ] Incluir temperatura
- [ ] Incluir cólicas
- [ ] Incluir crescimento
- [ ] Incluir medicamentos
- [ ] Incluir vacinas
- [ ] Compartilhar PDF
- [ ] Compartilhar via email

#### 2.9.5 NINNA Assistant
- [ ] Resumir rotina
- [ ] Encontrar padrões
- [ ] Preparar perguntas
- [ ] Sugerir informações
- [ ] Não diagnosticar
- [ ] Não prescrever

### 2.10 Compartilhamento Familiar
- [ ] Convidar cuidador
- [ ] Definir permissões
- [ ] Proprietário (acesso completo)
- [ ] Cuidador (registrar e visualizar)
- [ ] Visualização apenas
- [ ] Remover acesso
- [ ] Gerenciar cuidadores

### 2.11 Configurações
- [ ] Perfil do usuário
- [ ] Alterar email
- [ ] Alterar senha
- [ ] Modo noturno
- [ ] Notificações
- [ ] Lembretes
- [ ] Sobre
- [ ] Política de privacidade
- [ ] Termos de uso
- [ ] Suporte
- [ ] Logout

---

## 3. Requisitos Não-Funcionais

### 3.1 Performance
- App inicia em < 2 segundos
- Registros salvam em < 500ms
- Listas carregam em < 1 segundo
- Sincronização não bloqueia UI

### 3.2 Offline
- Toda funcionalidade principal funciona offline
- Sincronização automática quando voltar internet
- Sem perda de dados
- Banco local com SQLite/Realm

### 3.3 Segurança
- Autenticação JWT
- Criptografia de dados sensíveis
- Conformidade LGPD
- Validação de entrada
- Proteção contra XSS/CSRF

### 3.4 Usabilidade
- Uso com uma mão
- Botões grandes
- Navegação simples
- Registro rápido
- Modo noturno confortável

### 3.5 Compatibilidade
- Android 8.0+
- iOS 12.0+
- Orientações portrait/landscape
- Tablets

---

## 4. Arquitetura de Sistema

### 4.1 Camadas

```
┌─────────────────────────────┐
│    Interface (UI/UX)        │  React Native
├─────────────────────────────┤
│   Business Logic (State)    │  Redux
├─────────────────────────────┤
│    Services (API, Sync)     │  Axios, Realm
├─────────────────────────────┤
│   Local Database (Offline)  │  SQLite/Realm
├─────────────────────────────┤
│    Backend API              │  Node.js/Express
└─────────────────────────────┘
```

### 4.2 Banco de Dados Local

**Entidades principais:**
- Users
- Babies
- Records (mamada, sono, etc)
- Medicamentos
- Vacinas
- Consultas
- Diário
- SyncQueue

### 4.3 Sincronização Offline-First

```
1. Usuário registra evento
   ↓
2. Salva em banco local
   ↓
3. Adiciona à fila de sincronização
   ↓
4. Se online: Envia para servidor
   ↓
5. Servidor processa e armazena
   ↓
6. Envia confirmação
   ↓
7. Remove da fila local
   ↓
8. Se offline: Retém na fila
   ↓
9. Quando voltar internet: Sincroniza automaticamente
```

### 4.4 Endpoints API

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh
POST   /api/auth/logout

GET    /api/babies
POST   /api/babies
PUT    /api/babies/:id
DELETE /api/babies/:id

POST   /api/babies/:babyId/records/feeding
POST   /api/babies/:babyId/records/sleep
POST   /api/babies/:babyId/records/diaper
POST   /api/babies/:babyId/records/bath
POST   /api/babies/:babyId/records/temperature
GET    /api/babies/:babyId/records
PUT    /api/babies/:babyId/records/:id
DELETE /api/babies/:babyId/records/:id

GET    /api/development/:month
POST   /api/babies/:babyId/growth
GET    /api/babies/:babyId/growth

POST   /api/babies/:babyId/medications
GET    /api/babies/:babyId/medications
PUT    /api/babies/:babyId/medications/:id
DELETE /api/babies/:babyId/medications/:id

POST   /api/babies/:babyId/vaccines
GET    /api/babies/:babyId/vaccines

POST   /api/babies/:babyId/consultations
GET    /api/babies/:babyId/consultations

GET    /api/reports/:babyId/:period
POST   /api/reports/:babyId/share

POST   /api/sharing/invite
GET    /api/sharing/invitations
PUT    /api/sharing/:id/permission
DELETE /api/sharing/:id

POST   /api/sync
```

---

## 5. Identidade Visual

### 5.1 Paleta de Cores
- Verde profundo: #2D5016
- Dourado: #D4AF37
- Creme: #FFFEF7
- Areia: #F5F1E8
- Cinza: #757575
- Branco: #FFFFFF

### 5.2 Ícone
- Símbolo original
- Representa: bebê, cuidado, proteção, crescimento
- Funciona pequeno
- Elegante e moderno
- Sem elementos infantis genéricos

### 5.3 Tela de Abertura
- Logo NINNA
- Frase: "Cada fase importa. Cada detalhe também."
- Animação suave
- Transição para login

### 5.4 Tipografia
- Heading: Bold, 24-28px
- Body: Regular, 14-16px
- Caption: Light, 12px

---

## 6. Cronograma de Desenvolvimento

### Fase 1 - MVP (4 semanas)
- Setup projeto
- Autenticação
- Perfil bebê
- Registros básicos (mamada, sono, fralda)
- Tela hoje
- Banco local

### Fase 2 - Funcionalidades Core (4 semanas)
- Todos os registros
- Desenvolvimento 1-36 meses
- Diário
- Histórico
- Sincronização
- Compartilhamento

### Fase 3 - Premium (3 semanas)
- Cólica
- Medicamentos
- Vacinas
- Consultas
- Relatórios
- NINNA Assistant

### Fase 4 - Polish e Release (2 semanas)
- Testes
- Performance
- Publicação
- Documentação

---

## 7. Tecnologias

### Frontend (Mobile)
- React Native 0.72+
- TypeScript
- Redux Toolkit
- React Navigation
- Realm/SQLite
- Axios

### Backend
- Node.js 18+
- Express.js
- TypeScript
- PostgreSQL/MongoDB
- Redis
- JWT
- Docker

### DevOps
- Docker
- GitHub Actions
- Google Play Console
- App Store Connect

---

## 8. Métricas de Sucesso

- [ ] App funciona offline
- [ ] Sincronização sem perdas
- [ ] Menos de 500ms para registrar
- [ ] 4.5+ estrelas nas lojas
- [ ] 10k+ downloads no primeiro mês
- [ ] Retenção de 60%+ após 30 dias
- [ ] Conversão Premium 5%+

---

## 9. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Sincronização falha | Alto | Testes rigorosos, fila com retry |
| Perda de dados | Crítico | Backup, transações, validações |
| Performance offline | Alto | Otimização, lazy loading |
| Conformidade LGPD | Alto | Auditoria legal, criptografia |
| Rejeição nas lojas | Alto | Testes em devs reais, diretrizes |

---

## 10. Próximos Passos

1. Criar estrutura de pastas
2. Configurar ambiente
3. Começar com autenticação
4. Implementar banco local
5. Criar screens principais
6. Implementar sincronização
7. Testes
8. Publicação

---

**Documento versão 1.0**
Data: 2024
Autor: Pâmella Mourão
Status: Aprovado
