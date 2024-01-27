<script>
  function changeColor() {
    // Generate random RGB values
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
  }
</script>

<div id="header" class="text-center space-y-2 pt-10 font-bold ju">
  <h1 class="text-4xl text-green-500">Trang Coding Diary</h1>
  <div>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-50 text-xl"
    >
      <a href="./index.html"> Home </a>
    </button>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-50 text-xl"
    >
      <a href="./aboutme.html" target="_blank"> About me </a>
    </button>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-50 text-xl"
      on:click={changeColor}
    >
      Change Color
    </button>
  </div>
</div>

<section id="diary">
  <h2
    class="font-bold text-3xl text-neutral-50 text-center mt-24 bg-zinc-900 py-4"
  >
    Professional Web Development Diary
  </h2>
  <div class="flex flex-col justify-center">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="w-96 mx-auto" src="red_pill.jpg" alt="Small Image" />
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="w-96 mx-auto" src="neo.jpg" alt="Small Image" />
  </div>

  <h3 class="font-bold text-center text-3xl mx-auto mt-12 mb-6">
    This is a diary of what I learn every day. It will document my progress in
    web development throughout 2024.
  </h3>
  <h4 class="font-semibold text-2xl ml-72 my-4">
    Let’s review what you’ve learned so far:
  </h4>
  <ol class="ml-80 list-decimal">
    <li>I added tailwind css to my website</li>
    <li>
      19.1.2024 I learned html and how to integrate css and js file into my
      index.html
    </li>
    <li>
      2024-01-08: I created a cheatsheet today to keep track of what I learn.
    </li>
    <li>2024-01-06: I learned how to use different operators in R.</li>
    <li>I will practice on posit, with different databases.</li>
    <li>I aim to finish the case study in the next few days.</li>
    <li>I aim to start the advanced course and learn Python as well.</li>
  </ol>
</section>

<h2 class="font-bold text-2xl mt-12 ml-72">Dodge this</h2>

<div class="mt-12 ml-80">
  <img src="trinity_dodge_this.jpeg" alt="Dodge this" />
</div>

<ul class="list-disc pl-5">
  <li>
    Jan 26th: I am about to create a presentation with the topic "How to
    encourage young women to learn coding."
  </li>
  <li>
    Jan 25th: Coding is empowering. Once I started, I tried to focus on a
    problem that I wanted to solve. From there, I knew which coding language I
    needed, rather than learning every single language. I focused on a solution
    to my problem.
  </li>
  <li>
    Jan 25th: For that person, that woman, that young woman out there: Yes,
    coding is hard, but it is as hard for men, too. So don't give up. It can be
    overwhelming at the beginning, but that's where you need to continue.
  </li>
  <li>In 2024, I am dedicated to learning web development.</li>
  <li>
    I added JavaScript to my HTML code to incorporate more complex features,
    such as the color-changing button.
  </li>
  <li>
    I started adding a CSS file to my HTML code. It's a game-changer to style
    and format in one place.
  </li>
  <li>In 2024, I am committed to learning web development.</li>
  <li>With each commit, I witness real-time changes in my work.</li>
  <li>This initial prototype was created in Italy while awaiting dinner.</li>
  <li>Today marks my second line of progress.</li>
  <li>Click the button to change the page color.</li>
</ul>
<section id="cheatsheet">
  <h2>HTML Cheatsheet</h2>
  <span style="color: green;"> &lt;h1&gt; </span> to
  <span style="color: green;"> &lt;h6&gt; </span> tags, are used to provide
  titles for sections of content.
  <span style="color: green;">&lt;p&gt;</span>,
  <span style="color: green;">&lt;span&gt;</span>, and
  <span style="color: green;">&lt;div&gt;</span>
  tags specify text or blocks. The <span style="color: green;">&lt;em&gt;</span>
  and <span style="color: green;">&lt;strong&gt;</span> tags are used to
  emphasize text. Line breaks are created with the
  <span style="color: green;">&lt;br&gt;</span>
  tag. Ordered lists (<span style="color: green;">&lt;ol&gt;</span>) are
  numbered, and unordered lists (<span style="color: green;">&lt;ul&gt;</span>)
  are bulleted. Images (<span style="color: green;">&lt;img&gt;</span>) and
  videos (<span style="color: green;">&lt;video&gt;</span>) can be added by
  linking to an existing source.

  <h3>Links</h3>
  <p>
    <a href="file:///Users/trangdang/Code/trangdangberlin.github.io/index.html"
      >Visit Example.com</a
    >
  </p>

  <h3>Add Images</h3>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Digital_rain_animation_medium_letters_shine.gif"
    alt="Original Image"
  />
  <h3>Add Small Images</h3>
  <img
    id="smallImage"
    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Digital_rain_animation_medium_letters_shine.gif"
    alt="Small Image"
  />

  <span>I'm a span.</span>
  <p>
    <a href="#">This is my anchor tag, it allows me to create HTML links</a>
  </p>
  <input type="text" />
</section>
<table>
  <thead>
    <tr>
      <th>heading 1</th>
      <th>heading 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col 1</td>
      <td>col 2</td>
    </tr>
  </tbody>
</table>

<table>
  <tr>
    <th>column one</th>
    <th>column two</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
</table>

<table>
  <tr> Table row element </tr>
</table>

<table>
  <tr>
    <th>row 1:</th>
    <td>col 1</td>
    <td>col 2</td>
    <td>col 3</td>
  </tr>
  <tr>
    <th>row 2:</th>
    <td colspan="2">col 1 (will span 2 columns)</td>
    <td>col 2</td>
    <td>col 3</td>
  </tr>
</table>

<table>
  <thead>
    <tr>
      <th>heading 1</th>
      <th>heading 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col 1</td>
      <td>col 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>summary of col 1</td>
      <td>summary of col 2</td>
    </tr>
  </tfoot>
</table>
