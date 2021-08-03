<script>
  import {Row, Col, Card, CardTitle, CardBody, CardFooter, Badge} from 'sveltestrap';
  import dayjs from "dayjs";
  import {createEventDispatcher} from 'svelte';
  import {dateFormat} from "../helpers/dates";

  const dispatcher = createEventDispatcher();

  export let title;
  export let date;
  export let id;
  export let count;

  $: isPast = dayjs(date, dateFormat) < dayjs();

  $: timeText = isPast ? 'PAST' : 'UPCOMING';
  $: timeColor = isPast ? 'secondary' : 'success';
  $: timeFormatted = dayjs(date, dateFormat).format('ddd DD MMM YYYY');

  function sendDeleteSignal() {
    dispatcher('delete', id);
  }
</script>

<Card class="mb-2">
    <CardBody>
        <Row class="align-items-center">
            <Col md={7}>
                <Badge color={timeColor} class="mb-2">{timeText}</Badge>
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
                <a href="#" on:click|preventDefault={sendDeleteSignal} class="text-danger">Delete</a>
            </li>
        </ul>
    </CardFooter>
</Card>
