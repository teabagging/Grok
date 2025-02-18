import{_ as n,c as a,b as e,o as l}from"./chunks/framework.B1z0IdBH.js";const d=JSON.parse('{"title":"README","description":"","frontmatter":{},"headers":[{"level":2,"title":"STEP1.","slug":"step1","link":"#step1","children":[]},{"level":2,"title":"STEP 2","slug":"step-2","link":"#step-2","children":[]},{"level":2,"title":"STEP 3","slug":"step-3","link":"#step-3","children":[]}],"relativePath":"guide/solana-agent-kit/README.md","filePath":"guide/solana-agent-kit/README.md"}'),p={name:"guide/solana-agent-kit/README.md"};function o(t,s,r,c,i,E){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="readme" tabindex="-1">README <a class="header-anchor" href="#readme" aria-label="Permalink to &quot;README&quot;">​</a></h1><hr><p>An open-source toolkit for connecting AI agents to Solana protocols. Now, any agent, using any model can autonomously perform 60+ Solana actions: ‍</p><h2 id="step1" tabindex="-1">STEP1. <a class="header-anchor" href="#step1" aria-label="Permalink to &quot;STEP1.&quot;">​</a></h2><p>Apply a token from <a href="https://platform.deepseek.com/" target="_blank" rel="noreferrer">deepseek open platform</a></p><h2 id="step-2" tabindex="-1">STEP 2 <a class="header-anchor" href="#step-2" aria-label="Permalink to &quot;STEP 2&quot;">​</a></h2><p>Intialize the DeepSeek LLM</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>import { ChatDeepSeek } from &quot;@langchain/deepseek&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const deepseek = new ChatDeepSeek({</span></span>
<span class="line"><span>  model: &quot;deepseek-chat&quot;,</span></span>
<span class="line"><span>  temperature: 0,</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>‍</p><h2 id="step-3" tabindex="-1">STEP 3 <a class="header-anchor" href="#step-3" aria-label="Permalink to &quot;STEP 3&quot;">​</a></h2><p>Intialize the Solana Agent Kit with DeepSeek</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> solanaAgent</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> SolanaAgentKit</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.env.</span><span style="color:#79B8FF;">SOLANA_PRIVATE_KEY</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.env.</span><span style="color:#79B8FF;">RPC_URL</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    OPENAI_API_KEY: process.env.</span><span style="color:#79B8FF;">OPENAI_API_KEY</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    HELIUS_API_KEY: process.env.</span><span style="color:#79B8FF;">HELIUS_API_KEY</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    PERPLEXITY_API_KEY: process.env.</span><span style="color:#79B8FF;">PERPLEXITY_API_KEY</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tools</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createSolanaTools</span><span style="color:#E1E4E8;">(solanaAgent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> agent</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createReactAgent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  llm: deepseek,</span></span>
<span class="line"><span style="color:#E1E4E8;">  tools,</span></span>
<span class="line"><span style="color:#E1E4E8;">  checkpointSaver: memory,</span></span>
<span class="line"><span style="color:#E1E4E8;">  messageModifier: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    You are a helpful agent that can interact onchain using the Solana Agent Kit. You are</span></span>
<span class="line"><span style="color:#9ECBFF;">    empowered to interact onchain using your tools. If you ever need funds, you can request them from the</span></span>
<span class="line"><span style="color:#9ECBFF;">    faucet. If not, you can provide your wallet details and request funds from the user. If there is a 5XX</span></span>
<span class="line"><span style="color:#9ECBFF;">    (internal) HTTP error code, ask the user to try again later. If someone asks you to do something you</span></span>
<span class="line"><span style="color:#9ECBFF;">    can&#39;t do with your currently available tools, you must say so, and encourage them to implement it</span></span>
<span class="line"><span style="color:#9ECBFF;">    themselves using the Solana Agent Kit, recommend they go to https://www.solanaagentkit.xyz for more information. Be</span></span>
<span class="line"><span style="color:#9ECBFF;">    concise and helpful with your responses. Refrain from restating your tools&#39; descriptions unless it is explicitly requested.</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> stream</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#E1E4E8;"> agent.</span><span style="color:#B392F0;">stream</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { messages: [</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> HumanMessage</span><span style="color:#E1E4E8;">(userInput)] },</span></span>
<span class="line"><span style="color:#E1E4E8;">  config,</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre></div><p>More guides can be found in the <a href="https://docs.solanaagentkit.xyz/v0/introduction" target="_blank" rel="noreferrer">Solana Agent Kit</a></p><p>‍</p>`,14)]))}const u=n(p,[["render",o]]);export{d as __pageData,u as default};
