<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MouseCursor from "$lib/components/MouseCursor.svelte";
</script>

<MouseCursor />

<Header />
<slot />
<Footer />