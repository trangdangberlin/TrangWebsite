<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  let selectedPage = "";

  function handleButtonClick(title: string) {
    selectedPage = title;
  }
</script>

<div class="flex flex-col sm:flex-row justify-around bg-black py-12">
  <a href="/">
    <div class="font-bold text-2xl text-white">TRANG WEB</div>
  </a>
  <div
    on:click={() => handleButtonClick("about")}
    class={selectedPage == "about" ? "bg-neongreen p-0.5 rounded-2xl" : ""}
  >
    <Button title="ABOUT ME" link="/about" />
  </div>
  <div
    on:click={() => handleButtonClick("portfolio")}
    class={selectedPage == "portfolio" ? "bg-neongreen p-0.5 rounded-2xl" : ""}
  >
    <Button title="PORTFOLIO" link="/portfolio" />
  </div>
  <div
    on:click={() => handleButtonClick("contact")}
    class={selectedPage == "contact" ? "bg-neongreen p-0.5 rounded-2xl" : ""}
  >
    <Button title="CONTACT" link="/contact" />
  </div>
</div>
