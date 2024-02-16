<script>
export let title;
export let link;
</script>


<a href="{link}">
<button class="btnAnimation text-xl bg-black text-white border-0 rounded-2xl px-3 py-2 relative tracking-wider leading-none overflow-hidden hover:text-black" type="button">
    <span class="absolute inset-0 bg-neongreen"></span>
    <span class="absolute inset-0 flex justify-center items-center"> 
    {title}
    </span>
    {title}
</button>
</a>

<style>
.btnAnimation span:first-child{
  transform: translateY(101%);
  transition: transform .2s ease-in
}
.btnAnimation:hover span{
  transform: translateX(0)
}
</style>