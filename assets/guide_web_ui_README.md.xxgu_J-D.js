import{_ as a,c as s,b as n,o as t}from"./chunks/framework.B1z0IdBH.js";const h=JSON.parse('{"title":"Text Generation Web UI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Quickstart","slug":"quickstart","link":"#quickstart","children":[]},{"level":2,"title":"Next Step","slug":"next-step","link":"#next-step","children":[]}],"relativePath":"guide/web_ui/README.md","filePath":"guide/web_ui/README.md"}'),o={name:"guide/web_ui/README.md"};function r(l,e,p,i,c,d){return t(),s("div",null,e[0]||(e[0]=[n(`<h1 id="text-generation-web-ui" tabindex="-1">Text Generation Web UI <a class="header-anchor" href="#text-generation-web-ui" aria-label="Permalink to &quot;Text Generation Web UI&quot;">​</a></h1><p><a href="https://github.com/oobabooga/text-generation-webui" target="_blank" rel="noreferrer">Text Generation Web UI</a> (TGW, or usually referred to &quot;oobabooga&quot;) is a popular web UI for text generation, similar to<a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" target="_blank" rel="noreferrer">AUTOMATIC1111/stable-diffusion-webui</a>. It has multiple interfaces, and supports multiple model backends, including</p><ul><li><a href="https://github.com/huggingface/transformers" target="_blank" rel="noreferrer">Transformers</a>,</li><li><a href="https://github.com/ggerganov/llama.cpp" target="_blank" rel="noreferrer">llama.cpp</a> (through <a href="https://github.com/abetlen/llama-cpp-python" target="_blank" rel="noreferrer">llama-cpp-python</a>),</li><li><a href="https://github.com/turboderp/exllamav2" target="_blank" rel="noreferrer">ExLlamaV2</a>,</li><li><a href="https://github.com/PanQiWei/AutoGPTQ" target="_blank" rel="noreferrer">AutoGPTQ</a>,</li><li><a href="https://github.com/casper-hansen/AutoAWQ" target="_blank" rel="noreferrer">AutoAWQ</a>,</li><li><a href="https://github.com/qwopqwop200/GPTQ-for-LLaMa" target="_blank" rel="noreferrer">GPTQ-for-LLaMa</a>,</li><li><a href="https://github.com/marella/ctransformers" target="_blank" rel="noreferrer">CTransformers</a>,</li><li><a href="https://github.com/Cornell-RelaxML/quip-sharp" target="_blank" rel="noreferrer">QuIP#</a>.</li></ul><p>In this section, we introduce how to run Qwen locally with TGW.</p><h2 id="quickstart" tabindex="-1">Quickstart <a class="header-anchor" href="#quickstart" aria-label="Permalink to &quot;Quickstart&quot;">​</a></h2><p>The simplest way to run TGW is to use the provided shell scripts in the <a href="https://github.com/oobabooga/text-generation-webui" target="_blank" rel="noreferrer">repo</a>. For the first step, clone the repo and enter the directory:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> clone</span><span style="color:#9ECBFF;"> https://github.com/oobabooga/text-generation-webui</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#9ECBFF;"> text-generation-webui</span></span></code></pre></div><p>You can directly run the <code>start_linux.sh</code>, <code>start_windows.bat</code>, <code>start_macos.sh</code>, or <code>start_wsl.bat</code> script depending on your OS. Alternatively you can manually install the requirements in your conda environment. Here I take the practice on MacOS as an example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">conda</span><span style="color:#9ECBFF;"> create</span><span style="color:#79B8FF;"> -n</span><span style="color:#9ECBFF;"> textgen</span><span style="color:#9ECBFF;"> python=</span><span style="color:#79B8FF;">3.11</span></span>
<span class="line"><span style="color:#B392F0;">conda</span><span style="color:#9ECBFF;"> activate</span><span style="color:#9ECBFF;"> textgen</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#9ECBFF;"> install</span><span style="color:#9ECBFF;"> torch</span><span style="color:#9ECBFF;"> torchvision</span><span style="color:#9ECBFF;"> torchaudio</span></span></code></pre></div><p>Then you can install the requirements by running <code>pip install -r</code> based on your OS, e.g.,</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#9ECBFF;"> install</span><span style="color:#79B8FF;"> -r</span><span style="color:#9ECBFF;"> requirements_apple_silicon.txt</span></span></code></pre></div><p>For <code>bitsandbytes</code> and <code>llama-cpp-python</code> inside the requirements, I advise you to install them through <code>pip</code> directly. After finishing the installation of required packages, you need to prepare your models by putting the model files or directories in the folder <code>./models</code>. For example, you should put the transformers model directory of <code>Qwen2.5-7B-Instruct</code> in the way shown below:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>text-generation-webui</span></span>
<span class="line"><span>├── models</span></span>
<span class="line"><span>│   ├── Qwen2.5-7B-Instruct</span></span>
<span class="line"><span>│   │   ├── config.json</span></span>
<span class="line"><span>│   │   ├── generation_config.json</span></span>
<span class="line"><span>│   │   ├── model-00001-of-00004.safetensor</span></span>
<span class="line"><span>│   │   ├── model-00002-of-00004.safetensor</span></span>
<span class="line"><span>│   │   ├── model-00003-of-00004.safetensor</span></span>
<span class="line"><span>│   │   ├── model-00004-of-00004.safetensor</span></span>
<span class="line"><span>│   │   ├── model.safetensor.index.json</span></span>
<span class="line"><span>│   │   ├── merges.txt</span></span>
<span class="line"><span>│   │   ├── tokenizer_config.json</span></span>
<span class="line"><span>│   │   └── vocab.json</span></span></code></pre></div><p>Then you just need to run</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#9ECBFF;"> server.py</span></span></code></pre></div><p>to launch your web UI service. Please browse to</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:7860/?__theme=dark</span></span></code></pre></div><p>and enjoy playing with Qwen in a web UI!</p><h2 id="next-step" tabindex="-1">Next Step <a class="header-anchor" href="#next-step" aria-label="Permalink to &quot;Next Step&quot;">​</a></h2><p>There are a lot more usages in TGW, where you can even enjoy role play, use different types of quantized models, train LoRA, incorporate extensions like stable diffusion and whisper, etc. Go to figure out more advanced usages and apply them to Qwen models!</p>`,20)]))}const b=a(o,[["render",r]]);export{h as __pageData,b as default};
