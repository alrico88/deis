<script>
  import { createEventDispatcher } from 'svelte';
  import {
    Icon,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    Row,
    Col,
  } from 'sveltestrap';

  let title = '';
  let date = '';

  function reset() {
    title = '';
    date = '';
  }

  const dispatcher = createEventDispatcher();

  function handleSubmit(e) {
    e.preventDefault();

    if (title === '' || date === '') {
      return;
    }

    dispatcher('addDate', {
      title,
      date,
    });

    reset();
  }

  function sendCancel() {
    dispatcher('hideForm');
  }

  $: addEnabled = title !== '' && date !== '';
</script>

<Row>
  <Col>
    <Card>
      <CardBody>
        <CardTitle>New date</CardTitle>
        <Form on:submit={handleSubmit}>
          <Row>
            <Col lg={8}>
              <FormGroup>
                <Label>Title:</Label>
                <Input
                  type="text"
                  bind:value={title}
                  placeholder="Eg.: My birthday"
                />
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup>
                <Label>Date:</Label>
                <Input type="date" bind:value={date} />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
      <CardFooter>
        <Row>
          <Col>
            <Button
              color="primary"
              type="button"
              class="w-100"
              disabled={!addEnabled}
              on:click={handleSubmit}
            >
              <Icon name="plus" />
              Add date
            </Button>
          </Col>
        </Row>
        <Row class="pt-2">
          <Col class="text-center">
            <Button color="link" on:click={sendCancel}>Cancel</Button>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  </Col>
</Row>
