
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Color</title>
</head>
  
<script>
  function changeColor() {
    const colorOptions = ["#0000FF", "#FF0000"];
    const randomColor =
      colorOptions[Math.floor(Math.random() * colorOptions.length)];
    console.log(randomColor);

    document.body.style.backgroundColor = randomColor;
  }
</script>

<button onclick="changeColor()">Change Color</button>

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
    </body>
  </div>
</div>
