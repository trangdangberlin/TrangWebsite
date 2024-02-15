<script>
  import Button from "$lib/components/Button.svelte";
 
</script>
<div class="flex justify-around bg-black py-12">
  <a href="/">
    <div class="font-bold text-2xl text-white">TRANG WEB</div>
  </a>

  <div class="bg-black flex items-center justify-center text-white">
    <div class="button-group flex space-x-10">
      <Button title="ABOUT ME"/>
      <a href="/about">
        <div
          class="text-white transition-colors duration-300 ease-in-out hover:bg-neongreen rounded-xl px-2 text-xl hover:text-black"
        >
          ABOUT ME
        </div>
      </a>
      <a href="/portfolio">
        <div
          class="text-white transition-colors duration-300 ease-in-out hover:bg-neongreen rounded-xl px-2 text-xl hover:text-black"
        >
          PORTFOLIO
        </div>
      </a>

      <div
        class="text-white transition-colors duration-300 ease-in-out hover:bg-neongreen rounded-xl px-2 text-xl hover:text-black"
      >
        CLICK 3
      </div>
    </div>
  </div>

  <button class="bg-black rounded-xl px-2 hover:bg-neongreen">
    <div
      class="text-white text-xl transition-colors duration-300 ease-in-out hover:text-black"
    >
      CONTACT
    </div>
  </button>
</div>
