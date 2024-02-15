<script>
export let title;
</script>

<button class="btnAnimation text-xl bg-black text-white border-0 rounded-xl px-2 relative font-semibold tracking-wider leading-none overflow-hidden hover:text-black" type="button">
    <span class="absolute inset-0 bg-neongreen"></span>
    <span class="absolute inset-0 flex justify-center items-center font-bold"> 
    {title}
    </span>
    {title}
</button>

<style>
.btnAnimation span:first-child{
  transform: translateY(101%);
  transition: transform .3s ease-in
}
.btnAnimation:hover span{
  transform: translateX(0)
}
</style>