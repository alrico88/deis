<script>
  import dayjs from "dayjs";
  import { createEventDispatcher } from "svelte";
  import { dateFormat } from "../helpers/dates";

  const dispatcher = createEventDispatcher();

  export let title;
  export let date;
  export let id;
  export let count;

  $: isPast = dayjs(date, dateFormat) < dayjs();

  /**
   * Gets the computed value for the badge
   * @param {boolean} pastStatus
   * @returns {{text: 'PAST'|'UPCOMING', color: 'secondary'|'success'}}
   */
  function getTimeProps(pastStatus) {
    return {
      text: pastStatus ? "PAST" : "UPCOMING",
      color: pastStatus ? "secondary" : "success",
    };
  }

  $: timeProps = getTimeProps(isPast);
  $: timeFormatted = dayjs(date, dateFormat).format("ddd DD MMM YYYY");

  function sendDeleteSignal() {
    const confirmation = confirm("Do you want to delete this date?");

    if (confirmation) {
      dispatcher("delete", id);
    }
  }
</script>

<div class="card mb-2">
  <div class="card-body">
    <div class="row align-items-center">
      <div class="col-md-7">
        <h6>
          <span class="badge mb-2 bg-{timeProps.color}">{timeProps.text}</span>
        </h6>
        <h5 class="fw-bold">{title}</h5>
        <p class="mb-0 text-muted">{timeFormatted}</p>
      </div>
      <div class="col text-md-end mt-3 mt-md-0">
        <p class="lead font-monospace mb-0">{count}</p>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-link text-danger p-0" on:click={sendDeleteSignal}
      >Delete</button
    >
  </div>
</div>
