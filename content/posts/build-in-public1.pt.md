+++
date = '2025-09-01T16:50:23-03:00'
draft = false
title = 'Construindo em Público 1'
+++

# Construindo Atehra: Decisões de Stack Tecnológico para um Marketplace de Financiamento Baseado em Receita

## O Desafio

Construir uma plataforma fintech no Brasil não é apenas sobre escrever código—é sobre navegar em uma paisagem complexa de requisitos regulatórios, sistemas de pagamento e processamento de dados financeiros em tempo real.

**Atehra** é um marketplace conectando empresas e investidores baseado em receita no mercado brasileiro. O desafio principal? Criar uma plataforma que lida com processamento de transações de alto volume, divisões de receita entre múltiplas partes e conformidade regulatória—tudo isso mantendo a experiência do usuário que os investidores esperam de fintechs modernas.

## Principais Desafios Técnicos

### **Complexidade de Conformidade Regulatória**
Plataformas de financiamento alternativo brasileiras devem cumprir regulamentações financeiras e leis de proteção de dados LGPD. Precisamos de processos robustos de KYC para verificação de investidores, incluindo validação de documentos, avaliação de risco e monitoramento contínuo de conformidade.

### **Divisão de Receita em Escala**
Cada transação de cliente das empresas precisa de processamento em tempo real para dividir a receita entre a empresa, investidores e taxas da plataforma. Isso não é apenas sobre matemática—é sobre garantir transações atômicas, lidar com casos extremos e manter trilhas de auditoria para relatórios regulatórios.

### **Dados Financeiros em Tempo Real**
Investidores esperam ver seus retornos sendo atualizados em tempo real conforme as empresas geram receita. Isso significa conexões WebSocket, dashboards ao vivo e notificações instantâneas—tudo isso garantindo precisão e segurança dos dados.

### **Complexidade de Integração de Pagamentos**
A paisagem de pagamentos brasileira inclui PIX (transferências instantâneas), bancos tradicionais e processadores de cartão internacionais. Cada um tem diferentes APIs, padrões de webhook e requisitos de conformidade.

## Avaliação do Stack Tecnológico

### **Decisão do Framework Backend**

#### **Opção 1: Node.js + TypeScript**
**Prós**: Máxima flexibilidade, leve, SDKs extensivos de gateways de pagamento, prototipagem rápida

**Contras**: Configuração manual para validação, logging, padrões de segurança

#### **Opção 2: Python + FastAPI**
**Prós**: Excelente para processamento de dados, ecosistema ML forte, suporte async limpo

**Contras**: Overhead de performance, menos suporte a bibliotecas de pagamento fintech

#### **Opção 3: Java + Spring Boot**
**Prós**: Nível empresarial, testado em batalha para bancos, excelente ecosistema de ferramentas

**Contras**: Sintaxe verbosa, ciclo de desenvolvimento mais lento, exagero para MVP

#### **Opção 4: Go + Gin/Fiber**
**Prós**: Performance superior, excelente concorrência, eficiência de memória

**Contras**: Ecosistema menor, curva de aprendizado mais íngreme, integrações de pagamento limitadas

**Decisão**: **Node.js + TypeScript** para velocidade de MVP e ecosistema de gateway de pagamento, com caminho claro de migração para NestJS conforme escalamos.

### **Estratégia de Banco de Dados**

#### **Opção 1: PostgreSQL**
**Prós**: Transações ACID (crítico para divisões), ecosistema maduro, forte consistência

**Contras**: Complexidade de escala para transações de alto volume

#### **Opção 2: MongoDB**
**Prós**: Schema flexível, escala horizontal

**Contras**: Riscos de consistência eventual para dados financeiros

**Decisão**: **PostgreSQL** porque dados financeiros exigem garantias ACID e auditoria regulatória requer consultas estruturadas.

### **Processamento de Pagamentos**

