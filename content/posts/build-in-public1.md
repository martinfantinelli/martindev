+++
date = '2025-09-01T16:50:23-03:00'
draft = true
title = 'Build in Public 1'
+++

# Building Atehra: Tech Stack Decisions for a Brazilian Revenue-Based Financing Marketplace

## The Challenge

Building a fintech platform in Brazil isn't just about writing code—it's about navigating a complex landscape of regulatory requirements, payment systems, and real-time financial data processing.

**Atehra** is a marketplace connecting businesses with revenue-based lenders in the Brazilian market. The core challenge? Creating a platform that handles high-volume transaction processing, multi-party revenue splits, and regulatory compliance—all while maintaining the user experience investors expect from modern fintech.

## Key Technical Challenges

### **Regulatory Compliance Complexity**
Brazilian alternative lending platforms must comply with financial regulations and LGPD data protection laws. We need robust KYC processes for investor verification, including document validation, risk assessment, and ongoing compliance monitoring.

### **Revenue Splitting at Scale**
Every customer transaction from businesses needs real-time processing to split revenue between the company, investors, and platform fees. This isn't just about math—it's about ensuring atomic transactions, handling edge cases, and maintaining audit trails for regulatory reporting.

### **Real-time Financial Data**
Investors expect to see their returns updating in real-time as companies generate revenue. This means WebSocket connections, live dashboards, and instant notifications—all while ensuring data accuracy and security.

### **Payment Integration Complexity**
Brazilian payment landscape includes PIX (instant transfers), traditional banking, and international card processors. Each has different APIs, webhook patterns, and compliance requirements.

## Technology Stack Evaluation

### **Backend Framework Decision**

#### **Option 1: Node.js + TypeScript**
**Pros**: Maximum flexibility, lightweight, extensive payment gateway SDKs, rapid prototyping

**Cons**: Manual setup for validation, logging, security patterns

#### **Option 2: Python + FastAPI**
**Pros**: Excellent for data processing, strong ML ecosystem, clean async support

**Cons**: Performance overhead, less fintech payment library support

#### **Option 3: Java + Spring Boot**
**Pros**: Enterprise-grade, battle-tested for banking, excellent tooling ecosystem

**Cons**: Verbose syntax, slower development cycle, overkill for MVP

#### **Option 4: Go + Gin/Fiber**
**Pros**: Superior performance, excellent concurrency, memory efficiency

**Cons**: Smaller ecosystem, steeper learning curve, limited payment integrations

**Decision**: **Node.js + TypeScript** for MVP speed and payment gateway ecosystem, with clear migration path to NestJS as we scale.

### **Database Strategy**

#### **Option 1: PostgreSQL**
**Pros**: ACID transactions (critical for splits), mature ecosystem, strong consistency

**Cons**: Scaling complexity for high-volume transactions

#### **Option 2: MongoDB**
**Pros**: Flexible schema, horizontal scaling

**Cons**: Eventual consistency risks for financial data

**Decision**: **PostgreSQL** because financial data demands ACID guarantees and regulatory auditing requires structured queries.

### **Payment Processing**

#### **Option 1: PIX Native (PagBank, Banco Inter)**
**Pros**: Instant Brazilian transfers, zero fees, familiar to all users

**Cons**: Complex split implementation, limited to Brazil, manual reconciliation

#### **Option 2: Mercado Pago**
**Pros**: Strong Brazilian presence, PIX + card support, marketplace experience

**Cons**: Variable API reliability, complex integration, limited international expansion

#### **Option 3: Stripe Connect**
**Pros**: Mature marketplace payment splitting, excellent developer experience, proven at scale

**Cons**: Less PIX integration, international fees, USD currency handling

**Decision**: **Stripe Connect** for MVP to leverage their marketplace payment expertise, with PIX integration planned for Phase 2.

### **Frontend Framework**

#### **Option 1: React + TypeScript**
**Pros**: Extensive fintech component libraries, large developer pool, mature real-time ecosystem

**Cons**: Bundle size, complexity of state management

#### **Option 2: Vue.js + TypeScript**
**Pros**: Gentler learning curve, excellent performance, clean architecture

**Cons**: Smaller fintech ecosystem, fewer dashboard component libraries

**Decision**: **React + TypeScript** primarily due to the robust fintech ecosystem—libraries like Ant Design Pro provide enterprise-grade dashboard components out of the box.

### **HTTP Client Optimization**

#### **Standard Choice: Axios**
**Pros**: Feature-rich, familiar to most developers

**Cons**: 33KB bundle size, performance overhead

#### **Performance Choice: Ky**
**Pros**: 13KB bundle (60% smaller), modern fetch-based, TypeScript-first

**Cons**: Smaller ecosystem, less familiar

**Decision**: **Ky** because performance matters for real-time financial dashboards, and the API is actually cleaner than Axios.

## Hosting and Infrastructure

### **Platform Evaluation**

#### **AWS/Google Cloud**
**Pros**: Infinite scalability, enterprise features

**Cons**: Complex setup, variable pricing, overkill for MVP

#### **Vercel/Netlify**
**Pros**: Simple deployment, great for frontend

**Cons**: Limited backend processing, serverless constraints

#### **DigitalOcean App Platform**
**Pros**: Predictable pricing, managed services, perfect middle ground

**Cons**: Less services than AWS, newer platform

**Decision**: **DigitalOcean App Platform** offers the sweet spot of simplicity and scalability at $30/month for our complete stack—web service, workers, PostgreSQL, and Redis.

## The Build-in-Public Journey

This is just the beginning. We're building Atehra transparently, sharing our technical decisions, challenges, and learnings along the way.

### **What's Next**
- Designing the application architecture
- Implementing Brazilian KYC workflows
- Building the investor dashboard with real-time updates
- Integrating Stripe Connect for revenue splitting

### **Why Share This**
The Brazilian fintech ecosystem is rapidly evolving, and we believe in contributing back to the community. Whether you're building similar platforms, evaluating technology choices, or just curious about fintech development—our journey might provide useful insights.

Each decision above was driven by the specific constraints of building a regulated financial platform in Brazil, balancing rapid MVP development with long-term scalability requirements.

---

*Follow our journey as we build Atehra from the ground up.*
