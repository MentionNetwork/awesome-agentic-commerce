# Awesome Agentic Commerce [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome resources for agentic commerce — the protocols, MCP servers, tools, apps, APIs and services powering AI agents that shop, sell and transact. For store owners, developers, agencies and marketers building for the AI era.

Agentic commerce is the shift from humans clicking "buy" to AI agents that build carts, compare products, and complete checkout on a shopper's behalf — coordinated through open standards like the [Agentic Commerce Protocol](https://www.agenticcommerce.dev), Google's Agent Payments Protocol, and the [Model Context Protocol](https://modelcontextprotocol.io). This list gathers the best resources across every commerce platform — Shopify, WooCommerce, BigCommerce, Adobe Commerce and open-source engines — for building, selling and growing in that world.

Each category also links a **📚 Further reading** file under [`articles/`](articles/) collecting the best writing on the topic from across the web.

## Contents

- [Understanding Agentic Commerce](#understanding-agentic-commerce)
- [Agentic Commerce Protocols](#agentic-commerce-protocols)
- [AI & MCP Servers](#ai--mcp-servers)
- [Shopify](#shopify)
- [WooCommerce & WordPress](#woocommerce--wordpress)
- [Other Platforms & Open-source Engines](#other-platforms--open-source-engines)
- [Headless & Storefront Frameworks](#headless--storefront-frameworks)
- [Payments, Checkout & Tax](#payments-checkout--tax)
- [Shipping, Fulfillment & Inventory](#shipping-fulfillment--inventory)
- [Analytics, CRO & Personalization](#analytics-cro--personalization)
- [Marketing, SEO & GEO](#marketing-seo--geo)
- [Related Awesome Lists](#related-awesome-lists)

## Understanding Agentic Commerce

Foundational reading on what agentic commerce is and why it matters. 📚 [Further reading](articles/understanding-agentic-commerce.md).

- [What Is Agentic Commerce? (GR4VY)](https://gr4vy.com/posts/what-is-agentic-commerce-a-complete-guide-for-2026/) - Complete 2026 guide to agentic commerce concepts and infrastructure.
- [Agentic Commerce Trends & Statistics (MetaRouter)](https://www.metarouter.io/post/agentic-commerce-trends-statistics) - Data-backed overview of the agentic commerce market.
- [AI Trends Shaping Agentic Commerce (commercetools)](https://commercetools.com/blog/ai-trends-shaping-agentic-commerce) - Where autonomous agents are redefining digital retail.

## Agentic Commerce Protocols

Open standards that let AI agents discover products, build carts, and complete payments across merchants.

- [Agentic Commerce Protocol (ACP)](https://www.agenticcommerce.dev) - Open standard for agent-driven checkout, developed by Stripe and OpenAI.
- [ACP Specification](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) - Reference specification, schemas and product-feed spec for ACP.
- [Agent Payments Protocol (AP2)](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) - Google's open protocol for secure agent-initiated payments.
- [AP2 Specification](https://github.com/google-agentic-commerce/AP2) - Reference specification and implementation for AP2, backed by 60+ payment partners.
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io) - Open standard for connecting AI assistants to tools, data and commerce actions.
- [OpenAI Commerce / Instant Checkout](https://developers.openai.com/commerce/) - Developer docs for enabling purchases inside ChatGPT via ACP.

## AI & MCP Servers

Cross-platform MCP servers and AI tooling that connect commerce data and actions to LLM agents. 📚 [Further reading](articles/ai-and-mcp.md).

- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Broad reference list of Model Context Protocol servers.
- [PayPal Agent Toolkit](https://github.com/paypal/agent-toolkit) - Official PayPal toolkit for integrating commerce actions into AI agents.
- [Stripe AI Toolkit](https://github.com/stripe/ai) - Official Stripe tooling and MCP server for building AI-powered payment agents.
- [Stripe MCP Server](https://docs.stripe.com/mcp) - Official remote MCP server exposing Stripe payment operations to AI assistants.

## Shopify

Everything for building on and selling with Shopify.

### Official & Docs

- [Shopify Developer Docs](https://shopify.dev) - Official documentation for building on the Shopify platform.
- [Shopify Help Center](https://help.shopify.com) - Merchant-facing guides for running a Shopify store.

### APIs & SDKs

- [Shopify Admin API (GraphQL)](https://shopify.dev/docs/api/admin) - Read and write store data such as products, orders and customers.
- [shopify-api-js](https://github.com/Shopify/shopify-api-js) - Official Shopify API client library for Node.js.
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront) - GraphQL API for building custom storefronts and headless commerce.

### Development Tools & CLI

📚 [Further reading](articles/development.md).

- [Polaris](https://github.com/Shopify/polaris-react) - Shopify's design system and React component library for admin apps.
- [Shopify CLI](https://github.com/Shopify/cli) - Command-line tool for building apps, themes and extensions.
- [Shopify Functions Examples](https://github.com/Shopify/function-examples) - Sample projects for building Shopify Functions.

### Themes & Storefront

- [Dawn](https://github.com/Shopify/dawn) - Shopify's reference Online Store 2.0 theme.
- [Hydrogen](https://github.com/Shopify/hydrogen) - Shopify's React framework for building custom headless storefronts.
- [Liquid](https://shopify.github.io/liquid/) - Open-source template language created by Shopify.

### Apps & Extensions

- [Shopify App Bridge](https://shopify.dev/docs/api/app-bridge) - Library for building embedded apps inside the Shopify admin.
- [Shopify App Template (Remix)](https://github.com/Shopify/shopify-app-template-remix) - Official starter template for building Shopify apps with Remix.
- [Shopify Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout) - Customize the Shopify checkout with extensions.

### AI, MCP & Agents

- [Shopify shop-chat-agent](https://github.com/Shopify/shop-chat-agent) - Reference Shopify app embedding an AI chat widget for product discovery and checkout via MCP.
- [Shopify Storefront MCP](https://shopify.dev/docs/apps/build/storefront-mcp) - Official Shopify MCP server exposing storefront data and actions to AI agents.

### Learning & Community

- [r/shopify](https://www.reddit.com/r/shopify/) - Subreddit for Shopify merchants and developers.
- [Shopify Community](https://community.shopify.com) - Official forums for merchants and partners.
- [Shopify Dev Tutorials](https://shopify.dev/docs/apps) - Step-by-step guides for building on Shopify.
- [Shopify Learn](https://www.shopify.com/learn) - Free courses and tutorials for merchants and developers.
- [Shopify Partners](https://www.shopify.com/partners) - Program, resources and community for agencies and developers.

### Guides & Articles

- 📚 [Top Shopify articles & guides](articles/shopify.md) - Curated best developer and merchant writing on Shopify.

## WooCommerce & WordPress

Everything for building and running a WooCommerce store on WordPress.

### Official & Docs

- [WooCommerce Developer Resources](https://developer.woocommerce.com) - Developer portal, references and extension guides for WooCommerce.
- [WooCommerce Documentation](https://woocommerce.com/documentation/) - Official docs for the WooCommerce plugin for WordPress.

### APIs & SDKs

- [woocommerce-rest-api-js-lib](https://github.com/woocommerce/woocommerce-rest-api-js-lib) - Official JavaScript client for the WooCommerce REST API.
- [WooCommerce REST API Docs](https://woocommerce.github.io/woocommerce-rest-api-docs/) - Reference for the WooCommerce REST API.

### Development Tools

- [WP-CLI](https://wp-cli.org) - Command-line interface for managing WordPress and WooCommerce sites.
- [Yoast SEO](https://yoast.com) - SEO plugin for WordPress and WooCommerce stores.

### Extensions & Plugins

- [WooCommerce Extensions Marketplace](https://woocommerce.com/products/) - Directory of official and third-party WooCommerce extensions.

### Learning & Community

- [r/woocommerce](https://www.reddit.com/r/woocommerce/) - Subreddit for the WooCommerce community.

### Guides & Articles

- 📚 [Top WooCommerce articles & guides](articles/woocommerce.md) - Curated best developer and merchant writing on WooCommerce.

## Other Platforms & Open-source Engines

- [Adobe Commerce (Magento) Developer Docs](https://developer.adobe.com/commerce/) - Documentation for Adobe Commerce and Magento Open Source.
- [Bagisto](https://github.com/bagisto/bagisto) - Open-source Laravel ecommerce platform.
- [BigCommerce Developer Center](https://developer.bigcommerce.com) - APIs, docs and tools for building on BigCommerce.
- [BigCommerce REST APIs](https://developer.bigcommerce.com/docs/rest) - Catalog, checkout, orders and storefront APIs for BigCommerce.
- [Medusa](https://github.com/medusajs/medusa) - Composable, open-source commerce engine built with Node.js.
- [Saleor](https://github.com/saleor/saleor) - GraphQL-first, open-source ecommerce platform.
- [Spree](https://github.com/spree/spree) - Open-source Ruby on Rails ecommerce platform.
- [Vendure](https://github.com/vendurehq/vendure) - Headless open-source commerce framework for Node.js.

## Headless & Storefront Frameworks

- [Next.js Commerce](https://github.com/vercel/commerce) - High-performance headless commerce storefront starter.
- [Snipcart Next.js starter](https://github.com/snipcart/snipcart-nextjs) - Add a shopping cart to any site with Snipcart and Next.js.
- [Storefront UI](https://github.com/vuestorefront/storefront-ui) - Component library for building fast ecommerce storefronts.
- [Vue Storefront (Alokai)](https://github.com/vuestorefront/vue-storefront) - Frontend platform for headless commerce.

## Payments, Checkout & Tax

📚 [Further reading](articles/payments-checkout.md).

- [Adyen](https://www.adyen.com) - Global payments platform with unified commerce APIs.
- [Braintree](https://www.paypal.com/us/braintree) - PayPal's global payment processing with drop-in UI, vaulting and split payments.
- [Checkout.com](https://www.checkout.com) - Unified global payment processing with fraud tools and detailed APIs.
- [Mollie](https://www.mollie.com) - European payment processor supporting 40+ local and global payment methods.
- [Paddle](https://www.paddle.com) - Merchant-of-record payments and checkout for software and digital goods.
- [PayPal Developer](https://developer.paypal.com) - APIs and SDKs for accepting PayPal payments.
- [Razorpay](https://razorpay.com) - India-focused payment gateway with UPI, cards, wallets and instant settlements.
- [Square](https://squareup.com) - Omnichannel payments and POS with developer APIs.
- [Stripe](https://stripe.com) - Payments infrastructure for online businesses.

## Shipping, Fulfillment & Inventory

- [AfterShip](https://www.aftership.com) - Multi-carrier tracking with automated, branded post-purchase delivery notifications.
- [Cin7](https://www.cin7.com) - Cloud inventory and order management with carrier and sales-channel integrations.
- [EasyPost](https://www.easypost.com) - Shipping API for labels, tracking and rates across carriers.
- [Easyship](https://www.easyship.com) - Shipping platform with rate comparison, customs documents and international coverage.
- [Katana](https://katanamrp.com) - Cloud manufacturing ERP and inventory management for product businesses.
- [Sendcloud](https://www.sendcloud.com) - European multi-carrier shipping platform with checkout, labels, tracking and returns.
- [ShipBob](https://www.shipbob.com) - Tech-enabled 3PL with global warehouses and a developer API for fulfillment.
- [ShipEngine](https://www.shipengine.com) - Multi-carrier shipping API for rate shopping, label creation and tracking.
- [Shippo](https://goshippo.com) - Multi-carrier shipping API and dashboard.

## Analytics, CRO & Personalization

📚 [Further reading](articles/analytics-cro.md).

- [Amplitude](https://amplitude.com) - Product and behavioral analytics with experimentation for digital and ecommerce teams.
- [Google Analytics 4](https://marketingplatform.google.com/about/analytics/) - Web and app analytics with ecommerce tracking.
- [GrowthBook](https://www.growthbook.io) - Open-source, warehouse-native feature flagging and A/B testing platform.
- [Hotjar](https://www.hotjar.com) - Heatmaps, session recordings and feedback surveys for UX and CRO.
- [Matomo](https://matomo.org) - Open-source, privacy-friendly web analytics.
- [Microsoft Clarity](https://clarity.microsoft.com) - Free session recordings and heatmaps for websites.
- [PostHog](https://posthog.com) - Open-source product analytics, session replay and experimentation.
- [Statsig](https://statsig.com) - Experimentation, feature flags and product analytics at scale.
- [VWO](https://vwo.com) - A/B testing, personalization, heatmaps and session recording for CRO teams.

## Marketing, SEO & GEO

Marketing tooling — including Generative Engine Optimization (GEO), the practice of getting brands and products cited by AI answer engines. 📚 [Further reading](articles/marketing-seo-geo.md).

- [Attentive](https://www.attentive.com) - SMS and email marketing with list growth and automation for retail brands.
- [Klaviyo](https://www.klaviyo.com) - Email and SMS marketing automation built for ecommerce.
- [Mailchimp](https://mailchimp.com) - Email marketing, automation and audience management.
- [Mention Network](https://mention.network) - Measure and improve how your brand and store appear across AI answer engines (GEO / AI visibility).
- [Okendo](https://www.okendo.io) - Customer reviews, ratings and UGC for direct-to-consumer brands.
- [Omnisend](https://www.omnisend.com) - Email, SMS and push marketing automation built for ecommerce.
- [Postscript](https://postscript.io) - SMS marketing built specifically for Shopify merchants.
- [Refersion](https://www.refersion.com) - Affiliate and influencer marketing program management for ecommerce.
- [Yotpo](https://www.yotpo.com) - Reviews, loyalty and referrals for ecommerce brands.

## Related Awesome Lists

- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - A curated list of Model Context Protocol servers.
- [awesome-shopify](https://github.com/julionc/awesome-shopify) - A curated list of Shopify resources and open-source projects.

## Contributing

Contributions are welcome! Read the [contribution guidelines](contributing.md) first.
