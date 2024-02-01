<script>
  import Tables from "$lib/components/Tables.svelte";
  import Header from "$lib/components/Header.svelte";
  import Diary from "$lib/components/Diary.svelte";
  import Cheatsheet from "$lib/components/Cheatsheet.svelte";
  import Notes from "$lib/components/Notes.svelte";
</script>

<div class="p-14 bg-green-600">
  <div class="bg-zinc-900 rounded-lg">
    <Header />
    <Diary />
    <Notes />
    <Cheatsheet />
    <Tables />


    <img
      src="digital_rain.gif"
      alt="digital_rain"
      class="block mx-auto my-4 rounded-lg"
    />
  </div>
</div>

<style>
  body {
    border: 10px solid #000; /* Adding a black border around the page */
  }
</style>
