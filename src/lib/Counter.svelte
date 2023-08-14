<script>
  export let text;
  export let value;
</script>

<div class="vstack gap-2 text-center font-monospace w-100">
  <div class:d-none={value === 0}>
    <div class="fw-bold lead">{value}</div>
    <div>{text}</div>
  </div>
</div>
