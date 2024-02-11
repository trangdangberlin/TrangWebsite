<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang Web</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      #parentDiv {
        background-color: #00000; /* Add your background color here */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        position: relative;
        color: white;
      }
    </style>
  </head>

    <div id="parentDiv">
      <!-- Headline -->
      <div id="headline">Trang Web</div>
    </div>
  
      
      <div
        class="bg-zinc-950 flex items-center justify-center h-screen relative text-white"
        id="parentDiv"
        >
        Headline
        --
        > <div
        id="headline"
        > Trang
        Web</div
        > .white-text {
        color: white;
      }
    </style>
  </head>
  <body>
    <div
      class="bg-zinc-950 flex items-center justify-center h-screen relative text-white"
      id="parentDiv"
    >
      <div
        class="text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-green-500 rounded-xl px-2 text-xl font-semibold"
      >
        Click 1
      </div>
      <button
        class="hidden absolute top-0 left-0 bg-green-500 text-white px-4 py-2 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0"
        onclick="toggleTextColor('parentDiv')"
      >
        <a href="/">Click 1</a>
      </button>

      <div
        class="text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-green-500 rounded-xl px-2 text-xl font-semibold"
      >
        Click 2
      </div>
      <button
        class="hidden absolute top-0 left-0 bg-green-500 text-white px-4 py-2 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0"
        onclick="toggleTextColor('parentDiv')"
      >
        <a href="/">Click 2</a>
      </button>

      <div
        class="text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-green-500 rounded-xl px-2 text-xl font-semibold"
      >
        Click 3
      </div>
      <button
        class="hidden absolute top-0 left-0 bg-green-500 text-white px-4 py-2 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0"
        onclick="toggleTextColor('parentDiv')"
      >
        <a href="/">Click 3</a>
      </button>
    </div>

    <script>
      function toggleTextColor(elementId) {
        var parentDiv = document.getElementById(elementId);
        parentDiv.classList.toggle("white-text");
      }
    </script>
  </body>
</html>
