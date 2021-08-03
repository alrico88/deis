<script>
  import {Card, Icon} from 'sveltestrap';
  import {createEventDispatcher} from 'svelte';

  const dispatcher = createEventDispatcher();

  function sendAddSignal() {
    dispatcher('add');
  }
</script>

<Card body class="px-3 py-2 hoverable" on:click={sendAddSignal}>
    <Icon name="plus-circle" class="display-3 mx-auto"/>
</Card>

<style>
    :global(.hoverable) {
        opacity: 0.2;
        transition: 0.5s ease-in-out opacity;
    }

    :global(.hoverable:hover) {
        cursor: pointer;
        opacity: 1;
    }
</style>
