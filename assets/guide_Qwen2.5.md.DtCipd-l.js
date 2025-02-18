import{_ as a,c as s,b as e,o}from"./chunks/framework.B1z0IdBH.js";const h=JSON.parse('{"title":"Qwen2.5","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"News","slug":"news","link":"#news","children":[]},{"level":2,"title":"Performance","slug":"performance","link":"#performance","children":[]},{"level":2,"title":"Quickstart","slug":"quickstart","link":"#quickstart","children":[{"level":3,"title":"🤗 Hugging Face Transformers","slug":"🤗-hugging-face-transformers","link":"#🤗-hugging-face-transformers","children":[]},{"level":3,"title":"🤖 ModelScope","slug":"🤖-modelscope","link":"#🤖-modelscope","children":[]},{"level":3,"title":"💻 Run locally","slug":"💻-run-locally","link":"#💻-run-locally","children":[]}]},{"level":2,"title":"Web UI","slug":"web-ui","link":"#web-ui","children":[]},{"level":2,"title":"Deployment","slug":"deployment","link":"#deployment","children":[{"level":3,"title":"vLLM","slug":"vllm","link":"#vllm","children":[]},{"level":3,"title":"SGLang","slug":"sglang","link":"#sglang","children":[]},{"level":3,"title":"OpenLLM","slug":"openllm","link":"#openllm","children":[]},{"level":3,"title":"Tool Use","slug":"tool-use","link":"#tool-use","children":[]}]},{"level":2,"title":"Finetuning","slug":"finetuning","link":"#finetuning","children":[]},{"level":2,"title":"License Agreement","slug":"license-agreement","link":"#license-agreement","children":[]},{"level":2,"title":"Citation","slug":"citation","link":"#citation","children":[]},{"level":2,"title":"Contact Us","slug":"contact-us","link":"#contact-us","children":[]}],"relativePath":"guide/Qwen2.5.md","filePath":"guide/Qwen2.5.md"}'),l={name:"guide/Qwen2.5.md"};function t(p,n,r,i,c,u){return o(),s("div",null,n[0]||(n[0]=[e(`<h1 id="qwen2-5" tabindex="-1">Qwen2.5 <a class="header-anchor" href="#qwen2-5" aria-label="Permalink to &quot;Qwen2.5&quot;">​</a></h1><p>Visit our Hugging Face or ModelScope organization (click links above), search checkpoints with names starting with <code>Qwen2.5-</code> or visit the <a href="https://huggingface.co/collections/Qwen/qwen25-66e81a666513e518adb90d9e" target="_blank" rel="noreferrer">Qwen2.5 collection</a>, and you will find all you need! Enjoy!</p><p>To learn more about Qwen2.5, feel free to read our documentation [<a href="https://qwen.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">EN</a>|<a href="https://qwen.readthedocs.io/zh-cn/latest/" target="_blank" rel="noreferrer">ZH</a>]. Our documentation consists of the following sections:</p><ul><li>Quickstart: the basic usages and demonstrations;</li><li>Inference: the guidance for the inference with transformers, including batch inference, streaming, etc.;</li><li>Run Locally: the instructions for running LLM locally on CPU and GPU, with frameworks like <code>llama.cpp</code> and <code>Ollama</code>;</li><li>Deployment: the demonstration of how to deploy Qwen for large-scale inference with frameworks like <code>vLLM</code>, <code>TGI</code>, etc.;</li><li>Quantization: the practice of quantizing LLMs with GPTQ, AWQ, as well as the guidance for how to make high-quality quantized GGUF files;</li><li>Training: the instructions for post-training, including SFT and RLHF (TODO) with frameworks like Axolotl, LLaMA-Factory, etc.</li><li>Framework: the usage of Qwen with frameworks for application, e.g., RAG, Agent, etc.</li><li>Benchmark: the statistics about inference speed and memory footprint (Available for Qwen2.5).</li></ul><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>In the past three months since Qwen2&#39;s release, numerous developers have built new models on the Qwen2 language models, providing us with valuable feedback. During this period, we have focused on creating smarter and more knowledgeable language models. Today, we are excited to introduce the latest addition to the Qwen family: <strong>Qwen2.5</strong>.</p><ul><li>Dense, easy-to-use, decoder-only language models, available in <strong>0.5B</strong>, <strong>1.5B</strong>, <strong>3B</strong>, <strong>7B</strong>, <strong>14B</strong>, <strong>32B</strong>, and <strong>72B</strong> sizes, and base and instruct variants.</li><li>Pretrained on our latest large-scale dataset, encompassing up to <strong>18T</strong> tokens.</li><li>Significant improvements in instruction following, generating long texts (over 8K tokens), understanding structured data (e.g, tables), and generating structured outputs especially JSON.</li><li>More resilient to the diversity of system prompts, enhancing role-play implementation and condition-setting for chatbots.</li><li>Context length support up to <strong>128K</strong> tokens and can generate up to <strong>8K</strong> tokens.</li><li>Multilingual support for over <strong>29</strong> languages, including Chinese, English, French, Spanish, Portuguese, German, Italian, Russian, Japanese, Korean, Vietnamese, Thai, Arabic, and more.</li></ul><h2 id="news" tabindex="-1">News <a class="header-anchor" href="#news" aria-label="Permalink to &quot;News&quot;">​</a></h2><ul><li>2024.09.19: We released the Qwen2.5 series. This time there are 3 extra model sizes: 3B, 14B, and 32B for more possibilities. Check our <a href="https://qwenlm.github.io/blog/qwen2.5" target="_blank" rel="noreferrer">blog</a> for more!</li><li>2024.06.06: We released the Qwen2 series. Check our <a href="https://qwenlm.github.io/blog/qwen2/" target="_blank" rel="noreferrer">blog</a>!</li><li>2024.03.28: We released the first MoE model of Qwen: Qwen1.5-MoE-A2.7B! Temporarily, only HF transformers and vLLM support the model. We will soon add the support of llama.cpp, mlx-lm, etc. Check our <a href="https://qwenlm.github.io/blog/qwen-moe/" target="_blank" rel="noreferrer">blog</a> for more information!</li><li>2024.02.05: We released the Qwen1.5 series.</li></ul><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h2><p>Detailed evaluation results are reported in this <a href="https://qwenlm.github.io/blog/qwen2.5/"> 📑 blog</a>.</p><p>For requirements on GPU memory and the respective throughput, see results <a href="https://qwen.readthedocs.io/en/latest/benchmark/speed_benchmark.html" target="_blank" rel="noreferrer">here</a> .</p><h2 id="quickstart" tabindex="-1">Quickstart <a class="header-anchor" href="#quickstart" aria-label="Permalink to &quot;Quickstart&quot;">​</a></h2><h3 id="🤗-hugging-face-transformers" tabindex="-1">🤗 Hugging Face Transformers <a class="header-anchor" href="#🤗-hugging-face-transformers" aria-label="Permalink to &quot;🤗 Hugging Face Transformers&quot;">​</a></h3><p>The latest version of <code>transformers</code> is recommended (at least 4.37.0). Here we show a code snippet to show you how to use the chat model with <code>transformers</code>:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> transformers </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AutoModelForCausalLM, AutoTokenizer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">model_name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;Qwen/Qwen2.5-7B-Instruct&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> AutoModelForCausalLM.from_pretrained(</span></span>
<span class="line"><span style="color:#E1E4E8;">    model_name,</span></span>
<span class="line"><span style="color:#FFAB70;">    torch_dtype</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;auto&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    device_map</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">tokenizer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> AutoTokenizer.from_pretrained(model_name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">prompt </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &quot;Give me a short introduction to large language model.&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">messages </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;system&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: prompt}</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tokenizer.apply_chat_template(</span></span>
<span class="line"><span style="color:#E1E4E8;">    messages,</span></span>
<span class="line"><span style="color:#FFAB70;">    tokenize</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    add_generation_prompt</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">model_inputs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tokenizer([text], </span><span style="color:#FFAB70;">return_tensors</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;pt&quot;</span><span style="color:#E1E4E8;">).to(model.device)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">generated_ids </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> model.generate(</span></span>
<span class="line"><span style="color:#F97583;">    **</span><span style="color:#E1E4E8;">model_inputs,</span></span>
<span class="line"><span style="color:#FFAB70;">    max_new_tokens</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">512</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">generated_ids </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    output_ids[</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(input_ids):] </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> input_ids, output_ids </span><span style="color:#F97583;">in</span><span style="color:#79B8FF;"> zip</span><span style="color:#E1E4E8;">(model_inputs.input_ids, generated_ids)</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tokenizer.batch_decode(generated_ids, </span><span style="color:#FFAB70;">skip_special_tokens</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span></code></pre></div><p>For quantized models, we advise you to use the GPTQ and AWQ correspondents, namely <code>Qwen2.5-7B-Instruct-GPTQ-Int8</code> and <code>Qwen2.5-7B-Instruct-AWQ</code>.</p><h3 id="🤖-modelscope" tabindex="-1">🤖 ModelScope <a class="header-anchor" href="#🤖-modelscope" aria-label="Permalink to &quot;🤖 ModelScope&quot;">​</a></h3><p>We strongly advise users especially those in mainland China to use ModelScope. <code>snapshot_download</code> can help you solve issues concerning downloading checkpoints.</p><h3 id="💻-run-locally" tabindex="-1">💻 Run locally <a class="header-anchor" href="#💻-run-locally" aria-label="Permalink to &quot;💻 Run locally&quot;">​</a></h3><h4 id="ollama" tabindex="-1">Ollama <a class="header-anchor" href="#ollama" aria-label="Permalink to &quot;Ollama&quot;">​</a></h4><p>After <a href="https://github.com/ollama/ollama/blob/main/README.md" target="_blank" rel="noreferrer">installing ollama</a>, you can initiate the ollama service with the following command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">ollama</span><span style="color:#9ECBFF;"> serve</span></span>
<span class="line"><span style="color:#6A737D;"># You need to keep this service running whenever you are using ollama</span></span></code></pre></div><p>To pull a model checkpoint and run the model, use the <code>ollama run</code> command. You can specify a model size by adding a suffix to <code>qwen2.5</code>, such as <code>:0.5b</code>, <code>:1.5b</code>, <code>:7b</code>, or <code>:72b</code>:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">ollama</span><span style="color:#9ECBFF;"> run</span><span style="color:#9ECBFF;"> qwen2.5:7b</span></span>
<span class="line"><span style="color:#6A737D;"># To exit, type &quot;/bye&quot; and press ENTER</span></span></code></pre></div><p>You can also access the ollama service via its OpenAI-compatible API. Please note that you need to (1) keep <code>ollama serve</code> running while using the API, and (2) execute <code>ollama run qwen2.5:7b</code> before utilizing this API to ensure that the model checkpoint is prepared.</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> openai </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> OpenAI</span></span>
<span class="line"><span style="color:#E1E4E8;">client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> OpenAI(</span></span>
<span class="line"><span style="color:#FFAB70;">    base_url</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;http://localhost:11434/v1/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    api_key</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;ollama&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;"># required but ignored</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">chat_completion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.chat.completions.create(</span></span>
<span class="line"><span style="color:#FFAB70;">    messages</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;role&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">            &#39;content&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Say this is a test&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#FFAB70;">    model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;qwen2.5:7b&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre></div><p>For additional details, please visit <a href="https://ollama.ai/" target="_blank" rel="noreferrer">ollama.ai</a>.</p><h4 id="llama-cpp" tabindex="-1">llama.cpp <a class="header-anchor" href="#llama-cpp" aria-label="Permalink to &quot;llama.cpp&quot;">​</a></h4><p>Download our provided GGUF files or create them by yourself, and you can directly use them with the latest <a href="https://github.com/ggerganov/llama.cpp" target="_blank" rel="noreferrer"><code>llama.cpp</code></a> with a one-line command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">./llama-cli</span><span style="color:#79B8FF;"> -m</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">path-to-fil</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> -n</span><span style="color:#79B8FF;"> 512</span><span style="color:#79B8FF;"> -co</span><span style="color:#79B8FF;"> -sp</span><span style="color:#79B8FF;"> -cnv</span><span style="color:#79B8FF;"> -p</span><span style="color:#9ECBFF;"> &quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;</span></span></code></pre></div><p>For additional guides, please refer to <a href="https://qwen.readthedocs.io/en/latest/run_locally/llama.cpp.html" target="_blank" rel="noreferrer">our documentation</a>.</p><h4 id="mlx-lm" tabindex="-1">MLX-LM <a class="header-anchor" href="#mlx-lm" aria-label="Permalink to &quot;MLX-LM&quot;">​</a></h4><p>If you are running on Apple Silicon, we have also provided checkpoints compatible with <a href="https://github.com/ml-explore/mlx-examples/blob/main/llms/README.md" target="_blank" rel="noreferrer"><code>mlx-lm</code></a>. Look for models ending with MLX on HuggingFace Hub, like <a href="https://huggingface.co/Qwen/Qwen2.5-7B-Instruct-MLX" target="_blank" rel="noreferrer">Qwen2.5-7B-Instruct-MLX</a>.</p><h4 id="lmstudio" tabindex="-1">LMStudio <a class="header-anchor" href="#lmstudio" aria-label="Permalink to &quot;LMStudio&quot;">​</a></h4><p>Qwen2.5 has already been supported by <a href="https://lmstudio.ai/" target="_blank" rel="noreferrer">lmstudio.ai</a>. You can directly use LMStudio with our GGUF files.</p><h4 id="openvino" tabindex="-1">OpenVINO <a class="header-anchor" href="#openvino" aria-label="Permalink to &quot;OpenVINO&quot;">​</a></h4><p>Qwen2.5 has already been supported by <a href="https://github.com/openvinotoolkit" target="_blank" rel="noreferrer">OpenVINO toolkit</a>. You can install and run this <a href="https://github.com/OpenVINO-dev-contest/Qwen2.openvino" target="_blank" rel="noreferrer">chatbot example</a> with Intel CPU, integrated GPU or discrete GPU.</p><h2 id="web-ui" tabindex="-1">Web UI <a class="header-anchor" href="#web-ui" aria-label="Permalink to &quot;Web UI&quot;">​</a></h2><h4 id="text-generation-web-ui" tabindex="-1">Text generation web UI <a class="header-anchor" href="#text-generation-web-ui" aria-label="Permalink to &quot;Text generation web UI&quot;">​</a></h4><p>You can directly use <a href="https://github.com/oobabooga/text-generation-webui" target="_blank" rel="noreferrer"><code>text-generation-webui</code></a> for creating a web UI demo. If you use GGUF, remember to install the latest wheel of <code>llama.cpp</code> with the support of Qwen2.5.</p><h4 id="llamafile" tabindex="-1">llamafile <a class="header-anchor" href="#llamafile" aria-label="Permalink to &quot;llamafile&quot;">​</a></h4><p>Clone <a href="https://github.com/Mozilla-Ocho/llamafile" target="_blank" rel="noreferrer"><code>llamafile</code></a>, run source install, and then create your own llamafile with the GGUF file following the guide <a href="https://github.com/Mozilla-Ocho/llamafile?tab=readme-ov-file#creating-llamafiles" target="_blank" rel="noreferrer">here</a>. You are able to run one line of command, say <code>./qwen.llamafile</code>, to create a demo.</p><h2 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h2><p>Qwen2.5 is supported by multiple inference frameworks. Here we demonstrate the usage of <code>vLLM</code>, <code>SGLang</code> and <code>OpenLLM</code>.</p><h3 id="vllm" tabindex="-1">vLLM <a class="header-anchor" href="#vllm" aria-label="Permalink to &quot;vLLM&quot;">​</a></h3><p>We advise you to use the latest version of vLLM to build OpenAI-compatible API service, including tool use support. Start the server with a chat model, e.g. <code>Qwen2.5-7B-Instruct</code>:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">vllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct</span></span></code></pre></div><p>Then use the chat API as demonstrated below:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> http://localhost:8000/v1/chat/completions</span><span style="color:#79B8FF;"> -H</span><span style="color:#9ECBFF;"> &quot;Content-Type: application/json&quot;</span><span style="color:#79B8FF;"> -d</span><span style="color:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;model&quot;: &quot;Qwen/Qwen2.5-7B-Instruct&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;messages&quot;: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        {&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;},</span></span>
<span class="line"><span style="color:#9ECBFF;">        {&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;Tell me something about large language models.&quot;}</span></span>
<span class="line"><span style="color:#9ECBFF;">    ],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;temperature&quot;: 0.7,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;top_p&quot;: 0.8,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;repetition_penalty&quot;: 1.05,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;max_tokens&quot;: 512</span></span>
<span class="line"><span style="color:#9ECBFF;">}&#39;</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> openai </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> OpenAI</span></span>
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
<span class="line"><span style="color:#FFAB70;">    model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Qwen2.5-7B-Instruct&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Chat response:&quot;</span><span style="color:#E1E4E8;">, chat_response)</span></span></code></pre></div><h3 id="sglang" tabindex="-1">SGLang <a class="header-anchor" href="#sglang" aria-label="Permalink to &quot;SGLang&quot;">​</a></h3><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>The OpenAI-compatible APIs provided by SGLang currently do NOT support <strong>tool use</strong> or <strong>function calling</strong>.</p></div><p>Please install <code>SGLang</code> from source. Similar to <code>vLLM</code>, you need to launch a server and use OpenAI-compatible API service. Start the server first:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#79B8FF;"> -m</span><span style="color:#9ECBFF;"> sglang.launch_server</span><span style="color:#79B8FF;"> --model-path</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct</span><span style="color:#79B8FF;"> --port</span><span style="color:#79B8FF;"> 30000</span></span></code></pre></div><p>You can use it in Python as shown below:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sglang </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> function, system, user, assistant, gen, set_default_backend, RuntimeEndpoint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@function</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#B392F0;"> multi_turn_question</span><span style="color:#E1E4E8;">(s, question_1, question_2):</span></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> system(</span><span style="color:#9ECBFF;">&quot;You are Qwen, created by Alibaba Cloud. You are a helpful assistant.&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> user(question_1)</span></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> assistant(gen(</span><span style="color:#9ECBFF;">&quot;answer_1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max_tokens</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> user(question_2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> assistant(gen(</span><span style="color:#9ECBFF;">&quot;answer_2&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max_tokens</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">set_default_backend(RuntimeEndpoint(</span><span style="color:#9ECBFF;">&quot;http://localhost:30000&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> multi_turn_question.run(</span></span>
<span class="line"><span style="color:#FFAB70;">    question_1</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;What is the capital of China?&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#FFAB70;">    question_2</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;List two local attractions.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> state.messages():</span></span>
<span class="line"><span style="color:#79B8FF;">    print</span><span style="color:#E1E4E8;">(m[</span><span style="color:#9ECBFF;">&quot;role&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#9ECBFF;">&quot;:&quot;</span><span style="color:#E1E4E8;">, m[</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(state[</span><span style="color:#9ECBFF;">&quot;answer_1&quot;</span><span style="color:#E1E4E8;">])</span></span></code></pre></div><h3 id="openllm" tabindex="-1">OpenLLM <a class="header-anchor" href="#openllm" aria-label="Permalink to &quot;OpenLLM&quot;">​</a></h3><p><a href="https://github.com/bentoml/OpenLLM" target="_blank" rel="noreferrer">OpenLLM</a> allows you to easily run Qwen2.5 as OpenAI-compatible APIs. You can start a model server using <code>openllm serve</code>. For example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">openllm</span><span style="color:#9ECBFF;"> serve</span><span style="color:#9ECBFF;"> qwen2.5:7b</span></span></code></pre></div><p>The server is active at <code>http://localhost:3000/</code>, providing OpenAI-compatible APIs. You can create an OpenAI client to call its chat API. For more information, refer to <a href="https://qwen.readthedocs.io/en/latest/deployment/openllm.html" target="_blank" rel="noreferrer">our documentation</a>.</p><h3 id="tool-use" tabindex="-1">Tool Use <a class="header-anchor" href="#tool-use" aria-label="Permalink to &quot;Tool Use&quot;">​</a></h3><p>For tool use capabilities, we recommend taking a look at <a href="https://github.com/QwenLM/Qwen-Agent" target="_blank" rel="noreferrer">Qwen-Agent</a>, which provides a wrapper around these APIs to support tool use or function calling. Tool use with Qwen2.5 can also be conducted with Hugging Face <code>transformers</code>, Ollama, and vLLM. Follow guides in our documentation to see how to enable the support.</p><h2 id="finetuning" tabindex="-1">Finetuning <a class="header-anchor" href="#finetuning" aria-label="Permalink to &quot;Finetuning&quot;">​</a></h2><p>We advise you to use training frameworks, including <a href="https://github.com/OpenAccess-AI-Collective/axolotl" target="_blank" rel="noreferrer">Axolotl</a>, <a href="https://github.com/hiyouga/LLaMA-Factory" target="_blank" rel="noreferrer">Llama-Factory</a>, <a href="https://github.com/unslothai/unsloth" target="_blank" rel="noreferrer">unsloth</a>, <a href="https://github.com/modelscope/swift" target="_blank" rel="noreferrer">Swift</a>, etc., to finetune your models with SFT, DPO, PPO, etc.</p><h2 id="license-agreement" tabindex="-1">License Agreement <a class="header-anchor" href="#license-agreement" aria-label="Permalink to &quot;License Agreement&quot;">​</a></h2><p>All our open-source models, except for the 3B and 72B variants, are licensed under Apache 2.0. You can find the license files in the respective Hugging Face repositories.</p><h2 id="citation" tabindex="-1">Citation <a class="header-anchor" href="#citation" aria-label="Permalink to &quot;Citation&quot;">​</a></h2><p>If you find our work helpful, feel free to give us a cite.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>@article{qwen2.5,</span></span>
<span class="line"><span>    title   = {Qwen2.5 Technical Report}, </span></span>
<span class="line"><span>    author  = {An Yang and Baosong Yang and Beichen Zhang and Binyuan Hui and Bo Zheng and Bowen Yu and Chengyuan Li and Dayiheng Liu and Fei Huang and Haoran Wei and Huan Lin and Jian Yang and Jianhong Tu and Jianwei Zhang and Jianxin Yang and Jiaxi Yang and Jingren Zhou and Junyang Lin and Kai Dang and Keming Lu and Keqin Bao and Kexin Yang and Le Yu and Mei Li and Mingfeng Xue and Pei Zhang and Qin Zhu and Rui Men and Runji Lin and Tianhao Li and Tingyu Xia and Xingzhang Ren and Xuancheng Ren and Yang Fan and Yang Su and Yichang Zhang and Yu Wan and Yuqiong Liu and Zeyu Cui and Zhenru Zhang and Zihan Qiu},</span></span>
<span class="line"><span>    journal = {arXiv preprint arXiv:2412.15115},</span></span>
<span class="line"><span>    year    = {2024}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@article{qwen2,</span></span>
<span class="line"><span>    title   = {Qwen2 Technical Report}, </span></span>
<span class="line"><span>    author  = {An Yang and Baosong Yang and Binyuan Hui and Bo Zheng and Bowen Yu and Chang Zhou and Chengpeng Li and Chengyuan Li and Dayiheng Liu and Fei Huang and Guanting Dong and Haoran Wei and Huan Lin and Jialong Tang and Jialin Wang and Jian Yang and Jianhong Tu and Jianwei Zhang and Jianxin Ma and Jin Xu and Jingren Zhou and Jinze Bai and Jinzheng He and Junyang Lin and Kai Dang and Keming Lu and Keqin Chen and Kexin Yang and Mei Li and Mingfeng Xue and Na Ni and Pei Zhang and Peng Wang and Ru Peng and Rui Men and Ruize Gao and Runji Lin and Shijie Wang and Shuai Bai and Sinan Tan and Tianhang Zhu and Tianhao Li and Tianyu Liu and Wenbin Ge and Xiaodong Deng and Xiaohuan Zhou and Xingzhang Ren and Xinyu Zhang and Xipin Wei and Xuancheng Ren and Yang Fan and Yang Yao and Yichang Zhang and Yu Wan and Yunfei Chu and Yuqiong Liu and Zeyu Cui and Zhenru Zhang and Zhihao Fan},</span></span>
<span class="line"><span>    journal = {arXiv preprint arXiv:2407.10671},</span></span>
<span class="line"><span>    year    = {2024}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="contact-us" tabindex="-1">Contact Us <a class="header-anchor" href="#contact-us" aria-label="Permalink to &quot;Contact Us&quot;">​</a></h2><p>If you are interested to leave a message to either our research team or product team, join our <a href="https://discord.gg/z3GAxXZ9Ce" target="_blank" rel="noreferrer">Discord</a> or <a href="assets/wechat.png">WeChat groups</a>!</p>`,72)]))}const E=a(l,[["render",t]]);export{h as __pageData,E as default};
