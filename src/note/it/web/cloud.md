---
article: false
date: 2025-04-07
index: true
order: 4
headerDepth: 1

---

# Cloud and Scalable Computing

## Why Cloud?

### Uneven Utilizations by nature

- Day of the week and hours of the day: Web surfing
- Season of the year: Christmas e-gift cards
- Adhoc usage: One-off computation jobs/testing

**Economies of scale**

### Cloud Benefits: on-demand + sharing

![1743993199196.png](https://pic.hanjiaming.com.cn/2025/04/07/6c4042d1f8df3.png)

### Cloud Types - Cloud Service Models

- Infrastructure-as-a-Service (IaaS)
- Platform-as-a-Service (PaaS)
- Software-as-a-Service (SaaS)

<img src="https://pic.hanjiaming.com.cn/2025/04/07/8fad2e2273c36.png" alt="1743993407904.png" style="zoom: 75%;" />

What service model the following offer (SaaS, PaaS, IaaS)?

- Salesforce.com - SaaS
- Amazon Web Services (AWS) Elastic Beanstalk, Azure App Service - Paas
- AWS Elastic Compute Cloud (EC2) - IaaS

What other X-as-a-Service have you heard of?

- Model aaS
- Function aaS
- Container aaS

### Ownership Models

- Public Cloud
- Private Cloud
- Hybrid Cloud - Resources from 2+ computing environments
- Community Cloud - Group of consumers having the same conern

## Scaling Up vs. Scaling Out

- Scale-up (vertically): more resources for a single node: More expensive for supercomputer (less cost-effective)
- Scale-out (horizontally): more nodes
  - A farm of cheaper instances well-networked (high throughput)
  - Application distributable in individual instances

<img src="https://pic.hanjiaming.com.cn/2025/04/07/8d5ea5fba3300.png" alt="1743994131062.png" style="zoom: 67%;" />

## Design Considerations

- Scalability and Elasticity
  - Auto-scaling allows on-demand instances/node creation/removal
  - Possibly based on metrics: CPU, memory, disk I/O, network I/O...
- Fault Tolerance for Availability
  - Automated recovery for EC2 instances when some of them die
  - Automated backups for storage
- Software Deployability
  - Easy to deploy; and create a new environment to test out changes
  - Integrated with GIT for systematic versioning control
  - 













