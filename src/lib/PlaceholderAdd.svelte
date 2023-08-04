<script>
  import BiPlusCircle from "~icons/bi/plus-circle";
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();

  function sendAddSignal(e) {
    e.preventDefault();

    dispatcher("add");
  }
</script>

<div class="card px-3 py-2 hoverable">
  <div class="card-body text-center">
    <a href="#" class="stretched-link display-5" on:click={sendAddSignal}>
      <BiPlusCircle />
    </a>
  </div>
</div>

<style>
  .hoverable {
    opacity: 0.2;
    transition: 0.5s ease-in-out opacity;
  }

  .hoverable:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>
