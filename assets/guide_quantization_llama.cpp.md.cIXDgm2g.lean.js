import{_ as a,c as t,b as n,o}from"./chunks/framework.B1z0IdBH.js";const d=JSON.parse('{"title":"llama.cpp","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting the GGUF","slug":"getting-the-gguf","link":"#getting-the-gguf","children":[]},{"level":2,"title":"Quantizing the GGUF without Calibration","slug":"quantizing-the-gguf-without-calibration","link":"#quantizing-the-gguf-without-calibration","children":[]},{"level":2,"title":"Quantizing the GGUF with AWQ Scale","slug":"quantizing-the-gguf-with-awq-scale","link":"#quantizing-the-gguf-with-awq-scale","children":[]},{"level":2,"title":"Quantizing the GGUF with Importance Matrix","slug":"quantizing-the-gguf-with-importance-matrix","link":"#quantizing-the-gguf-with-importance-matrix","children":[]},{"level":2,"title":"Perplexity Evaluation","slug":"perplexity-evaluation","link":"#perplexity-evaluation","children":[]},{"level":2,"title":"Finally","slug":"finally","link":"#finally","children":[]}],"relativePath":"guide/quantization/llama.cpp.md","filePath":"guide/quantization/llama.cpp.md"}'),s={name:"guide/quantization/llama.cpp.md"};function i(l,e,p,r,c,u){return o(),t("div",null,e[0]||(e[0]=[n(`<h1 id="llama-cpp" tabindex="-1">llama.cpp <a class="header-anchor" href="#llama-cpp" aria-label="Permalink to &quot;llama.cpp&quot;">​</a></h1><p>Quantization is a major topic for local inference of LLMs, as it reduces the memory footprint. Undoubtably, llama.cpp natively supports LLM quantization and of course, with flexibility as always.</p><p>At high-level, all quantization supported by llama.cpp is weight quantization: Model parameters are quantized into lower bits, and in inference, they are dequantized and used in computation.</p><p>In addition, you can mix different quantization data types in a single quantized model, e.g., you can quantize the embedding weights using a quantization data type and other weights using a different one. With an adequate mixture of quantization types, much lower quantization error can be attained with just a slight increase of bit-per-weight. The example program <code>llama-quantize</code> supports many quantization presets, such as Q4_K_M and Q8_0.</p><p>If you find the quantization errors still more than expected, you can bring your own scales, e.g., as computed by AWQ, or use calibration data to compute an importance matrix using <code>llama-imatrix</code>, which can then be used during quantization to enhance the quality of the quantized models.</p><p>In this document, we demonstrate the common way to quantize your model and evaluate the performance of the quantized model. We will assume you have the example programs from llama.cpp at your hand. If you don&#39;t, check our guide <a href="./../run_locally/llama.cpp.html#getting-the-program" class="external">here</a>.</p><h2 id="getting-the-gguf" tabindex="-1">Getting the GGUF <a class="header-anchor" href="#getting-the-gguf" aria-label="Permalink to &quot;Getting the GGUF&quot;">​</a></h2><p>Now, suppose you would like to quantize <code>Qwen2.5-7B-Instruct</code>. You need to first make a GGUF file as shown below:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#9ECBFF;"> convert-hf-to-gguf.py</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct</span><span style="color:#79B8FF;"> --outfile</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-f16.gguf</span></span></code></pre></div><p>Sometimes, it may be better to use fp32 as the start point for quantization. In that case, use</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#9ECBFF;"> convert-hf-to-gguf.py</span><span style="color:#9ECBFF;"> Qwen/Qwen2.5-7B-Instruct</span><span style="color:#79B8FF;"> --outtype</span><span style="color:#9ECBFF;"> f32</span><span style="color:#79B8FF;"> --outfile</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-f32.gguf</span></span></code></pre></div><h2 id="quantizing-the-gguf-without-calibration" tabindex="-1">Quantizing the GGUF without Calibration <a class="header-anchor" href="#quantizing-the-gguf-without-calibration" aria-label="Permalink to &quot;Quantizing the GGUF without Calibration&quot;">​</a></h2><p>For the simplest way, you can directly quantize the model to lower-bits based on your requirements. An example of quantizing the model to 8 bits is shown below:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">./llama-quantize</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-f16.gguf</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-q8_0.gguf</span><span style="color:#9ECBFF;"> Q8_0</span></span></code></pre></div><p><code>Q8_0</code> is a code for a quantization preset. You can find all the presets in <a href="https://github.com/ggerganov/llama.cpp/blob/master/examples/quantize/quantize.cpp" target="_blank" rel="noreferrer">the source code of <code>llama-quantize</code></a>. Look for the variable <code>QUANT_OPTIONS</code>. Common ones used for 7B models include <code>Q8_0</code>, <code>Q5_0</code>, and <code>Q4_K_M</code>. The letter case doesn&#39;t matter, so <code>q8_0</code> or <code>q4_K_m</code> are perfectly fine.</p><p>Now you can use the GGUF file of the quantized model with applications based on llama.cpp. Very simple indeed.</p><p>However, the accuracy of the quantized model could be lower than expected occasionally, especially for lower-bit quantization. The program may even prevent you from doing that.</p><p>There are several ways to improve quality of quantized models. A common way is to use a calibration dataset in the target domain to identify the weights that really matter and quantize the model in a way that those weights have lower quantization errors, as introduced in the next two methods.</p><h2 id="quantizing-the-gguf-with-awq-scale" tabindex="-1">Quantizing the GGUF with AWQ Scale <a class="header-anchor" href="#quantizing-the-gguf-with-awq-scale" aria-label="Permalink to &quot;Quantizing the GGUF with AWQ Scale&quot;">​</a></h2><p>To improve the quality of your quantized models, one possible solution is to apply the AWQ scale, following <a href="https://github.com/casper-hansen/AutoAWQ/blob/main/docs/examples.md#gguf-export" target="_blank" rel="noreferrer">this script</a>. First, when you run <code>model.quantize()</code> with <code>autoawq</code>, remember to add <code>export_compatible=True</code> as shown below:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">model.quantize(</span></span>
<span class="line"><span style="color:#E1E4E8;">    tokenizer,</span></span>
<span class="line"><span style="color:#FFAB70;">    quant_config</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">quant_config,</span></span>
<span class="line"><span style="color:#FFAB70;">    export_compatible</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">model.save_pretrained(quant_path)</span></span>
<span class="line"><span style="color:#79B8FF;">...</span></span></code></pre></div><p>The above code will not actually quantize the weights. Instead, it adjusts weights based on a dataset so that they are &quot;easier&quot; to quantize.[^AWQ]</p><p>Then, when you run <code>convert-hf-to-gguf.py</code>, remember to replace the model path with the path to the new model:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#9ECBFF;"> convert-hf-to-gguf.py</span><span style="color:#F97583;"> &lt;</span><span style="color:#9ECBFF;">quant_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;"> --outfile</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-f16-awq.gguf</span></span></code></pre></div><p>Finally, you can quantize the model as in the last example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">./llama-quantize</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-f16-awq.gguf</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-q8_0.gguf</span><span style="color:#9ECBFF;"> Q8_0</span></span></code></pre></div><p>In this way, it should be possible to achieve similar quality with lower bit-per-weight.</p><p>[^AWQ]: If you are interested in what this means, refer to <a href="https://arxiv.org/abs/2306.00978" target="_blank" rel="noreferrer">the AWQ paper</a>. Basically, important weights (called salient weights in the paper) are identified based on activations across data examples. The weights are scaled accordingly such that the salient weights are protected even after quantization.</p><h2 id="quantizing-the-gguf-with-importance-matrix" tabindex="-1">Quantizing the GGUF with Importance Matrix <a class="header-anchor" href="#quantizing-the-gguf-with-importance-matrix" aria-label="Permalink to &quot;Quantizing the GGUF with Importance Matrix&quot;">​</a></h2><p>Another possible solution is to use the &quot;important matrix&quot;[^imatrix], following <a href="https://github.com/ggerganov/llama.cpp/tree/master/examples/imatrix" target="_blank" rel="noreferrer">this</a>.</p><p>First, you need to compute the importance matrix data of the weights of a model (<code>-m</code>) using a calibration dataset (<code>-f</code>):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">./llama-imatrix</span><span style="color:#79B8FF;"> -m</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-f16.gguf</span><span style="color:#79B8FF;"> -f</span><span style="color:#9ECBFF;"> calibration-text.txt</span><span style="color:#79B8FF;"> --chunk</span><span style="color:#79B8FF;"> 512</span><span style="color:#79B8FF;"> -o</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-imatrix.dat</span><span style="color:#79B8FF;"> -ngl</span><span style="color:#79B8FF;"> 80</span></span></code></pre></div><p>The text is cut in chunks of length <code>--chunk</code> for computation. Preferably, the text should be representative of the target domain. The final results will be saved in a file named <code>qwen2.5-7b-instruct-imatrix.dat</code> (<code>-o</code>), which can then be used:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">./llama-quantize</span><span style="color:#79B8FF;"> --imatrix</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-imatrix.data</span><span style="color:#79B8FF;"> \\</span></span>
<span class="line"><span style="color:#9ECBFF;">    qwen2.5-7b-instruct-f16-awq.gguf</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-q4_k_m.gguf</span><span style="color:#9ECBFF;"> Q4_K_M</span></span></code></pre></div><p>For lower-bit quantization mixtures for 1-bit or 2-bit, if you do not provide <code>--imatrix</code>, a helpful warning will be printed by <code>llama-quantize</code>.</p><p>[^imatrix]: Here, the importance matrix keeps record of how weights affect the output: the weight should be important is a slight change in its value causes huge difference in the results, akin to the <a href="https://arxiv.org/abs/2210.17323" target="_blank" rel="noreferrer">GPTQ</a> algorithm.</p><h2 id="perplexity-evaluation" tabindex="-1">Perplexity Evaluation <a class="header-anchor" href="#perplexity-evaluation" aria-label="Permalink to &quot;Perplexity Evaluation&quot;">​</a></h2><p><code>llama.cpp</code> provides an example program for us to calculate the perplexity, which evaluate how unlikely the given text is to the model. It should be mostly used for comparisons: the lower the perplexity, the better the model remembers the given text.</p><p>To do this, you need to prepare a dataset, say &quot;wiki test&quot;[^wiki]. You can download the dataset with:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">wget</span><span style="color:#9ECBFF;"> https://s3.amazonaws.com/research.metamind.io/wikitext/wikitext-2-raw-v1.zip?ref=salesforce-research</span><span style="color:#79B8FF;"> -O</span><span style="color:#9ECBFF;"> wikitext-2-raw-v1.zip</span></span>
<span class="line"><span style="color:#B392F0;">unzip</span><span style="color:#9ECBFF;"> wikitext-2-raw-v1.zip</span></span></code></pre></div><p>Then you can run the test with the following command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">./llama-perplexity</span><span style="color:#79B8FF;"> -m</span><span style="color:#9ECBFF;"> qwen2.5-7b-instruct-q8_0.gguf</span><span style="color:#79B8FF;"> -f</span><span style="color:#9ECBFF;"> wiki.test.raw</span><span style="color:#79B8FF;"> -ngl</span><span style="color:#79B8FF;"> 80</span></span></code></pre></div><p>Wait for some time and you will get the perplexity of the model. There are some numbers of different kinds of quantization mixture <a href="https://github.com/ggerganov/llama.cpp/blob/master/examples/perplexity/README.md" target="_blank" rel="noreferrer">here</a>. It might be helpful to look at the difference and grab a sense of how that kind of quantization might perform.</p><p>[^wiki]: It is not a good evaluation dataset for instruct models though, but it is very common and easily accessible. You probably want to use a dataset similar to your target domain.</p><h2 id="finally" tabindex="-1">Finally <a class="header-anchor" href="#finally" aria-label="Permalink to &quot;Finally&quot;">​</a></h2><p>In this guide, we demonstrate how to conduct quantization and evaluate the perplexity with llama.cpp. For more information, please visit the <a href="https://github.com/ggerganov/llama.cpp" target="_blank" rel="noreferrer">llama.cpp GitHub repo</a>.</p><p>We usually quantize the fp16 model to 2, 3, 4, 5, 6, and 8-bit models with different quantization mixtures, but sometimes a particular mixture just does not work, so we don&#39;t provide those in our HuggingFace Hub. However, others in the community may have success, so if you haven&#39;t found what you need in our repos, look around.</p><p>Enjoy your freshly quantized models!</p>`,48)]))}const g=a(s,[["render",i]]);export{d as __pageData,g as default};
