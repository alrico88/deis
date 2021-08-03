<script>
  import {ButtonGroup, Button, Row, Col} from 'sveltestrap';
  import {filter} from '../stores/main';

  const options = [
    {
      text: 'All',
      value: 'all',
    },
    {
      text: 'Past',
      value: 'past',
    },
    {
      text: 'Upcoming',
      value: 'upcoming',
    },
  ]
</script>

<Row class="py-3">
    <Col>
        <ButtonGroup size="sm" class="d-flex">
            {#each options as option}
                <Button
                        active={$filter === option.value}
                        on:click={() => $filter = option.value}
                        class="w-100"
                >
                    {option.text}
                </Button>
            {/each}
        </ButtonGroup>
    </Col>
</Row>
