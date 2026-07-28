# Agile Methodology & Scrum — Notes

> **Overview:** Notes covering Agile foundations — the Manifesto and its values, the Scrum framework, estimation techniques, sprint planning, and how to write good user stories.

---

## Table of Contents

1. [Introduction to Agile & the Agile Manifesto](#1-introduction-to-agile--the-agile-manifesto)
2. [Scrum Framework — Roles, Ceremonies & Artifacts](#2-scrum-framework--roles-ceremonies--artifacts)
3. [Agile Estimation & Planning Techniques](#3-agile-estimation--planning-techniques)
4. [Agile User Stories](#4-agile-user-stories)
5. [Quick Recap](#5-quick-recap)
6. [Reference Links](#6-reference-links)

---

## 1. Introduction to Agile & the Agile Manifesto

### Overview of Agile Principles and Values

Agile is a way of building software (or running any project) by breaking work into small, iterative pieces instead of trying to plan and deliver everything in one giant release. Teams plan, build, and review in a repeating cycle, which lets them adapt quickly and get value in front of customers faster. Large companies like Amazon, Google, and Meta rely heavily on Agile precisely because of this adaptability.
![Agile methodology](https://media.geeksforgeeks.org/wp-content/uploads/20240612173423/Phases-of-Agile-SDLC.webp)

### The Agile Manifesto — 4 Values & 12 Principles

In 2001, seventeen software developers met in Snowbird, Utah and wrote the **Manifesto for Agile Software Development** — a short document that reshaped how modern teams build software.

**The 4 Values:**

| Value | Meaning |
|---|---|
| Individuals and interactions | over processes and tools |
| Working software | over comprehensive documentation |
| Customer collaboration | over contract negotiation |
| Responding to change | over following a plan |

Importantly, the items on the right still matter — Agile just places more weight on the items on the left.

**The 12 Principles** (condensed):

1. Satisfy the customer through early, continuous delivery of valuable software
2. Welcome changing requirements, even late in development
3. Deliver working software frequently (weeks rather than months)
4. Business people and developers must work together daily
5. Build projects around motivated individuals; trust them to get the job done
6. Face-to-face conversation is the most efficient way to convey information
7. Working software is the primary measure of progress
8. Agile promotes sustainable development — a pace the team can maintain indefinitely
9. Continuous attention to technical excellence and good design
10. Simplicity — maximizing the amount of work *not* done — is essential
11. The best architectures and designs emerge from self-organizing teams
12. Teams reflect regularly and adjust their behavior to become more effective

### Agile vs Waterfall

Before Agile, most software projects followed the **Waterfall model** — a strictly sequential process where each phase had to fully complete before the next one began.

![waterfall vs agile](https://www.nimblework.com/wp-content/uploads/2022/12/waterfall-vs-agile-2.webp)

*The Waterfall model: requirements → design → implementation → testing → deployment → maintenance, each phase finishing before the next starts.*

| Aspect | Waterfall | Agile |
|---|---|---|
| Approach | Sequential, phase-by-phase | Iterative, in short sprints |
| Requirements | Fixed upfront | Expected to evolve |
| Customer involvement | Mostly at the start and end | Continuous, throughout |
| Delivery | One big release at the end | Frequent, small increments |
| Best suited for | Well-understood, stable requirements | Projects with change and uncertainty |

---

## 2. Scrum Framework — Roles, Ceremonies & Artifacts

**Scrum** is the most widely used Agile framework. It organizes work into fixed-length iterations called **Sprints** (usually 1–4 weeks), each following the same repeating cycle of planning, daily check-ins, review, and reflection.

![Scrum framework](https://media.geeksforgeeks.org/wp-content/uploads/20240529122458/What-is-Scrum.webp)

*The Scrum cycle: Product Backlog → Sprint Planning → Sprint Backlog → Sprint (with Daily Scrum) → Sprint Review → working Increment, then Retrospective before the next Sprint begins.*

### Scrum Roles

| Role | Responsibility |
|---|---|
| **Product Owner** | Owns and prioritizes the Product Backlog to maximize business value |
| **Scrum Master** | Facilitates Scrum events, removes impediments, coaches the team on Agile practices |
| **Development Team** | Cross-functional group (5–7 people typically) that actually builds and delivers the product increment |

### Scrum Ceremonies (Events)

| Ceremony | Purpose |
|---|---|
| **Sprint Planning** | The team selects Product Backlog items and commits to what they'll deliver in the upcoming Sprint |
| **Daily Scrum** | A short (~15 min) daily check-in to inspect progress toward the Sprint Goal and adjust the plan |
| **Sprint Review** | The team demos the finished Increment to stakeholders and gathers feedback |
| **Sprint Retrospective** | The team reflects on how the Sprint went and identifies improvements for next time |

### Scrum Artifacts

| Artifact | What it is |
|---|---|
| **Product Backlog** | An evolving, prioritized list of everything that might be needed in the product |
| **Sprint Backlog** | The subset of Product Backlog items the team has committed to for the current Sprint |
| **Increment** | The sum of all completed Product Backlog items at the end of a Sprint — a potentially shippable piece of product |
| **Definition of Done** | The shared checklist a team uses to agree that a piece of work is truly finished |

---

## 3. Agile Estimation & Planning Techniques

### Story Points

Rather than estimating tasks in hours (which is notoriously inaccurate), Agile teams often estimate the **relative effort, complexity, and risk** of a user story using **story points** — usually numbers from a Fibonacci-like sequence (1, 2, 3, 5, 8, 13...). Story points are relative to each other, not absolute — a team's own history of completed points is what makes them useful for planning.

### Planning Poker

**Planning Poker** is the most common way teams arrive at a story-point estimate together:

1. The team reads through a user story and discusses it briefly.
2. Each team member privately picks a card representing their estimate.
3. Everyone reveals their card at the same time.
4. If estimates differ significantly, the highest and lowest scorers explain their reasoning, and the team re-votes until they converge.

This keeps estimation a team conversation rather than one person's guess, and it naturally surfaces hidden assumptions or missing requirements early.

### Sprint Planning Process

At the start of every Sprint, the team holds a **Sprint Planning** meeting to decide:

- **What** can be delivered in the upcoming Sprint (pulled from the Product Backlog)
- **How** the team will get that work done (broken into tasks)

The output is the **Sprint Backlog** and a clear **Sprint Goal** that gives the whole Sprint direction.

### Velocity and Burndown Charts

- **Velocity** = the number of story points a team completes per Sprint, tracked over several Sprints. It's used to forecast how much work a team can realistically commit to next time — never to compare one team against another.
- **Burndown Chart** = a running graph of work remaining (often in story points) plotted against time in the Sprint.

![velocity and burndown charts](https://upload.wikimedia.org/wikipedia/commons/0/05/SampleBurndownChart.png)

*A typical Sprint burndown chart: the ideal line shows steady progress toward zero remaining work, while the actual line shows the team's real day-by-day progress.*

**Reading a burndown chart:**
- Actual line **above** the ideal line → the team is behind pace
- Actual line **below** the ideal line → the team is ahead of pace
- A flat actual line for several days → work may be stuck or blocked

---

## 4. Agile User Stories

### What is a User Story?

A **User Story** is a short, plain-language description of a feature, written from the perspective of the person who wants it — deliberately informal, since it's meant to be a placeholder for a conversation, not a full requirements spec.

### Standard Format

```
As a [type of user]
I want [some goal or capability]
So that [I get some benefit/value]
```

**Example:**

```
As an online shopper
I want to save items to a wishlist
So that I can easily find and purchase them later
```

### The INVEST Principle

A good user story should satisfy the **INVEST** checklist (introduced by Bill Wake in 2003):

| Letter | Meaning |
|---|---|
| **I** — Independent | The story doesn't depend on other stories being done first |
| **N** — Negotiable | Details can still be discussed and refined — it isn't a rigid contract |
| **V** — Valuable | It delivers real value to the customer or user |
| **E** — Estimable | The team can reasonably estimate its size |
| **S** — Small | Small enough to comfortably fit in a single Sprint |
| **T** — Testable | Clear enough that you can write acceptance criteria for it |

### Writing Acceptance Criteria (Given-When-Then)

**Acceptance Criteria** define exactly what "done" means for a user story — they're what the team tests against before calling the story complete.

```
Given [some initial context]
When  [an action or event happens]
Then  [the expected outcome occurs]
```

**Example — User Story:**
```
As a customer
I want to add items to my cart
So that I can purchase them later
```

**Acceptance Criteria:**
```
Given a product page is open
When the customer clicks "Add to Cart"
Then the item appears in the cart and the total price updates
```

### Writing User Stories in Practice

1. Identify the user/persona and their goal
2. Write the story in the standard `As a / I want / So that` format
3. Add 2–4 clear, testable acceptance criteria
4. Review the story against INVEST before adding it to the Sprint Backlog
5. Refine collaboratively — a user story is a conversation starter, not a finished spec

---

## 5. Quick Recap

- **Agile** replaces one big sequential plan with short, iterative cycles guided by the 4 values and 12 principles of the Agile Manifesto
- **Scrum** structures that iteration into Sprints, with 3 roles, 5 ceremonies, and a handful of transparent artifacts
- **Estimation** uses relative story points (often via Planning Poker) rather than absolute hours
- **Velocity and burndown charts** turn that estimation into a forecasting tool for future Sprints
- **User Stories** capture what a user needs and why, written to be small, testable, and open to discussion — INVEST and Given-When-Then acceptance criteria keep them high quality

---

## 6. Reference Links

- [What is Agile Methodology – GeeksforGeeks](https://www.geeksforgeeks.org/what-is-agile-methodology/)
- [4 Values of Agile Manifesto – GeeksforGeeks](https://www.geeksforgeeks.org/software-testing/what-are-the-4-agile-values/)
- [Manifesto for Agile Software Development – GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering/agile-manifesto-for-software-development/)
- [Scrum Framework – GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering/what-is-scrum/)
- [Scrum Master – GeeksforGeeks](https://www.geeksforgeeks.org/product-management/scrum-master/)
- [User Stories in Agile Software Development – GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering/user-stories-in-agile-software-development/)
- [Acceptance Criteria and How to Write It – GeeksforGeeks](https://www.geeksforgeeks.org/product-management/what-is-acceptance-criteria-how-to-write-it/)
- [What is Scrum? – Atlassian](https://www.atlassian.com/agile/scrum)
- [Waterfall model diagram – Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Waterfall_model.svg)
- [Scrum process diagram – Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Scrum_process.svg)
- [Burndown chart – Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Burndown_Chart.svg)

---

*Notes prepared for the Agile Methodology & Scrum module.*
