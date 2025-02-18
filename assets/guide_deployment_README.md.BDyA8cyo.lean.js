import{_ as n,c as e,b as a,a as o,o as l}from"./chunks/framework.B1z0IdBH.js";const d=JSON.parse('{"title":"vLLM","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Offline Batched Inference","slug":"offline-batched-inference","link":"#offline-batched-inference","children":[]},{"level":2,"title":"OpenAI-Compatible API Service","slug":"openai-compatible-api-service","link":"#openai-compatible-api-service","children":[{"level":3,"title":"Tool Use","slug":"tool-use","link":"#tool-use","children":[]},{"level":3,"title":"Structured/JSON Output","slug":"structured-json-output","link":"#structured-json-output","children":[]}]},{"level":2,"title":"Multi-GPU Distributed Serving","slug":"multi-gpu-distributed-serving","link":"#multi-gpu-distributed-serving","children":[]},{"level":2,"title":"Extended Context Support","slug":"extended-context-support","link":"#extended-context-support","children":[]},{"level":2,"title":"Serving Quantized Models","slug":"serving-quantized-models","link":"#serving-quantized-models","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"relativePath":"guide/deployment/README.md","filePath":"guide/deployment/README.md"}'),t={name:"guide/deployment/README.md"};function p(r,s,c,i,u,y){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="vllm" tabindex="-1">vLLM <a class="header-anchor" href="#vllm" aria-label="Permalink to &quot;vLLM&quot;">​</a></h1><p>We recommend you trying <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noreferrer">vLLM</a> for your deployment of Qwen. It is simple to use, and it is fast with state-of-the-art serving throughput, efficient management of attention key value memory with PagedAttention, continuous batching of input requests, optimized CUDA kernels, etc. To learn more about vLLM, please refer to the <a href="https://arxiv.org/abs/2309.06180" target="_blank" rel="noreferrer">paper</a> and <a href="https://vllm.readthedocs.io/" target="_blank" rel="noreferrer">documentation</a>.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>By default, you can install <code>vllm</code> by pip in a clean environment:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> vllm</span></span></code></pre></div><p>Please note that the prebuilt <code>vllm</code> has strict dependencies on <code>torch</code> and its CUDA versions. Check the note in the official document for installation (<a href="https://docs.vllm.ai/en/latest/getting_started/installation.html" target="_blank" rel="noreferrer">link</a>) for some help. We also advise you to install ray by <code>pip install ray</code> for distributed serving.</p><h2 id="offline-batched-inference" tabindex="-1">Offline Batched Inference <a class="header-anchor" href="#offline-batched-inference" aria-label="Permalink to &quot;Offline Batched Inference&quot;">​</a></h2><p>Models supported by Qwen2.5 codes are supported by vLLM. The simplest usage of vLLM is offline batched inference as demonstrated below.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> transformers </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AutoTokenizer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> vllm </span><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> LLM</span><span style="color:#E1E4E8;">, SamplingParams</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Initialize the tokenizer</span></span>
<span class="line"><span style="color:#E1E4E8;">tokenizer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> AutoTokenizer.from_pretrained(</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-7B-Instruct&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Pass the default decoding hyperparameters of Qwen2.5-7B-Instruct</span></span>
<span class="line"><span style="color:#6A737D;"># max_tokens is for the maximum length for generation.</span></span>
<span class="line"><span style="color:#E1E4E8;">sampling_params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> SamplingParams(</span><span style="color:#FFAB70;">temperature</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">top_p</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">repetition_penalty</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1.05</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max_tokens</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">512</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Input the model name or path. Can be GPTQ or AWQ models.</span></span>
<span class="line"><span style="color:#E1E4E8;">llm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LLM(</span><span style="color:#FFAB70;">model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-7B-Instruct&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Prepare your prompts</span></span>
<span class="line"><span style="color:#E1E4E8;">prompt </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;Tell me something about large language models.&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">messages </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;system&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: prompt}</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tokenizer.apply_chat_template(</span></span>
<span class="line"><span style="color:#E1E4E8;">    messages,</span></span>
<span class="line"><span style="color:#FFAB70;">    tokenize</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    add_generation_prompt</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># generate outputs</span></span>
<span class="line"><span style="color:#E1E4E8;">outputs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> llm.generate([text], sampling_params)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Print the outputs.</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> output </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> outputs:</span></span>
<span class="line"><span style="color:#E1E4E8;">    prompt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output.prompt</span></span>
<span class="line"><span style="color:#E1E4E8;">    generated_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output.outputs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].text</span></span>
<span class="line"><span style="color:#79B8FF;">    print</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">f</span><span style="color:#9ECBFF;">&quot;Prompt: </span><span style="color:#79B8FF;">{</span><span style="color:#E1E4E8;">prompt</span><span style="color:#F97583;">!r</span><span style="color:#79B8FF;">}</span><span style="color:#9ECBFF;">, Generated text: </span><span style="color:#79B8FF;">{</span><span style="color:#E1E4E8;">generated_text</span><span style="color:#F97583;">!r</span><span style="color:#79B8FF;">}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><h2 id="openai-compatible-api-service" tabindex="-1">OpenAI-Compatible API Service <a class="header-anchor" href="#openai-compatible-api-service" aria-label="Permalink to &quot;OpenAI-Compatible API Service&quot;">​</a></h2><p>It is easy to build an OpenAI-compatible API service with vLLM, which can be deployed as a server that implements OpenAI API protocol. By default, it starts the server at <code>http://localhost:8000</code>. You can specify the address with <code>--host</code> and <code>--port</code> arguments. Run the command as shown below:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">vllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct</span></span></code></pre></div><p>You don&#39;t need to worry about chat template as it by default uses the chat template provided by the tokenizer.</p><p>Then, you can use the <a href="https://platform.openai.com/docs/api-reference/chat/completions/create" target="_blank" rel="noreferrer">create chat interface</a> to communicate with Qwen:</p>`,14),o("p",{"tab-set":""},"::::",-1),a(`<p>:::{tab-item} curl</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> http://localhost:8000/v1/chat/completions</span><span style="color:#79B8FF;"> -H</span><span style="color:#9ECBFF;"> &quot;Content-Type: application/json&quot;</span><span style="color:#79B8FF;"> -d</span><span style="color:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;model&quot;: &quot;Qwen/Qwen2.5-7B-Instruct&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;messages&quot;: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;},</span></span>
<span class="line"><span style="color:#9ECBFF;">    {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Tell me something about large language models.&quot;}</span></span>
<span class="line"><span style="color:#9ECBFF;">  ],</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;temperature&quot;: 0.7,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;top_p&quot;: 0.8,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;repetition_penalty&quot;: 1.05,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;max_tokens&quot;: 512</span></span>
<span class="line"><span style="color:#9ECBFF;">}&#39;</span></span></code></pre></div><p>:::</p><p>:::{tab-item} Python You can use the API client with the <code>openai</code> Python package as shown below:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> openai </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> OpenAI</span></span>
<span class="line"><span style="color:#6A737D;"># Set OpenAI&#39;s API key and API base to use vLLM&#39;s API server.</span></span>
<span class="line"><span style="color:#E1E4E8;">openai_api_key </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;EMPTY&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">openai_api_base </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;http://localhost:8000/v1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> OpenAI(</span></span>
<span class="line"><span style="color:#FFAB70;">    api_key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">openai_api_key,</span></span>
<span class="line"><span style="color:#FFAB70;">    base_url</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">openai_api_base,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">chat_response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.chat.completions.create(</span></span>
<span class="line"><span style="color:#FFAB70;">    model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-7B-Instruct&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    messages</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;system&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Tell me something about large language models.&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#FFAB70;">    temperature</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    top_p</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    max_tokens</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">512</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    extra_body</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;repetition_penalty&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.05</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Chat response:&quot;</span><span style="color:#E1E4E8;">, chat_response)</span></span></code></pre></div><p>::::</p><p>:::{tip} The OpenAI-compatible server in <code>vllm</code> comes with <a href="https://github.com/vllm-project/vllm/blob/v0.5.2/vllm/entrypoints/openai/protocol.py#L130" target="_blank" rel="noreferrer">a default set of sampling parameters</a>, which are not suitable for Qwen2.5 models and prone to repetition. We advise you to always pass sampling parameters to the API. :::</p><h3 id="tool-use" tabindex="-1">Tool Use <a class="header-anchor" href="#tool-use" aria-label="Permalink to &quot;Tool Use&quot;">​</a></h3><p>The OpenAI-compatible API could be configured to support tool call of Qwen2.5. For information, please refer to <a href="./../framework/function_call.html#vllm">our guide on Function Calling</a>.</p><h3 id="structured-json-output" tabindex="-1">Structured/JSON Output <a class="header-anchor" href="#structured-json-output" aria-label="Permalink to &quot;Structured/JSON Output&quot;">​</a></h3><p>Qwen 2.5, when used with vLLM, supports structured/JSON output. Please refer to <a href="https://docs.vllm.ai/en/stable/serving/openai_compatible_server.html#extra-parameters-for-chat-api" target="_blank" rel="noreferrer">vllm&#39;s documentation</a> for the <code>guided_json</code> parameters. Besides, it is also recommended to instruct the model to generate the specific format in the system message or in your prompt.</p><h2 id="multi-gpu-distributed-serving" tabindex="-1">Multi-GPU Distributed Serving <a class="header-anchor" href="#multi-gpu-distributed-serving" aria-label="Permalink to &quot;Multi-GPU Distributed Serving&quot;">​</a></h2><p>To scale up your serving throughput, distributed serving helps you by leveraging more GPU devices. Besides, for large models like <code>Qwen2.5-72B-Instruct</code>, it is impossible to serve it on a single GPU. Here, we demonstrate how to run <code>Qwen2.5-72B-Instruct</code> with tensor parallelism just by passing in the argument <code>tensor_parallel_size</code>:</p><p>::::{tab-set} :::{tab-item} Offline</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> vllm </span><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> LLM</span><span style="color:#E1E4E8;">, SamplingParams</span></span>
<span class="line"><span style="color:#E1E4E8;">llm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LLM(</span><span style="color:#FFAB70;">model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-72B-Instruct&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">tensor_parallel_size</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>:::</p><p>:::{tab-item} API</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">vllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-72B-Instruct</span><span style="color:#79B8FF;"> --tensor-parallel-size</span><span style="color:#79B8FF;"> 4</span></span></code></pre></div><p>::: ::::</p><h2 id="extended-context-support" tabindex="-1">Extended Context Support <a class="header-anchor" href="#extended-context-support" aria-label="Permalink to &quot;Extended Context Support&quot;">​</a></h2><p>By default, the context length for Qwen2.5 models are set to 32,768 tokens. To handle extensive inputs exceeding 32,768 tokens, we utilize <a href="https://arxiv.org/abs/2309.00071" target="_blank" rel="noreferrer">YaRN</a>, a technique for enhancing model length extrapolation, ensuring optimal performance on lengthy texts.</p><p>vLLM supports YARN and it can be enabled by add a <code>rope_scaling</code> field to the <code>config.json</code> file of the model. For example,</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ...,</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;rope_scaling&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;factor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;original_max_position_embeddings&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">32768</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">    &quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;yarn&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>However, vLLM only supports <em>static</em> YARN at present, which means the scaling factor remains constant regardless of input length, potentially impacting performance on shorter texts. We advise adding the <code>rope_scaling</code> configuration only when processing long contexts is required.</p><h2 id="serving-quantized-models" tabindex="-1">Serving Quantized Models <a class="header-anchor" href="#serving-quantized-models" aria-label="Permalink to &quot;Serving Quantized Models&quot;">​</a></h2><p>vLLM supports different types of quantized models, including AWQ, GPTQ, SqueezeLLM, etc. Here we show how to deploy AWQ and GPTQ models. The usage is almost the same as above except for an additional argument for quantization. For example, to run an AWQ model. e.g., <code>Qwen2.5-7B-Instruct-AWQ</code>:</p><p>::::{tab-set} :::{tab-item} Offline</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> vllm </span><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> LLM</span><span style="color:#E1E4E8;">, SamplingParams</span></span>
<span class="line"><span style="color:#E1E4E8;">llm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LLM(</span><span style="color:#FFAB70;">model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-7B-Instruct-AWQ&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quantization</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;awq&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>:::</p><p>:::{tab-item} API</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">vllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct-AWQ</span><span style="color:#79B8FF;"> --quantization</span><span style="color:#9ECBFF;"> awq</span></span></code></pre></div><p>::: ::::</p><p>or GPTQ models like <code>Qwen2.5-7B-Instruct-GPTQ-Int4</code>:</p><p>::::{tab-set} :::{tab-item} Offline</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> vllm </span><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> LLM</span><span style="color:#E1E4E8;">, SamplingParams</span></span>
<span class="line"><span style="color:#E1E4E8;">llm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LLM(</span><span style="color:#FFAB70;">model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quantization</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;gptq&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>:::</p><p>:::{tab-item} API</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">vllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4</span><span style="color:#79B8FF;"> --quantization</span><span style="color:#9ECBFF;"> gptq</span></span></code></pre></div><p>::: ::::</p><p>Additionally, vLLM supports the combination of AWQ or GPTQ models with KV cache quantization, namely FP8 E5M2 KV Cache. For example,</p><p>::::{tab-set} :::{tab-item} Offline</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> vllm </span><span style="color:#F97583;">import</span><span style="color:#79B8FF;"> LLM</span><span style="color:#E1E4E8;">, SamplingParams</span></span>
<span class="line"><span style="color:#E1E4E8;">llm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LLM(</span><span style="color:#FFAB70;">model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">quantization</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;gptq&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">kv_cache_dtype</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fp8_e5m2&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>:::</p><p>:::{tab-item} API</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">vllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4</span><span style="color:#79B8FF;"> --quantization</span><span style="color:#9ECBFF;"> gptq</span><span style="color:#79B8FF;"> --kv-cache-dtype</span><span style="color:#9ECBFF;"> fp8_e5m2</span></span></code></pre></div><p>::: ::::</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>You may encounter OOM issues that are pretty annoying. We recommend two arguments for you to make some fix.</p><ul><li>The first one is <code>--max-model-len</code>. Our provided default <code>max_position_embedding</code> is <code>32768</code> and thus the maximum length for the serving is also this value, leading to higher requirements of memory. Reducing it to a proper length for yourself often helps with the OOM issue.</li><li>Another argument you can pay attention to is <code>--gpu-memory-utilization</code>. vLLM will pre-allocate this much GPU memory. By default, it is <code>0.9</code>. This is also why you find a vLLM service always takes so much memory. If you are in eager mode (by default it is not), you can level it up to tackle the OOM problem. Otherwise, CUDA Graphs are used, which will use GPU memory not controlled by vLLM, and you should try lowering it. If it doesn&#39;t work, you should try <code>--enforce-eager</code>, which may slow down infernece, or reduce the <code>--max-model-len</code>.</li></ul>`,49)]))}const F=n(t,[["render",p]]);export{d as __pageData,F as default};
