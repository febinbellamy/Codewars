<h2><a href=https://www.codewars.com/kata/60113ded99cef9000e309be3/train/javascript target="_blank">Separate basic types</a></h2><h3>7 kyu</h3><p>Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.</p><ul><li>keep order of values like in input array</li><li>if type is not presented in input, no corresponding property are expected</li></ul><p>So, for this input:</p><pre><code class="language-javascript">[<span class="cm-string">'a'</span>, <span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-atom">false</span>, <span class="cm-string">'b'</span>]</code></pre><pre style="display: none;"><code class="language-python">[<span class="cm-string">'a'</span>, <span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-keyword">False</span>, <span class="cm-string">'b'</span>]</code></pre><p>expected output is:</p><pre><code class="language-javascript">{  <span class="cm-variable">number</span>: [<span class="cm-number">1</span>, <span class="cm-number">2</span>],  <span class="cm-variable">string</span>: [<span class="cm-string">'a'</span>, <span class="cm-string">'b'</span>],  <span class="cm-variable">boolean</span>: [<span class="cm-atom">false</span>]}</code></pre><pre style="display: none;"><code class="language-python">{  <span class="cm-builtin">int</span>: [<span class="cm-number">1</span>, <span class="cm-number">2</span>],  <span class="cm-builtin">str</span>: [<span class="cm-string">'a'</span>, <span class="cm-string">'b'</span>],  <span class="cm-builtin">bool</span>: [<span class="cm-keyword">False</span>]}</code></pre>