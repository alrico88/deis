<script>
  import { exportDays, importDays, deleteDays } from "../stores/main.js";
  import BiUpload from "~icons/bi/upload";
  import BiDownload from "~icons/bi/download";
  import BiRecycle from "~icons/bi/recycle";

  function openImport() {
    document.getElementById("importInput").click();
  }
</script>

<input class="d-none" type="file" on:change={importDays} id="importInput" />

<ul class="list-inline mb-0">
  <li class="list-inline-item">
    <button class="btn btn-link p-0 text-decoration-none" on:click={openImport}
      ><BiUpload /> Import</button
    >
  </li>
  <li class="list-inline-item">
    <button class="btn btn-link p-0 text-decoration-none" on:click={exportDays}
      ><BiDownload /> Export</button
    >
  </li>
  <li class="list-inline-item">
    <button
      class="btn btn-link text-danger p-0 text-decoration-none"
      on:click={deleteDays}><BiRecycle /> Reset</button
    >
  </li>
</ul>
