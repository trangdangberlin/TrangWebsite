<script>
  // @ts-nocheck

  function changeColor() {
    const colorOptions = ["#0000FF", "#FF0000"];
    const randomColor =
      colorOptions[Math.floor(Math.random() * colorOptions.length)];
    console.log(randomColor);

    document.body.style.backgroundColor = randomColor;
  }
</script>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trang Coding Diary</title>
</head>


<div id="header" class="text-center space-y-2 pt-10 font-bold ju">
  <h1 class="text-4xl text-green-500">Trang Coding Diary</h1>
  <div>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-100 text-xl"
    >
      <a href="/"> Home </a>
    </button>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-100 text-xl"
    >
      <a href="/about"> About me </a>
    </button>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-100 text-xl"
    >
      <a href="/portfolio"> Portfolio</a>
    </button>
    <button
      class="bg-green-500 rounded hover:bg-green-700 px-2 text-neutral-100 text-xl"
      on:click={changeColor}
    >
      Change Color
    </button>
  </div>
</div>
