# Awesome Agentic Commerce [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![Awesome Agentic Commerce banner](media/banner.png)

> A curated list of awesome resources for agentic commerce — the protocols, MCP servers, tools, apps, APIs and services powering AI agents that shop, sell and transact. For store owners, developers, agencies and marketers building for the AI era.

Agentic commerce is the shift from humans clicking "buy" to AI agents that build carts, compare products, and complete checkout on a shopper's behalf — coordinated through open standards like the Universal Commerce Protocol (UCP), the Agentic Commerce Protocol (ACP), Google's Agent Payments Protocol (AP2), and the Model Context Protocol (MCP). This list gathers the best resources across every commerce platform — Shopify, WooCommerce, BigCommerce, Adobe Commerce and open-source engines — for building, selling and growing in that world.

Each category also links a **📚 Further reading** file under [`articles/`](articles/) collecting the best writing on the topic from across the web. New to the space? Start with the [glossary](articles/glossary.md) — UCP vs ACP vs AP2 vs MCP, GEO/AEO, llms.txt and friends, in plain language. Store owners: begin with Understanding Agentic Commerce, then Agent Readiness & Testing and Marketing, SEO & GEO. Developers: head for the protocols, AI & MCP Servers and your platform's section.

## Contents

- [Understanding Agentic Commerce](#understanding-agentic-commerce)
- [Universal / Agentic Commerce Protocols](#universal--agentic-commerce-protocols)
- [Agent Readiness & Testing](#agent-readiness--testing)
- [AI & MCP Servers](#ai--mcp-servers)
- [Shopify](#shopify)
- [WooCommerce & WordPress](#woocommerce--wordpress)
- [Other Platforms & Open-source Engines](#other-platforms--open-source-engines)
- [Headless & Storefront Frameworks](#headless--storefront-frameworks)
- [Amazon](#amazon)
- [Dropshipping & Sourcing](#dropshipping--sourcing)
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

### Market Data

- [AI-driven orders on Shopify grew roughly 11x year over year](https://www.shopify.com/blog/aeo-for-ecommerce) - Shopify, 2026. AI-referred traffic grew ~7x over the same period.
- [71% of AI-attributed Shopify orders came from long-tail niches](https://www.shopify.com/blog/ai-dropshipping) - Shopify, 2026. AI discovery rewards specific, well-structured catalogs over broad ones.
- [Adding statistics, citations and quotations lifts visibility in generative answers by up to 40%](https://arxiv.org/abs/2311.09735) - Princeton, Georgia Tech, Allen AI & IIT Delhi, KDD 2024. The paper that coined "GEO".

## Universal / Agentic Commerce Protocols

Open standards that let AI agents discover products, build carts, and complete payments across merchants.

| Protocol | Backed by                        | Solves                                                      | Shape                               | Where it runs today                 |
| -------- | -------------------------------- | ----------------------------------------------------------- | ----------------------------------- | ----------------------------------- |
| **UCP**  | Google + Shopify + 20+ retailers | Full lifecycle: discovery, cart, identity, checkout, orders | JSON manifest at `/.well-known/ucp` | Google AI Mode in Search, Gemini    |
| **ACP**  | Stripe + OpenAI                  | Agent-driven checkout                                       | Server-to-server REST API           | ChatGPT (Apps, select retailers)    |
| **AP2**  | Google + 60+ payment partners    | Proving a human authorized an agent's payment               | Cryptographically signed Mandates   | Payment layer complementing UCP/ACP |
| **MCP**  | Anthropic (open standard)        | Connecting agents to tools and data                         | Client-server protocol              | Claude, ChatGPT and any MCP client  |

- [Universal Commerce Protocol (UCP)](https://ucp.dev) - Open standard from Google and Shopify (20+ partners) for agentic checkout, live in Google AI Mode and Gemini.
- [UCP Specification](https://github.com/Universal-Commerce-Protocol/ucp) - Reference specification and documentation for UCP, released under Apache 2.0.
- [Agent Payments Protocol (AP2)](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) - Google's open protocol for secure agent-initiated payments.
- [AP2 Specification](https://github.com/google-agentic-commerce/AP2) - Reference specification and implementation for AP2, backed by 60+ payment partners.
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io) - Open standard for connecting AI assistants to tools, data and commerce actions.
- [Agentic Commerce Protocol (ACP)](https://www.agenticcommerce.dev) - Open standard for agent-driven checkout by Stripe and OpenAI; refocused in 2026 on a narrower set of large retailers via Apps.
- [ACP Specification](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) - Reference specification, schemas and product-feed spec for ACP.
- [OpenAI Commerce](https://developers.openai.com/commerce/) - Developer docs for ACP-based purchases in ChatGPT, now centered on Apps and select retailers.

## Agent Readiness & Testing

Tools that test, score and validate whether a store is ready for AI shopping agents.

- [Agentic Commerce Readiness Scanner](https://www.agenticcommerce.shop) - Free scanner from the Agentic Commerce Alliance and Shopware that drives a virtual agent through your store to test AI readability.
- [Daeri](https://daeri.ai) - Independent testing platform that sends a real AI shopping agent to your store to find products, check price and stock, add to cart and locate policies.
- [UCP Checker](https://ucptools.dev) - Free validator for `/.well-known/ucp` manifests and Schema.org markup with an AI readiness score and fix suggestions.

## AI & MCP Servers

Cross-platform MCP servers and AI tooling that connect commerce data and actions to LLM agents. 📚 [Further reading](articles/ai-and-mcp.md).

- [PayPal Agent Toolkit](https://github.com/paypal/agent-toolkit) - Official PayPal toolkit for integrating commerce actions into AI agents.
- [Stripe AI Toolkit](https://github.com/stripe/ai) - Official Stripe tooling and MCP server for building AI-powered payment agents.
- [Stripe MCP Server](https://docs.stripe.com/mcp) - Official remote MCP server exposing Stripe payment operations to AI assistants.
- [AgentServices](https://agentservices.to) - 54-service paid data API platform for AI agents with x402 micropayments — crypto market data, forex, stocks, news, IP geolocation, and 37 MCP tools.

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

- [Gorgias](https://www.gorgias.com) - AI-first customer support helpdesk for ecommerce, unifying email, chat, voice and social tickets with AI agents that resolve inquiries automatically.
- [Judge.me](https://judge.me) - Most-installed product review app on Shopify, offering unlimited review requests, photo and video reviews and Google rich snippets.
- [Loox](https://loox.io) - Photo- and video-first product reviews plus referral and upsell widgets built for visual social proof.
- [LoyaltyLion](https://loyaltylion.com) - Loyalty and rewards platform with points, tiers and deep integrations for scaling Shopify brands.
- [PageFly](https://pagefly.io) - Drag-and-drop landing page builder with AI-assisted page generation and conversion-focused templates.
- [Rebuy](https://www.rebuyengine.com) - AI-powered personalization engine delivering upsells, cross-sells, smart carts and recommendations across the shopper journey.
- [Recharge](https://rechargepayments.com) - Subscription management platform powering recurring orders, customer portals and churn-reduction workflows.
- [Shopify App Bridge](https://shopify.dev/docs/api/app-bridge) - Library for building embedded apps inside the Shopify admin.
- [Shopify App Template (Remix)](https://github.com/Shopify/shopify-app-template-remix) - Official starter template for building Shopify apps with Remix.
- [Shopify Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout) - Customize the Shopify checkout with extensions.
- [Smile.io](https://smile.io) - Loyalty points, referral and VIP rewards programs that run inside Shopify storefronts without code.
- [Tapcart](https://tapcart.com) - No-code mobile app builder that turns Shopify stores into native iOS and Android shopping apps.
- [Tidio](https://www.tidio.com) - Live chat platform with the Lyro AI agent that autonomously answers support questions and drives sales.
- [Triple Whale](https://www.triplewhale.com) - AI analytics and attribution platform with Moby agents, unifying ad, store and profit data.
- [Upsell.com](https://upsell.com) - Post-purchase, checkout and thank-you-page upsell funnels (formerly ReConvert) that lift average order value.
- [Vitals](https://vitals.app) - 40+ conversion tools in one app, including reviews, bundles, upsells, wishlists and visitor replays.

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

- [Agentic Commerce for WooCommerce](https://wordpress.org/plugins/agentic-commerce-for-woocommerce/) - Makes products discoverable and buyable by AI assistants via an agent-readable catalog, JSON-LD schema, llms.txt support and cart deep links.
- [AutomateWoo](https://automatewoo.com/) - Marketing automation built on trigger/rule/action workflows, covering abandoned carts, follow-ups, SMS and win-back campaigns.
- [Elementor](https://elementor.com/) - Drag-and-drop WordPress page builder whose WooCommerce Builder designs product pages, cart and checkout without code.
- [Google for WooCommerce](https://woocommerce.com/products/google-listings-and-ads/) - Official extension syncing the product feed to Google Merchant Center for free listings and Performance Max campaigns.
- [Rank Math SEO](https://rankmath.com/) - SEO plugin with a dedicated WooCommerce module adding product schema, sitemaps and built-in Content AI.
- [WooCommerce Bookings](https://woocommerce.com/products/woocommerce-bookings/) - Official extension for selling appointments, reservations, services and rentals with availability rules.
- [WooCommerce Extensions Marketplace](https://woocommerce.com/products/) - Directory of official and third-party WooCommerce extensions.
- [WooCommerce Product Add-Ons](https://woocommerce.com/products/product-add-ons/) - Official extension for product personalization via paid or free options such as text inputs, checkboxes and file uploads.
- [WooCommerce Stripe Payment Gateway](https://woocommerce.com/products/stripe/) - Free official gateway accepting cards, Apple Pay, Google Pay and local payment methods via Stripe.
- [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) - Recurring-revenue extension supporting flexible billing schedules, automatic rebilling and 25+ payment gateways.
- [WooPayments](https://woocommerce.com/products/woopayments/) - Native payment solution with in-dashboard management, multi-currency support, WooPay express checkout and fraud protection.
- [WP Rocket](https://wp-rocket.me/) - Caching and performance plugin with WooCommerce-aware defaults that automatically exclude cart, checkout and account pages.
- [WPML](https://wpml.org/) - Multilingual plugin whose WooCommerce module translates products, categories and checkout while enabling multi-currency selling.

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

## Amazon

Seller tooling and Amazon's own agent-facing APIs, as the marketplace shifts from Rufus to full shopping agents. 📚 [Further reading](articles/amazon.md).

- [Amazon Ads MCP Server](https://advertising.amazon.com/API/docs/en-us/mcp/mcp-overview) - Official Amazon MCP server (open beta) letting AI agents create campaigns, optimize bids and pull reports through the Amazon Ads API.
- [Amazon Selling Partner API](https://developer-docs.amazon.com/sp-api) - Official REST API suite for programmatic access to listings, orders, inventory, pricing and finances — the foundation for agent-driven seller automation.
- [Aura](https://goaura.com/) - AI-powered repricer whose Maven engine uses game-theory strategies to win the Buy Box in as little as 10 seconds.
- [FeedbackWhiz](https://www.feedbackwhiz.com/) - Review and feedback automation that triggers compliant review requests and monitors reviews and account alerts.
- [Helium 10](https://www.helium10.com/) - All-in-one seller suite covering product research, keyword tracking, AI-assisted listing optimization and PPC automation.
- [Jungle Scout](https://www.junglescout.com/) - Product research and market intelligence platform with AI-assisted opportunity finding, sales estimates and keyword data.
- [Pacvue](https://pacvue.com/) - Enterprise commerce-media platform whose Pacvue Agent applies agentic AI to retail media across Amazon, Walmart and 100+ marketplaces.
- [Perpetua](https://perpetua.io/) - Goal-based advertising software using AI ad engines to automate bidding for Sponsored Products, Brands, Display and DSP.
- [Quartile](https://www.quartile.com/) - AI-driven ad optimization automating Amazon PPC and DSP bids in real time using Amazon Marketing Stream.
- [Sellerboard](https://sellerboard.com/) - Real-time profit analytics for FBA sellers with PPC automation, restock alerts and reimbursement recovery.
- [SmartScout](https://www.smartscout.com/) - Market intelligence platform with brand, seller and product databases plus an AI Visibility Monitor tracking how often products are recommended by assistants like ChatGPT.
- [VOC AI](https://www.voc.ai/) - AI voice-of-customer platform analyzing Amazon reviews for sentiment and product insights, exposed via REST API, SDK and an MCP server.

## Dropshipping & Sourcing

Supplier networks, fulfillment automation and print-on-demand for lean commerce operations. 📚 [Further reading](articles/dropshipping.md).

- [AutoDS](https://www.autods.com) - All-in-one dropshipping automation platform with AI product sourcing, price/stock monitoring and automated fulfillment across major suppliers.
- [CJdropshipping](https://cjdropshipping.com) - Product sourcing and fulfillment network with global warehouses, POD services and direct Shopify/TikTok Shop integration.
- [Dropship.io](https://www.dropship.io) - Product research tool that tracks real revenue of live Shopify stores to validate winning products before you sell them.
- [DSers](https://www.dsers.com) - Official AliExpress dropshipping partner for bulk order placement, supplier optimization and inventory syncing.
- [Gelato](https://www.gelato.com) - Global print-on-demand platform routing orders to 130+ local print partners in 30+ countries to cut shipping times.
- [Minea](https://www.minea.com) - Ad-intelligence and product research tool indexing 900M+ ads across Facebook, TikTok and Pinterest to surface trending products.
- [Printful](https://www.printful.com) - Print-on-demand fulfillment with in-house printing and embroidery for 400+ custom products, integrated with all major platforms.
- [Printify](https://printify.com) - Print-on-demand marketplace connecting merchants to a worldwide network of print providers offering 1,300+ products.
- [Sell The Trend](https://www.sellthetrend.com) - AI-powered dropshipping suite combining winning-product discovery, supplier data, store automation and ad research.
- [Spocket](https://www.spocket.co) - Supplier network focused on vetted US and EU dropshipping suppliers for faster shipping, with one-click product import.
- [Zendrop](https://www.zendrop.com) - Dropshipping fulfillment platform with product sourcing, US-based shipping, custom branding and print-on-demand.

## Payments, Checkout & Tax

📚 [Further reading](articles/payments-checkout.md).

- [Adyen](https://www.adyen.com) - Global payments platform with unified commerce APIs.
- [Braintree](https://www.paypal.com/us/braintree) - PayPal's global payment processing with drop-in UI, vaulting and split payments.
- [Checkout.com](https://www.checkout.com) - Unified global payment processing with fraud tools and detailed APIs.
- [Firmly](https://www.firmly.ai/) - Unified integration connecting merchants to AI agents across UCP, ACP, MCP and AP2, powering native checkout inside Perplexity shopping.
- [Mastercard Agent Pay](https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html) - Agentic payments technology using tokenized agent credentials so AI agents can transact securely on the Mastercard network.
- [Mollie](https://www.mollie.com) - European payment processor supporting 40+ local and global payment methods.
- [Paddle](https://www.paddle.com) - Merchant-of-record payments and checkout for software and digital goods.
- [PayPal Developer](https://developer.paypal.com) - APIs and SDKs for accepting PayPal payments.
- [Razorpay](https://razorpay.com) - India-focused payment gateway with UPI, cards, wallets and instant settlements.
- [Rye](https://rye.com/) - Universal checkout API letting AI agents purchase from any online merchant with just a product URL and a tokenized payment method.
- [Square](https://squareup.com) - Omnichannel payments and POS with developer APIs.
- [Stripe](https://stripe.com) - Payments infrastructure for online businesses.
- [Visa Intelligent Commerce](https://corporate.visa.com/en/products/intelligent-commerce.html) - Visa's platform enabling AI agents to find and buy with tokenized credentials, agent authentication and spend controls.

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

- [Alhena](https://alhena.ai) - AI visibility tracking for product brands — see how products appear across ChatGPT, Gemini and Perplexity shopping answers.
- [Attentive](https://www.attentive.com) - SMS and email marketing with list growth and automation for retail brands.
- [Ecommerce AI Visibility Engine](https://github.com/MentionNetwork/ecommerce-ai-visibility-engine) - Open-source engine measuring how AI assistants recommend your store and products, ranked against competing retailers.
- [GEO Rise](https://georise.app) - Shopify app scoring every product 0–100 on AI readability, then checking ChatGPT, Perplexity and Claude to record who gets recommended.
- [Klaviyo](https://www.klaviyo.com) - Email and SMS marketing automation built for ecommerce.
- [llms.txt](https://llmstxt.org) - Proposed standard for a machine-readable file that helps LLMs understand and use website content.
- [Mailchimp](https://mailchimp.com) - Email marketing, automation and audience management.
- [Mention Network](https://mention.network) - Measure and improve how your brand and store appear across AI answer engines (GEO / AI visibility).
- [Meridian](https://apps.shopify.com/meridian) - Shopify app tracking where products and brand appear in ChatGPT, Google AI and other AI-driven search, with sentiment and competitor monitoring.
- [Microsoft Copilot Merchant Program](https://www.microsoft.com/en-us/microsoft-copilot/blog/2025/04/18/introducing-the-copilot-merchant-program/) - Free program surfacing merchant catalogs, price alerts and in-app checkout inside Microsoft Copilot.
- [Okendo](https://www.okendo.io) - Customer reviews, ratings and UGC for direct-to-consumer brands.
- [Omnisend](https://www.omnisend.com) - Email, SMS and push marketing automation built for ecommerce.
- [Otterly](https://otterly.ai) - AI search monitoring for brand mentions and citations across ChatGPT, Perplexity and Google AI Overviews.
- [Postscript](https://postscript.io) - SMS marketing built specifically for Shopify merchants.
- [Profound](https://www.tryprofound.com) - Enterprise answer-engine-optimization platform tracking brand visibility across major AI assistants.
- [Refersion](https://www.refersion.com) - Affiliate and influencer marketing program management for ecommerce.
- [Yotpo](https://www.yotpo.com) - Reviews, loyalty and referrals for ecommerce brands.

## Related Awesome Lists

- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - A curated list of Model Context Protocol servers.
- [awesome-shopify](https://github.com/julionc/awesome-shopify) - A curated list of Shopify resources and open-source projects.

## Contributing

Contributions are welcome! Read the [contribution guidelines](contributing.md) first.

---

Maintained by the team at [Mention Network](https://github.com/MentionNetwork), building AI visibility tools for ecommerce.
