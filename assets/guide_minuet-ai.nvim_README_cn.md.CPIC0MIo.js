import{_ as n,c as a,b as l,o as p}from"./chunks/framework.B1z0IdBH.js";const F=JSON.parse('{"title":"Minuet AI","description":"","frontmatter":{},"headers":[],"relativePath":"guide/minuet-ai.nvim/README_cn.md","filePath":"guide/minuet-ai.nvim/README_cn.md"}'),o={name:"guide/minuet-ai.nvim/README_cn.md"};function e(E,s,c,t,r,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="minuet-ai" tabindex="-1">Minuet AI <a class="header-anchor" href="#minuet-ai" aria-label="Permalink to &quot;Minuet AI&quot;">​</a></h1><p>Minuet AI：在您的代码中翩翩起舞，挥洒智能 💃。</p><p><code>Minuet-ai</code> 将小步舞曲的优雅与和谐带入您的编码流程。正如舞者在小步舞曲中舞动一样。</p><h1 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h1><ul><li>基于 AI 的代码补全，提供双重模式： <ul><li>针对代码补全任务，为基于聊天的 LLMs 提供专门的提示和各种增强功能。</li><li>针对兼容的模型（DeepSeek、Codestral、Qwen 等）提供中间填充 (FIM) 补全。</li></ul></li><li>支持多种 AI 提供商（OpenAI、Claude、Gemini、Codestral、Ollama 和兼容 OpenAI 的服务）。</li><li>可自定义配置选项。</li><li>支持流式传输，即使使用较慢的 LLMs 也能实现补全的交付。</li><li>支持 <code>nvim-cmp</code>、<code>blink-cmp</code>、<code>virtual text</code> 前端。</li></ul><h1 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h1><ul><li>Neovim 0.10+。</li><li><a href="https://github.com/nvim-lua/plenary.nvim" target="_blank" rel="noreferrer">plenary.nvim</a></li><li>可选： <a href="https://github.com/hrsh7th/nvim-cmp" target="_blank" rel="noreferrer">nvim-cmp</a></li><li>可选： <a href="https://github.com/Saghen/blink.cmp" target="_blank" rel="noreferrer">blink.cmp</a></li><li>至少一个受支持的 AI 提供商的 API 密钥</li></ul><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><p><strong>Lazy.nvim：</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">specs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &#39;milanglacier/minuet-ai.nvim&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">        config</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">            require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">                -- 在此处配置您的选项</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#F97583;">        end</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&#39;nvim-lua/plenary.nvim&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">    -- 可选，如果您使用 virtual-text 前端，则不需要 nvim-cmp。</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&#39;hrsh7th/nvim-cmp&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">    -- 可选，如果您使用 virtual-text 前端，则不需要 blink。</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&#39;Saghen/blink.cmp&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><strong>Rocks.nvim：</strong></p><p><code>Minuet</code> 可在 luarocks.org 上获取。只需运行 <code>Rocks install minuet-ai.nvim</code> 即可像安装其他 luarocks 包一样安装它。</p><p><strong>使用 virtual text 进行设置：</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    virtualtext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        auto_trigger_ft </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        keymap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">            -- 接受完整补全</span></span>
<span class="line"><span style="color:#E1E4E8;">            accept </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-A&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- 接受一行</span></span>
<span class="line"><span style="color:#E1E4E8;">            accept_line </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-a&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- 接受 n 行（提示输入数字）</span></span>
<span class="line"><span style="color:#6A737D;">            -- 例如，“A-z 2 CR”将接受 2 行</span></span>
<span class="line"><span style="color:#E1E4E8;">            accept_n_lines </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-z&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- 切换到上一个补全项，或手动调用补全</span></span>
<span class="line"><span style="color:#E1E4E8;">            prev </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-[&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">            -- 切换到下一个补全项，或手动调用补全</span></span>
<span class="line"><span style="color:#E1E4E8;">            next </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-]&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dismiss </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&lt;A-e&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><strong>使用 nvim-cmp 进行设置：</strong></p><details><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmp&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#6A737D;">             -- 包含 minuet 作为源以启用自动补全</span></span>
<span class="line"><span style="color:#E1E4E8;">            { name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;minuet&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">            -- 和您的其他来源</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    performance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        -- 建议增加超时时间，因为与其他补全来源相比，LLMs 的响应速度通常较慢。如果您只需要手动补全，则不需要此设置。</span></span>
<span class="line"><span style="color:#E1E4E8;">        fetching_timeout </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 如果你希望手动调用补全，</span></span>
<span class="line"><span style="color:#6A737D;">-- 以下配置将 \`A-y\` 键绑定到手动调用配置。</span></span>
<span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cmp&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mapping </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&quot;&lt;A-y&gt;&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">make_cmp_map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">        -- 和您的其他键映射</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>使用 blink-cmp 进行设置：</strong></p><details><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;blink-cmp&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">setup</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    keymap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">        -- 手动调用 minuet 补全。</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&#39;&lt;A-y&gt;&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;minuet&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#79B8FF;">make_blink_map</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    sources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">         -- 启用 minuet 进行自动补全</span></span>
<span class="line"><span style="color:#E1E4E8;">        default </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#9ECBFF;">&#39;lsp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;buffer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;snippets&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;minuet&#39; </span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">        -- 仅对于手动补全，从默认值中删除 &#39;minuet&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        providers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            minuet </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;minuet&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                module </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;minuet.blink&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                score_offset </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">-- 在建议中赋予 minuet 更高的优先级</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    -- 建议避免不必要的请求</span></span>
<span class="line"><span style="color:#E1E4E8;">    completion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { trigger </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { prefetch_on_insert </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div></details><p><strong>LLM 提供商示例：</strong></p><p><strong>Deepseek：</strong></p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">-- 你可以使用 openai_fim_compatible 或 openai_compatible 提供商来使用 deepseek</span></span>
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
<span class="line"><span style="color:#6A737D;">-- 或者</span></span>
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
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,21)]))}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
