<script>
  import IconPlus from "~icons/bi/plus";
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();

  function handleAddClick(e) {
    e.preventDefault();

    dispatcher("add");
  }
</script>

<div class="hstack align-items-center py-3 gap-2 justify-content-between">
  <div>
    <img src="/logo.png" alt="deis logo" height="50" />
  </div>
  <button class="btn btn-link" on:click={handleAddClick} title="Add new date">
    <IconPlus class="display-6" />
  </button>
</div>
