<script>
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let showCursor = false;

  onMount(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Introduce a delay to the dot's position update
    setTimeout(() => {
      dotX = mouseX;
      dotY = mouseY;
      showCursor = true;
    }, 300); // Adjust the delay time (in milliseconds) as needed
  }
</script>

<style>
  .cursor {
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #2fff32; /* Change to your desired color */
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
    z-index: 9999; /* Adjust z-index to be higher than other elements */
  }
</style>

{#if showCursor}
  <div class="cursor" style={`left: ${dotX}px; top: ${dotY}px;`}></div>
{/if}
