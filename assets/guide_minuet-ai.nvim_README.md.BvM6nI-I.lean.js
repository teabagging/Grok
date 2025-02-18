import{_ as n,c as a,b as l,o as p}from"./chunks/framework.B1z0IdBH.js";const u=JSON.parse('{"title":"Minuet AI","description":"","frontmatter":{},"headers":[],"relativePath":"guide/minuet-ai.nvim/README.md","filePath":"guide/minuet-ai.nvim/README.md"}'),o={name:"guide/minuet-ai.nvim/README.md"};function e(t,s,c,r,E,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="minuet-ai" tabindex="-1">Minuet AI <a class="header-anchor" href="#minuet-ai" aria-label="Permalink to &quot;Minuet AI&quot;">​</a></h1><p>Minuet AI: Dance with Intelligence in Your Code 💃.</p><p><code>Minuet-ai</code> brings the grace and harmony of a minuet to your coding process. Just as dancers move during a minuet.</p><h1 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h1><ul><li>AI-powered code completion with dual modes: <ul><li>Specialized prompts and various enhancements for chat-based LLMs on code completion tasks.</li><li>Fill-in-the-middle (FIM) completion for compatible models (DeepSeek, Codestral, Qwen, and others).</li></ul></li><li>Support for multiple AI providers (OpenAI, Claude, Gemini, Codestral, Ollama, and OpenAI-compatible services).</li><li>Customizable configuration options.</li><li>Streaming support to enable completion delivery even with slower LLMs.</li><li>Support <code>nvim-cmp</code>, <code>blink-cmp</code>, <code>virtual text</code> frontend.</li></ul><h1 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h1><ul><li>Neovim 0.10+.</li><li><a href="https://github.com/nvim-lua/plenary.nvim" target="_blank" rel="noreferrer">plenary.nvim</a></li><li>optional: <a href="https://github.com/hrsh7th/nvim-cmp" target="_blank" rel="noreferrer">nvim-cmp</a></li><li>optional: <a href="https://github.com/Saghen/blink.cmp" target="_blank" rel="noreferrer">blink.cmp</a></li><li>An API key for at least one of the supported AI providers</li></ul><h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><p><strong>Lazy.nvim</strong>:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">specs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;milanglacier/minuet-ai.nvim&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">        config</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">            require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">                -- Your configuration options here</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#F97583;">        end</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&#39;nvim-lua/plenary.nvim&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">    -- optional, if you are using virtual-text frontend, nvim-cmp is not</span></span>
<span class="line"><span style="color:#6A737D;">    -- required.</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&#39;hrsh7th/nvim-cmp&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">    -- optional, if you are using virtual-text frontend, blink is not required.</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&#39;Saghen/blink.cmp&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><strong>Rocks.nvim</strong>:</p><p><code>Minuet</code> is available on luarocks.org. Simply run <code>Rocks install minuet-ai.nvim</code> to install it like any other luarocks package.</p><p><strong>Setting up with virtual text</strong>:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    virtualtext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        auto_trigger_ft </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        keymap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            -- accept whole completion</span></span>
<span class="line"><span style="color:#E1E4E8;">            accept </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-A&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- accept one line</span></span>
<span class="line"><span style="color:#E1E4E8;">            accept_line </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-a&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- accept n lines (prompts for number)</span></span>
<span class="line"><span style="color:#6A737D;">            -- e.g. &quot;A-z 2 CR&quot; will accept 2 lines</span></span>
<span class="line"><span style="color:#E1E4E8;">            accept_n_lines </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-z&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- Cycle to prev completion item, or manually invoke completion</span></span>
<span class="line"><span style="color:#E1E4E8;">            prev </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-[&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- Cycle to next completion item, or manually invoke completion</span></span>
<span class="line"><span style="color:#E1E4E8;">            next </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-]&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dismiss </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-e&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><strong>Setting up with nvim-cmp</strong>:</p><details><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmp&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#6A737D;">             -- Include minuet as a source to enable autocompletion</span></span>
<span class="line"><span style="color:#E1E4E8;">            { name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;minuet&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">            -- and your other sources</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    performance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        -- It is recommended to increase the timeout duration due to</span></span>
<span class="line"><span style="color:#6A737D;">        -- the typically slower response speed of LLMs compared to</span></span>
<span class="line"><span style="color:#6A737D;">        -- other completion sources. This is not needed when you only</span></span>
<span class="line"><span style="color:#6A737D;">        -- need manual completion.</span></span>
<span class="line"><span style="color:#E1E4E8;">        fetching_timeout </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- If you wish to invoke completion manually,</span></span>
<span class="line"><span style="color:#6A737D;">-- The following configuration binds \`A-y\` key</span></span>
<span class="line"><span style="color:#6A737D;">-- to invoke the configuration manually.</span></span>
<span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmp&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mapping </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&quot;&lt;A-y&gt;&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">make_cmp_map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">        -- and your other keymappings</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>Setting up with blink-cmp</strong>:</p><details><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;blink-cmp&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    keymap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        -- Manually invoke minuet completion.</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&#39;&lt;A-y&gt;&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">make_blink_map</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    sources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">         -- Enable minuet for autocomplete</span></span>
<span class="line"><span style="color:#E1E4E8;">        default </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#9ECBFF;">&#39;lsp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;buffer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;snippets&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;minuet&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">        -- For manual completion only, remove &#39;minuet&#39; from default</span></span>
<span class="line"><span style="color:#E1E4E8;">        providers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            minuet </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;minuet&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                module </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;minuet.blink&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                score_offset </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">-- Gives minuet higher priority among suggestions</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    -- Recommended to avoid unnecessary request</span></span>
<span class="line"><span style="color:#E1E4E8;">    completion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { trigger </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { prefetch_on_insert </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>LLM Provider Examples</strong>:</p><p><strong>Deepseek</strong>:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">-- you can use deepseek with both openai_fim_compatible or openai_compatible provider</span></span>
<span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    provider </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;openai_fim_compatible&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    provider_options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        openai_fim_compatible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            api_key </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;DEEPSEEK_API_KEY&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;deepseek&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            optional </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                max_tokens </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                top_p </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- or</span></span>
<span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    provider </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;openai_compatible&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    provider_options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        openai_compatible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_point </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;https://api.deepseek.com/v1/chat/completions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            api_key </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;DEEPSEEK_API_KEY&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;deepseek&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            optional </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                max_tokens </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 256</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                top_p </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,21)]))}const F=n(o,[["render",e]]);export{u as __pageData,F as default};
