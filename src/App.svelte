<script>
  import CardFilter from './lib/CardFilter.svelte';
  import AddDate from './lib/AddDate.svelte';
  import { days } from './stores/main';
  import DateItem from './helpers/DateItem';
  import { Row, Col } from 'sveltestrap';
  import PlaceholderAdd from './lib/PlaceholderAdd.svelte';
  import DateList from './lib/DateList.svelte';
  import Logo from './lib/Logo.svelte';
  import Credits from './lib/Credits.svelte';

  let showAddForm = false;

  function showForm(val) {
    showAddForm = val;
  }

  function addDate(e) {
    const { title, date } = e.detail;

    $days = [...$days, new DateItem(title, date)];

    showForm(false);
  }
</script>

<main class="flex-shrink-0">
  <div class="container pb-3">
    <Row class="justify-content-center">
      <Col md={8}>
        <Logo />
        <CardFilter />
        <Row>
          <Col>
            <DateList />
            {#if !showAddForm}
              <PlaceholderAdd on:add={() => showForm(true)} />
            {/if}
          </Col>
        </Row>
        {#if showAddForm}
          <AddDate on:addDate={addDate} on:hideForm={() => showForm(false)} />
        {/if}
      </Col>
    </Row>
  </div>
</main>
<footer class="mt-auto text-center bg-white py-3">
  <Credits />
</footer>
