<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="p-14 bg-green-600">
  <div class="bg-zinc-900 rounded-lg">
    <Header />
    <slot />
    <Footer />
  </div>
</div>
