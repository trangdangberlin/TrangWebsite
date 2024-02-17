<script>
  import { Github, Linkedin, Mail  } from 'lucide-svelte';
</script>

<div
  class="bg-black text-white font-semibold flex justify-between items-center align-middle h-24"
>
  <div class="ml-10">Trang D. - Berlin</div>

  <div class="flex flex-row space-x-2 mr-10">

    <a href="https://www.linkedin.com/in/dang-trang/" target="_blank">
      <Linkedin color="#FFFFFF" class="hover:stroke-neongreen"/>
    </a>

    <a href="https://github.com/trangdangberlin" target="_blank">
      <Github color="#FFFFFF" class="hover:stroke-neongreen"/>
    </a>

    <a href="mailto:da.trang91@yahoo.de" target="_blank">
      <Mail color="#FFFFFF" class="hover:stroke-neongreen" />
    </a>
  </div>
</div>
