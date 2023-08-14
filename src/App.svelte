<script>
  import CardFilter from "./lib/CardFilter.svelte";
  import AddDate from "./lib/AddDate.svelte";
  import { days } from "./stores/main";
  import DateItem from "./helpers/DateItem";
  import DateList from "./lib/DateList.svelte";
  import Logo from "./lib/Logo.svelte";
  import Credits from "./lib/Credits.svelte";
  import ImportExport from "./lib/ImportExport.svelte";
  import { useRegisterSW } from "virtual:pwa-register/svelte";

  let showAddForm = false;

  function showForm(val) {
    showAddForm = val;
  }

  function addDate(e) {
    const { title, date } = e.detail;

    $days = [...$days, new DateItem(title, date)];

    showForm(false);
  }

  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(swr) {
      console.log(`SW registered: ${swr}`);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
    onOfflineReady() {
      console.log("Ready to work offline");
    },
  });
</script>

<main class="flex-shrink-0">
  <div class="container pb-3">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <Logo
          on:add={() => showForm(true)}
          bind:hasUpdate={$needRefresh}
          on:update-app={() => updateServiceWorker()}
        />
        <CardFilter />
        <div class="row">
          <div class="col">
            <div class="vstack gap-2">
              {#if showAddForm}
                <AddDate
                  on:addDate={addDate}
                  on:hideForm={() => showForm(false)}
                />
                <hr />
              {/if}
              <DateList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<footer class="mt-auto bg-footer">
  <div class="container py-3">
    <div class="row align-items-center g-2">
      <div class="col-md-4">
        <ImportExport />
      </div>
      <div class="col-md-8 text-md-end">
        <Credits />
      </div>
    </div>
  </div>
</footer>
