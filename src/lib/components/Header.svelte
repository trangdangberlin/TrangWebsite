<script>
  import Button from "$lib/components/Button.svelte";
 
</script>
<div class="flex flex-col sm:flex-row justify-around bg-black py-12">
  <a href="/">
    <div class="font-bold text-2xl text-white">TRANG WEB</div>
  </a>
  <Button title="ABOUT ME" link="/about"/>
  <Button title="PORTFOLIO" link="/portfolio"/> 
  <Button title="CONTACT" link="/contact"/>
</div>
