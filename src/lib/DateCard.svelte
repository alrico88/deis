<script>
  import {
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    Badge,
    Button,
  } from 'sveltestrap';
  import dayjs from 'dayjs';
  import { createEventDispatcher } from 'svelte';
  import { dateFormat } from '../helpers/dates';

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
      text: pastStatus ? 'PAST' : 'UPCOMING',
      color: pastStatus ? 'secondary' : 'success',
    };
  }

  $: timeProps = getTimeProps(isPast);
  $: timeFormatted = dayjs(date, dateFormat).format('ddd DD MMM YYYY');

  function sendDeleteSignal() {
    const confirmation = confirm('Do you want to delete this date?');

    if (confirmation) {
        dispatcher('delete', id);
    }
  }
</script>

<Card class="mb-2">
  <CardBody>
    <Row class="align-items-center">
      <Col md={7}>
        <Badge color={timeProps.color} class="mb-2">{timeProps.text}</Badge>
        <CardTitle>{title}</CardTitle>
        <p class="mb-0 text-muted">{timeFormatted}</p>
      </Col>
      <Col class="text-md-end mt-3 mt-md-0">
        <p class="lead font-monospace mb-0">{count}</p>
      </Col>
    </Row>
  </CardBody>
  <CardFooter>
    <ul class="list-inline mb-0">
      <li class="list-inline-item">
        <Button color="link" class="text-danger p-0" on:click={sendDeleteSignal}
          >Delete</Button
        >
      </li>
    </ul>
  </CardFooter>
</Card>
