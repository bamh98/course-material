"use strict";
exports.id = 2055;
exports.ids = [2055];
exports.modules = {

/***/ 8759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2021_02_18_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2021-02-18.html.vue?vue&type=template&id=5596a0c4


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="exam-2021-02-18" tabindex="-1"><a class="header-anchor" href="#exam-2021-02-18" aria-hidden="true">#</a> Exam 2021-02-18</h1><p>Here you find the questions on the exam 2021-02-18.</p><h2 id="information" tabindex="-1"><a class="header-anchor" href="#information" aria-hidden="true">#</a> Information</h2><p>Start by reading through all questions. Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required.</li><li>For grade 4, 60% of max score (18 points) is required.</li><li>For grade 5, 80% of max score (24 points) is required.</li></ul><p>During the test, you are only allowed to use:</p><ul><li>The computer you sit at to only answer the questions on this exam (you may not run any other program).</li><li>A dictionary to translate to/from English from/to your native language.</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are ununderstandable cannot receive full score on the questions.</p><p>Good luck!</p><h2 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1" aria-hidden="true">#</a> Question 1</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Place the following lines of code in such order they can be executed (read underscores as white-spaces/indentation (Inspera doesn&#39;t allow the text to begin with white-spaces)).</p><ul><li><code>___return entered_number + number</code></li><li><code>def add_number(number):</code></li><li><code>sum = add_number(5)</code></li><li><code>___entered_number = int(entered_text)</code></li><li><code>print(&quot;The sum is &quot;+str(sum)+&quot;.&quot;)</code></li><li><code>___entered_text = input(&quot;Enter number to add: &quot;)</code></li></ul></div><h2 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2" aria-hidden="true">#</a> Question 2</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>How many statements and expressions does the following code contain?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>times_to_add_three <span class="token operator">=</span> <span class="token number">10</span>
the_sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> <span class="token number">0</span> <span class="token operator">&lt;</span> times_to_add_three<span class="token punctuation">:</span>
   the_sum <span class="token operator">=</span> the_sum <span class="token operator">+</span> <span class="token number">3</span>
   times_to_add_three <span class="token operator">=</span> times_to_add_three <span class="token operator">-</span> <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="question-3" tabindex="-1"><a class="header-anchor" href="#question-3" aria-hidden="true">#</a> Question 3</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>What type of error does the code below contain? Syntax error, Logical error, Runtime error or no error at all? The purpose of the function is to compute the average value of the two numbers it receives (e.g. <code>average(4, 6)</code> → <code>5</code>).</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">average</span><span class="token punctuation">(</span>number1<span class="token punctuation">,</span> number2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>number1 <span class="token operator">+</span> number <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="question-4" tabindex="-1"><a class="header-anchor" href="#question-4" aria-hidden="true">#</a> Question 4</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>What values will be stored in the variables <code>i</code> and <code>x</code> after the following code has been executed?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>students <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Claire&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;David&quot;</span><span class="token punctuation">]</span>
i <span class="token operator">=</span> <span class="token number">0</span>
x <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token builtin">len</span><span class="token punctuation">(</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h2 id="question-5" tabindex="-1"><a class="header-anchor" href="#question-5" aria-hidden="true">#</a> Question 5</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>What is what in the code below?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> numbers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
product <span class="token operator">=</span> multiply<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Pair each code piece with its corresponding name.</p><p>Code pieces:</p><ul><li><code>numbers[1]</code></li><li><code>numbers</code></li><li><code>[2, 6]</code></li><li><code>product</code></li></ul><p>Names:</p><ul><li>Argument</li><li>Expression</li><li>Variable</li><li>Parameter</li></ul><p><strong>Note:</strong> Some code pieces may match multiple names, but there is only one way to get all 4 pairs right.</p></div><h2 id="question-6" tabindex="-1"><a class="header-anchor" href="#question-6" aria-hidden="true">#</a> Question 6</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Which one of the following statements is a bad suggestion on how to represent data?</p><ul><li>To represent a room with a width and a height, one can use a list containing two numbers, e.g. <code>room = [10, 15]</code>.</li><li>To represent a book with a title, one can use a dictionary with a string, e.g. <code>book = {&quot;title&quot;: &quot;There and back again&quot;}</code>.</li><li>To represent a planet with a name, one can use a string, e.g. <code>planet_name = &quot;Tellus&quot;</code>.</li><li>To represent the number of books in a library, one can use an integer, e.g. <code>number_of_books = 120000</code>.</li><li>To represent the books in a library, one can use a list containing dictionaries, e.g:<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>books <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;The Killer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_pages&quot;</span><span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Not Again&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_pages&quot;</span><span class="token punctuation">:</span> <span class="token number">253</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></div><h2 id="question-7" tabindex="-1"><a class="header-anchor" href="#question-7" aria-hidden="true">#</a> Question 7</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>The following expression:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Creates a range containing some integers. What is the sum of the integers in that range?</p></div><h2 id="question-8" tabindex="-1"><a class="header-anchor" href="#question-8" aria-hidden="true">#</a> Question 8</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Below is a program that should:</p><ol><li>Ask the user to enter her name.</li><li>Ask the user to enter a positive integer.</li><li>Print the user&#39;s name as many times as the number she entered.</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter your name: &quot;</span><span class="token punctuation">)</span>
times_to_print <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a positive integer: &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>times_to_print<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>When Claire runs the program, it does not work as intended. Explain why the program doesn&#39;t work they way it should, and suggest a solution to make it work (no need to write any Python code, describing the changes using words is enough, but be detailed).</p></div><h2 id="question-9" tabindex="-1"><a class="header-anchor" href="#question-9" aria-hidden="true">#</a> Question 9</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>What integers should be assigned to the variables <code>a</code> and <code>b</code> to slice out the values <code>&quot;r&quot;</code>, <code>&quot;s&quot;</code> and <code>&quot;t&quot;</code> in the code below?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v&quot;</span><span class="token punctuation">]</span>
a <span class="token operator">=</span> ?
b <span class="token operator">=</span> ?
my_new_list <span class="token operator">=</span> my_list<span class="token punctuation">[</span>a<span class="token punctuation">:</span>b<span class="token punctuation">]</span>
<span class="token comment"># my_new_list should now be [&quot;r&quot;, &quot;s&quot;, &quot;t&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h2 id="question-10" tabindex="-1"><a class="header-anchor" href="#question-10" aria-hidden="true">#</a> Question 10</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Write the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span>c<span class="token operator">+</span>c <span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token string">&quot;abcdef&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Using a for loop (and the other things you need) instead of a list comprehension expression. Your own code should have the exact same meaning as the code above.</p></div><h2 id="question-11" tabindex="-1"><a class="header-anchor" href="#question-11" aria-hidden="true">#</a> Question 11</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Write the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> get_numbers<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> is_positive<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Using a for loop (and the other things you need) instead of a list comprehension expression. Your own code should have the exact same meaning as the code above.</p></div><h2 id="question-12" tabindex="-1"><a class="header-anchor" href="#question-12" aria-hidden="true">#</a> Question 12</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Here is a quite complex structure with information about the population in different areas:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>populations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;countries&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Sweden&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;population&quot;</span><span class="token punctuation">:</span> <span class="token number">9903000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Finland&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;population&quot;</span><span class="token punctuation">:</span> <span class="token number">5495000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Norway&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;population&quot;</span><span class="token punctuation">:</span> <span class="token number">5233000</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cities&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Stockholm&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;population&quot;</span><span class="token punctuation">:</span> <span class="token number">789024</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Jönköping&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;population&quot;</span><span class="token punctuation">:</span> <span class="token number">122952</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Given this structure, write <strong>an expression</strong> that evaluates to the population of the country with the name <code>Stockholm</code>, i.e. <code>789024</code>.</p><p><strong>Note</strong>: Do not write a statement, and simply writing <code>789024</code> is of course not OK; the value needs to be retrieved from the structure.</p></div><h2 id="question-13" tabindex="-1"><a class="header-anchor" href="#question-13" aria-hidden="true">#</a> Question 13</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Suggest how the following data in Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>team <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Arsenal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;London&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Can be written in XML code instead.</p></div><h2 id="question-14" tabindex="-1"><a class="header-anchor" href="#question-14" aria-hidden="true">#</a> Question 14</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Suggest how the following data in Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>countries <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Arsenal&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;London&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Tottenham&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;London&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Elfsborg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Borås&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Can be written in CSV format. Do not write any extra characters not needed, but use as few characters as possible.</p></div><h2 id="question-15" tabindex="-1"><a class="header-anchor" href="#question-15" aria-hidden="true">#</a> Question 15</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>The following code crashes when it&#39;s executed.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">read_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter name: &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">print_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Your name is &quot;</span><span class="token operator">+</span>name<span class="token punctuation">)</span>
read_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
print_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Explain why it crashes, and suggest what changes that needs to be made to make it work. Your solution should contain one function for reading the name from the user and one to print the name the user entered.</p></div><h2 id="question-16" tabindex="-1"><a class="header-anchor" href="#question-16" aria-hidden="true">#</a> Question 16</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>What will be stored in the variable <code>sum</code> after the following code has been executed?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
    number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">:</span>
        number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">3</span>
<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">list</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">5</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
c<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
b<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
b<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
c<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
<span class="token builtin">sum</span> <span class="token operator">=</span> my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><h2 id="question-17" tabindex="-1"><a class="header-anchor" href="#question-17" aria-hidden="true">#</a> Question 17</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Implement the function <code>get_abbreviation</code>, which receives a string and should return the abbreviation of that string. Your function should support the following abbreviations:</p><table><thead><tr><th>String</th><th>Abbreviation</th></tr></thead><tbody><tr><td>et cetera</td><td>etc.</td></tr><tr><td>with</td><td>w/</td></tr><tr><td>you</td><td>u</td></tr></tbody></table><p>If the string is none of the strings found in the table above, return the string itself.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>get_abbreviation(&quot;with&quot;)   →   &quot;w/&quot;
get_abbreviation(&quot;as soon as possible&quot;)   →   &quot;as soon as possible&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="question-18" tabindex="-1"><a class="header-anchor" href="#question-18" aria-hidden="true">#</a> Question 18</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Write a program that keeps asking the user to enter an integer until the user enters <code>stop</code>. The program should then print the sum of the lowest and highest integer the user entered. When running the program, it can look like this (bold text represents text entered by the user).</p><p>Enter an integer or stop: <strong>2</strong><br> Enter an integer or stop: <strong>6</strong><br> Enter an integer or stop: <strong>4</strong><br> Enter an integer or stop: <strong>stop</strong><br> The sum of the lowest and highest integer is 8.</p><p><strong>Note</strong>: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, of course).</p><p><strong>Note</strong>: You can expect the user to actually enter a number or stop (no error handling needed).</p><p><strong>Note</strong>: You can expect the user to enter at least two numbers.</p></div><h2 id="question-19" tabindex="-1"><a class="header-anchor" href="#question-19" aria-hidden="true">#</a> Question 19</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Implement the function <code>is_sum_at_least_100</code>, which receives a list of numbers, and returns:</p><ul><li><code>true</code> if the sum of the numbers is equal to or greater than 100.</li><li><code>false</code> otherwise.</li></ul><p>Write two different implementations of the function: one using (at least) one while loop, and another one using (at least) one for loop.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>is_sum_at_least_100([50, 50, 20])   →  true
is_sum_at_least_100([50, 50, -20])  →  false
is_sum_at_least_100([])             →  false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="question-20" tabindex="-1"><a class="header-anchor" href="#question-20" aria-hidden="true">#</a> Question 20</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Implement the function <code>int_to_digits</code>, which receives a positive integer, and should return a list containing the digits in that integer.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int_to_digits(123)   →  [1, 2, 3]
int_to_digits(5398)  →  [5, 3, 9, 8]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="question-21" tabindex="-1"><a class="header-anchor" href="#question-21" aria-hidden="true">#</a> Question 21</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>Given the following data about some <del>movies</del> <ins>houses</ins>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Palace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Home&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">84</span><span class="token punctuation">,</span>  <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Cabin&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>  <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s Home&quot;</span><span class="token punctuation">,</span>     <span class="token string">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">94</span><span class="token punctuation">,</span>  <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s Cabin&quot;</span><span class="token punctuation">,</span>    <span class="token string">&quot;size&quot;</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>  <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Write code that computes and prints the name of the human that owns the most number of rooms in total.</p><p><strong>Note</strong>: Your code should still work as expected if one adds/removes houses to/from the list. Alice and Bob are not the only ones who can own a house.</p></div><h2 id="question-22" tabindex="-1"><a class="header-anchor" href="#question-22" aria-hidden="true">#</a> Question 22</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>The class <code>MovieCollection</code> represents a collection of movies. It has the following constructor/methods:</p><table><thead><tr><th>Constructor/Method</th><th>Description</th></tr></thead><tbody><tr><td><code>MovieCollection()</code></td><td>Creates a new empty <code>MovieCollection</code>.</td></tr><tr><td><code>add_movie(name, runtime)</code></td><td>Adds the movie with the given <code>name</code> and <code>runtime</code> (length in minutes) to the collection.</td></tr><tr><td><code>get_number_of_movies()</code></td><td>Returns the number of movies in the collection.</td></tr><tr><td><code>get_total_runtime()</code></td><td>Returns the sum of the runtime of all movies in the collection.</td></tr><tr><td><code>get_average_runtime()</code></td><td>Returns the average runtime of the movies in the collection.</td></tr></tbody></table><p>Write a program making use of the class. In the program, you should continue to ask the user to enter the name and runtime of a movie to be added to the <code>MovieCollection</code> until the user don&#39;t want to add any more. Then you should display the average runtime of the movies in the collection on the screen.</p><p>Sample usage:</p><div style="${(0,server_renderer.ssrRenderStyle)({"font-family":"monospace","padding-left":"2em"})}"><p>Enter one more movie? <strong>Yes</strong><br> Enter movie name: <strong>Catch me if you can</strong><br> Enter movie runtime: <strong>115</strong><br> Enter one more movie? <strong>Yes</strong><br> Enter movie name: <strong>See you later</strong><br> Enter movie runtime: <strong>75</strong><br> Enter one more movie? <strong>No</strong><br> Average runtime is 95.</p></div></div><h2 id="question-23" tabindex="-1"><a class="header-anchor" href="#question-23" aria-hidden="true">#</a> Question 23</h2><div class="custom-container warning"><p class="custom-container-title">Question</p><p>The class <code>MovieCollection</code> represents a collection of movies. It has the following constructor/methods:</p><table><thead><tr><th>Constructor/Method</th><th>Description</th></tr></thead><tbody><tr><td><code>MovieCollection()</code></td><td>Creates a new empty <code>MovieCollection</code>.</td></tr><tr><td><code>add_movie(name, runtime)</code></td><td>Adds the movie with the given <code>name</code> and <code>runtime</code> (length in minutes) to the collection.</td></tr><tr><td><code>get_number_of_movies()</code></td><td>Returns the number of movies in the collection.</td></tr><tr><td><code>get_total_runtime()</code></td><td>Returns the sum of the runtime of all movies in the collection.</td></tr><tr><td><code>get_average_runtime()</code></td><td>Returns the average runtime of the movies in the collection.</td></tr></tbody></table><p>Implement the <code>MovieCollection</code> class per the description above.</p></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2021-02-18.html.vue?vue&type=template&id=5596a0c4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2021-02-18.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2021_02_18_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 6920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-448d32ad",
  "path": "/courses/introduction-to-script-programming/exams/exam-2021-02-18.html",
  "title": "Exam 2021-02-18",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Information",
      "slug": "information",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 1",
      "slug": "question-1",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 2",
      "slug": "question-2",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 3",
      "slug": "question-3",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 4",
      "slug": "question-4",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 5",
      "slug": "question-5",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 6",
      "slug": "question-6",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 7",
      "slug": "question-7",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 8",
      "slug": "question-8",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 9",
      "slug": "question-9",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 10",
      "slug": "question-10",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 11",
      "slug": "question-11",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 12",
      "slug": "question-12",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 13",
      "slug": "question-13",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 14",
      "slug": "question-14",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 15",
      "slug": "question-15",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 16",
      "slug": "question-16",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 17",
      "slug": "question-17",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 18",
      "slug": "question-18",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 19",
      "slug": "question-19",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 20",
      "slug": "question-20",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 21",
      "slug": "question-21",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 22",
      "slug": "question-22",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 23",
      "slug": "question-23",
      "children": []
    }
  ],
  "filePathRelative": "courses/introduction-to-script-programming/exams/exam-2021-02-18.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=2055.app.js.map