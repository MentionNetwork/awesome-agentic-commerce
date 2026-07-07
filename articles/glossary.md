# Agentic Commerce Glossary

Plain-language definitions of the protocols, standards and terms used across this list. Corrections and additions welcome — see [../contributing.md](../contributing.md).

## Agentic commerce

Commerce where an AI agent — not a human clicking through a website — discovers products, compares options, builds a cart and completes checkout on a shopper's behalf. The human sets the intent ("find me running shoes under $100"); the agent executes the transaction.

## Agentic Commerce Protocol (ACP)

Open standard developed by **Stripe and OpenAI** that powers Instant Checkout in ChatGPT. ACP is a server-to-server REST API: the merchant exposes checkout endpoints (create/update/complete checkout session) plus a `delegate_payment` endpoint, and the AI platform calls them to complete a purchase. Spec: [agenticcommerce.dev](https://www.agenticcommerce.dev).

## Agent Payments Protocol (AP2)

Open, payment-agnostic protocol from **Google**, backed by 60+ payment partners. AP2 uses cryptographically signed **Mandates** to prove that a human authorized an agent to make a specific purchase — solving the "did the user really approve this?" problem in agent-initiated payments. Spec: [github.com/google-agentic-commerce/AP2](https://github.com/google-agentic-commerce/AP2).

## Universal Commerce Protocol (UCP)

Open standard announced by **Google and Shopify** at NRF 2026 (with Etsy, Wayfair, Target, Walmart and 20+ partners), covering the full commerce lifecycle: catalog search and lookup, cart building, identity linking, checkout and order management. Merchants publish capabilities via a JSON manifest at `/.well-known/ucp`. Already wired into Google's AI Mode in Search and the Gemini apps. Spec: [ucp.dev](https://ucp.dev).

## ACP vs AP2 vs UCP — which is which?

- **ACP** (Stripe + OpenAI): checkout API used by ChatGPT. Server-to-server, transaction-focused.
- **AP2** (Google + payment partners): payment *authorization* layer — proves human intent behind an agent's purchase. Complements rather than competes with the other two.
- **UCP** (Google + Shopify + retailers): full-lifecycle standard from discovery to post-purchase, published as a static manifest. Used by Google AI Mode and Gemini.

A merchant preparing for agentic commerce will likely implement more than one: UCP and/or ACP for reachability, AP2 for payment trust.

## Model Context Protocol (MCP)

Open standard (originated by Anthropic) for connecting AI assistants to external tools and data. In commerce, MCP servers expose store data and actions — search catalog, manage cart, place order — to any MCP-capable agent. Shopify's Storefront MCP and Stripe's MCP server are official examples. Spec: [modelcontextprotocol.io](https://modelcontextprotocol.io).

## GEO (Generative Engine Optimization)

Optimizing content, product data and off-site signals so AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) cite and recommend your brand or products. Also called **AEO** (Answer Engine Optimization) — the terms are interchangeable; "AI visibility" is the umbrella term. Coined in a [2024 KDD paper](https://arxiv.org/abs/2311.09735) from Princeton, Georgia Tech, Allen AI and IIT Delhi.

## llms.txt

Proposed convention ([llmstxt.org](https://llmstxt.org)): a markdown file at a site's root that gives LLMs a clean, structured summary of the site's content — analogous to what robots.txt does for crawlers, but for comprehension rather than access control.

## Instant Checkout

OpenAI's consumer-facing feature letting users buy products directly inside ChatGPT, powered by ACP. The first mainstream deployment of in-chat agentic checkout.

## AI shopping agent

Software agent (ChatGPT with shopping, Google AI Mode, Perplexity Shopping, or a custom agent) that browses stores, evaluates products against a shopper's constraints, and can execute purchases. Distinct from a merchant-side chatbot: the agent works for the *shopper*, not the store.

## Agent readiness

How well a store can be read and operated by AI shopping agents: structured product data, transparent inventory and pricing, discoverable policies, and machine-actionable checkout. Measured by testing tools listed under [Agent Readiness & Testing](../README.md#agent-readiness--testing).
