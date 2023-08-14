<script>
  import IconPlus from "~icons/bi/plus";
  import IconRefresh from "~icons/bi/repeat";
  import { createEventDispatcher } from "svelte";

  export let hasUpdate;

  const dispatcher = createEventDispatcher();
</script>

<div class="hstack align-items-center py-3 gap-2 justify-content-between">
  <div>
    <img src="/logo.png" alt="deis logo" height="50" />
  </div>
  <div>
    <div class="hstack gap-2">
      {#if hasUpdate}
        <button
          class="btn btn-primary"
          on:click={() => dispatcher("update-app")}
        >
          <IconRefresh />
        </button>
      {/if}
      <button
        class="btn btn-link p-0"
        on:click={() => dispatcher("add")}
        title="Add new date"
      >
        <IconPlus class="display-6" />
      </button>
    </div>
  </div>
</div>
