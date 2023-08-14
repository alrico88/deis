<script>
  import { filter } from "../stores/main";

  const options = [
    {
      text: "All",
      value: "all",
    },
    {
      text: "Past",
      value: "past",
    },
    {
      text: "Upcoming",
      value: "upcoming",
    },
  ];
</script>

<div class="row pb-3">
  <div class="col">
    <div class="btn-group btn-group-sm d-flex">
      {#each options as option}
        <button
          on:click={() => ($filter = option.value)}
          class="btn btn-secondary w-100"
          class:active={$filter === option.value}
        >
          {option.text}
        </button>
      {/each}
    </div>
  </div>
</div>
