<script>
  let projects = [
    {
      url: "/portfolio/project_one",
      img: "Trang.jpeg",
      title: "Project One",
    },
    {
      url: "/portfolio/project_two",
      img: "trinity.png",
      title: "Project Two",
    },
    {
      url: "/portfolio/project_three",
      img: "mininal_bathroom.jpeg",
      title: "Project Three",
    },
    {
      url: "/portfolio/project_four",
      img: "ping_pong.avif",
      title: "Project Four",
    },
    {
      url: "portfolio/project_five",
      img: "chess_wood.jpeg",
      title: "Project Five",
    },
    {
      url: "portfolio/project_six",
      img: "building.webp",
      title: "Project Six",
    },
    {
      url: "portfolio/project_seven",
      img: "neo.png",
      title: "Project Seven",
    },
  ];
</script>

<!-- svelte-ignore a11y-missing-attribute -->

<div class="carousel carousel-center w-full bg-black p-4 space-x-4 text-white">
  {#each projects as project}
    <a href={project.url} class="carousel-item w-96 h-96 relative block">
      <img src={project.img} class="rounded-box w-full h-full object-cover" />
      <div
        class="bg-gray-500 px-2 rounded-2xl text-center mt-2 ml-2 absolute bottom-2 left-0 font-semibold text-2xl text-white hover:bg-neongreen hover:text-black"
      >
        {project.title}
      </div>
    </a>
  {/each}
</div>
