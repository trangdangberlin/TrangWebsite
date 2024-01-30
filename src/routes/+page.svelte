<script>
  import Tables from "$lib/components/Tables.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="p-14 bg-green-600">
  <div class="bg-black rounded-lg">
    <Header />

    <section id="diary">
      <h2
        class="font-bold text-3xl text-neutral-50 text-center mt-24 bg-zinc-900 py-4"
      >
        Professional Web Development Diary
      </h2>
      <div class="flex flex-row justify-center">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="w-fit mx-auto" src="red_pill.png" alt="red pill" />
        <img class="w-32 mx-auto" src="blue_pill.png" alt="blue pill" />
      </div>

      <div class="flex justify-center">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="w-fit mx-auto" src="neo.png" alt="neo" />
      </div>
      <div class="text-white">
        <h3 class="font-bold text-center text-3xl mx-auto mt-14 m-6">
          This is a diary of what I learn every day. It will document my
          progress in web development throughout 2024.
        </h3>
        <h4 class="font-semibold text-2xl ml-72 my-4 mt-14">
          Let’s review what you’ve learned so far:
        </h4>
        <ol class="ml-80 list-decimal">
          <li>I added Tailwind CSS to my website</li>
          <li>
            19.1.2024 I learned HTML and how to integrate CSS and JS files into
            my index.html
          </li>
          <li>
            2024-01-08: I created a cheatsheet today to keep track of what I
            learn.
          </li>
          <li>2024-01-06: I learned how to use different operators in R.</li>
          <li>I will practice on posit, with different databases.</li>
          <li>I aim to finish the case study in the next few days.</li>
          <li>I aim to start the advanced course and learn Python as well.</li>
        </ol>
      </div>
    </section>
    <div class="text-white">
      <h2 class="font-bold text-2xl mt-14 ml-72">Dodge this</h2>

      <div class="mt-6 ml-80">
        <img src="trinity_dodge_this.jpeg" alt="Dodge this" />
      </div>

      <ul class="list-disc pl-5 mt-10 ml-44 mb-10">
        <li>
          Jan 26th: I am about to create a presentation with the topic "How to
          encourage young women to learn coding."
        </li>
        <li>
          Jan 25th: Coding is empowering. Once I started, I tried to focus on a
          problem that I wanted to solve. From there, I knew which coding
          language I needed, rather than learning every single language. I
          focused on a solution to my problem.
        </li>
        <li>
          Jan 25th: For that person, that woman, that young woman out there:
          Yes, coding is hard, but it is as hard for men, too. So don't give up.
          It can be overwhelming at the beginning, but that's where you need to
          continue.
        </li>
        <li>In 2024, I am dedicated to learning web development.</li>
        <li>
          I added JavaScript to my HTML code to incorporate more complex
          features, such as the color-changing button.
        </li>
        <li>
          I started adding a CSS file to my HTML code. It's a game-changer to
          style and format in one place.
        </li>
        <li>In 2024, I am committed to learning web development.</li>
        <li>With each commit, I witness real-time changes in my work.</li>
        <li>
          This initial prototype was created in Italy while awaiting dinner.
        </li>
        <li>Today marks my second line of progress.</li>
        <li>Click the button to change the page color.</li>
      </ul>

      <section id="cheatsheet">
        <h2 class="font-bold text-2xl">HTML Cheatsheet</h2>
        <span style="color: green;"> &lt;h1&gt; </span> to
        <span style="color: green;"> &lt;h6&gt; </span> tags, are used to
        provide titles for sections of content.
        <span style="color: green;">&lt;p&gt;</span>,
        <span style="color: green;">&lt;span&gt;</span>, and
        <span style="color: green;">&lt;div&gt;</span> tags specify text or
        blocks. The <span style="color: green;">&lt;em&gt;</span>
        and <span style="color: green;">&lt;strong&gt;</span> tags are used to
        emphasize text. Line breaks are created with the
        <span style="color: green;">&lt;br&gt;</span> tag. Ordered lists (<span
          style="color: green;">&lt;ol&gt;</span
        >) are numbered, and unordered lists (<span style="color: green;"
          >&lt;ul&gt;</span
        >) are bulleted. Images (<span style="color: green;">&lt;img&gt;</span>)
        and videos (<span style="color: green;">&lt;video&gt;</span>) can be
        added by linking to an existing source.

        <h3>Links</h3>
        <p>
          <a
            href="file:///Users/trangdang/Code/trangdangberlin.github.io/index.html"
            >Visit Example.com</a
          >
        </p>
      </section>

      <div class="container mx-auto p-4">
        <h3 class="text-2xl font-bold mb-4">Add Images</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Digital_rain_animation_medium_letters_shine.gif"
          alt="Original Image"
          class="mb-4"
        />

        <h3 class="text-2xl font-bold mb-4">Add Small Images</h3>
        <img
          id="smallImage"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Digital_rain_animation_medium_letters_shine.gif"
          alt="Small Image"
        />
      </div>

      <div class="container mx-auto p-4">
        <section class="mb-4">
          <span class="block mb-2">I'm a span.</span>
          <p class="mb-2">
            <a href="#" class="text-green-600"
              >This is my anchor tag, it allows me to create HTML links</a
            >
          </p>
          <input type="text" class="border p-2 rounded mt-2" />
        </section>

        <Tables />
      </div>
    </div>
  </div>
</div>

<style>
  body {
    border: 10px solid #000; /* Adding a black border around the page */
  }
</style>
