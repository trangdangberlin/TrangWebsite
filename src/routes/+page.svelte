<script>
  import Tables from "$lib/components/Tables.svelte";
  import Header from "$lib/components/Header.svelte";
  import Diary from "$lib/components/Diary.svelte";
  import Cheatsheet from "$lib/components/Cheatsheet.svelte";
  import Notes from "$lib/components/Notes.svelte";
</script>

<div class="p-14 bg-green-600">
  <div class="bg-black rounded-lg">
    <Header />
    <Diary />
    <Notes />
    <Cheatsheet />
    <Tables />
    <img src="trinity_dodge_this.jpeg" alt="Dodge this" />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Digital_rain_animation_medium_letters_shine.gif"
      alt="Original Image"
      class="mb-4"
    />
  </div>
</div>

<style>
  body {
    border: 10px solid #000; /* Adding a black border around the page */
  }
</style>
