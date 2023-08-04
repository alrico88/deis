<script>
  import { createEventDispatcher } from "svelte";

  let title = "";
  let date = "";

  function reset() {
    title = "";
    date = "";
  }

  const dispatcher = createEventDispatcher();

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "" || date === "") {
      return;
    }

    dispatcher("addDate", {
      title,
      date,
    });

    reset();
  }

  function sendCancel() {
    dispatcher("hideForm");
  }

  $: addEnabled = title !== "" && date !== "";
</script>

<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-header">New date</div>
      <div class="card-body">
        <form class="form" on:submit={handleSubmit}>
          <div class="row">
            <div class="col-lg-8">
              <div class="form-group">
                <label for="dateName" class="form-label">Title:</label>
                <input
                  id="dateName"
                  class="form-control"
                  type="text"
                  bind:value={title}
                  placeholder="Eg.: My birthday"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label for="dateDate" class="form-label">Date:</label>
                <input
                  id="dateDate"
                  class="form-control"
                  type="date"
                  bind:value={date}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="hstack gap-2">
          <button
            class="btn btn-primary w-100"
            disabled={!addEnabled}
            on:click={handleSubmit}
          >
            Add date
          </button>
          <button class="btn btn-link w-100" on:click={sendCancel}
            >Cancel</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
