<script>
  import {days, processedDays, filter} from '../stores/main';
  import DateCard from './DateCard.svelte';
  import dayjs from "dayjs";

  function getList(daysList, filterVal) {
    let checker;

    if (filterVal === 'all') {
      checker = () => true;
    } else {
      const now = dayjs();
      if (filterVal === 'past') {
        checker = ({date}) => now > dayjs(date, 'YYYY-MM-DD');
      } else {
        checker = ({date}) => now < dayjs(date, 'YYYY-MM-DD');
      }
    }

    return daysList.filter(checker);
  }

  $: list = getList($processedDays, $filter);

  function deleteDate(e) {
    const id = e.detail;

    const clone = JSON.parse(JSON.stringify($days));

    clone.splice(clone.findIndex((d) => d.id === id), 1);

    $days = clone;
  }
</script>

{#each list as event}
    <DateCard
            id={event.id}
            title={event.title}
            date={event.date}
            on:delete={deleteDate}
            count={event.count}
    />
{/each}