#### **Opção 1: PIX Nativo (PagBank, Banco Inter)**
**Prós**: Transferências brasileiras instantâneas, zero taxas, familiar para todos usuários

**Contras**: Implementação de split complexa, limitado ao Brasil, reconciliação manual

#### **Opção 2: Mercado Pago**
**Prós**: Forte presença brasileira, suporte PIX + cartão, experiência em marketplace

**Contras**: Confiabilidade de API variável, integração complexa, expansão internacional limitada

#### **Opção 3: Stripe Connect**
**Prós**: Divisão de pagamentos de marketplace maduro, excelente experiência do desenvolvedor, comprovado em escala

**Contras**: Menos integração PIX, taxas internacionais, manuseio de moeda USD

**Decisão**: **Stripe Connect** para MVP para aproveitar sua expertise em pagamentos de marketplace, com integração PIX planejada para Fase 2.

### **Framework Frontend**

#### **Opção 1: React + TypeScript**
**Prós**: Bibliotecas extensivas de componentes fintech, grande pool de desenvolvedores, ecosistema de tempo real maduro

**Contras**: Tamanho do bundle, complexidade do gerenciamento de estado

#### **Opção 2: Vue.js + TypeScript**
**Prós**: Curva de aprendizado mais suave, excelente performance, arquitetura limpa

**Contras**: Ecosistema fintech menor, menos bibliotecas de componentes de dashboard

**Decisão**: **React + TypeScript** principalmente devido ao robusto ecosistema fintech—bibliotecas como Ant Design Pro fornecem componentes de dashboard de nível empresarial prontos para uso.

### **Otimização do Cliente HTTP**

#### **Escolha Padrão: Axios**
**Prós**: Rico em recursos, familiar para a maioria dos desenvolvedores

**Contras**: Bundle de 33KB, overhead de performance

#### **Escolha de Performance: Ky**
**Prós**: Bundle de 13KB (60% menor), baseado em fetch moderno, TypeScript-first

**Contras**: Ecosistema menor, menos familiar

**Decisão**: **Ky** porque performance importa para dashboards financeiros em tempo real, e a API é na verdade mais limpa que o Axios.

## Hospedagem e Infraestrutura

### **Avaliação de Plataforma**

#### **AWS/Google Cloud**
**Prós**: Escalabilidade infinita, recursos empresariais

**Contras**: Configuração complexa, preços variáveis, exagero para MVP

#### **Vercel/Netlify**
**Prós**: Deploy simples, ótimo para frontend

**Contras**: Processamento backend limitado, restrições serverless

#### **DigitalOcean App Platform**
**Prós**: Preços previsíveis, serviços gerenciados, meio-termo perfeito

**Contras**: Menos serviços que AWS, plataforma mais nova

**Decisão**: **DigitalOcean App Platform** oferece o ponto ideal de simplicidade e escalabilidade a $30/mês para nossa stack completa—serviço web, workers, PostgreSQL e Redis.

## A Jornada de Construir em Público

Este é apenas o começo. Estamos construindo Atehra de forma transparente, compartilhando nossas decisões técnicas, desafios e aprendizados ao longo do caminho.

### **O que vem a seguir**
- Projetando a arquitetura da aplicação
- Implementando workflows de KYC brasileiros
- Construindo o dashboard do investidor com atualizações em tempo real
- Integrando Stripe Connect para divisão de receita

### **Por que compartilhar isso**
O ecosistema fintech brasileiro está evoluindo rapidamente, e acreditamos em contribuir de volta para a comunidade. Seja você construindo plataformas similares, avaliando escolhas tecnológicas, ou apenas curioso sobre desenvolvimento fintech—nossa jornada pode fornecer insights úteis.

Cada decisão acima foi impulsionada pelas restrições específicas de construir uma plataforma financeira regulamentada no Brasil, equilibrando desenvolvimento rápido de MVP com requisitos de escalabilidade a longo prazo.

---

*Acompanhe nossa jornada enquanto construímos Atehra do zero.*