import test from 'ava'
import nock from 'nock'
import { Event } from './index'

test.beforeEach(async t => {
  t.context.api = `https://www.example.com`
  t.context.token = `sampleToken`
  t.context.categories = ['culture', 'explore']
  t.context.subcategories = ['art', 'opinion', 'food']
  t.context.event = {
    id: `sample-event-id`,
    name: `sample-event-name`,
    info: `sample-event-info`,
    start_time: Date.now(),
    end_date: Date.now(),
    crun: `sampleCrun`,
    type: `sample-event-type`,
    uri: `sample-event-uri`
  }
})

test('test createEvent', async t => {
  nock(t.context.api)
    .post(`/api/events`)
    .reply(201, t.context.event)

  const api = t.context.api
  const token = t.context.token
  const name = `sample-event-name`
  const info = `sample-event-info`
  const type = `sample-event-type`
  const uri = `sample-event-uri`
  const active = true

  const event = new Event({api, token})
  const resp = await event.createEvent({name, info, type, uri, event, active})
  t.deepEqual(resp, t.context.event, `Must return event after create`)
})

test('test getEvent', async t => {
  nock(t.context.api)
    .get(`/api/events/${t.context.event.id}`)
    .reply(200, t.context.event)
  const api = t.context.api
  const token = t.context.token
  const id = t.context.event.id
  const event = new Event({api, token})
  const resp = await event.getEvent({id})
  t.deepEqual(resp, t.context.event)
})

test('test getEventCategories', async t => {
  nock(t.context.api)
    .get(`/api/events/categories`)
    .reply(200, t.context.categories)
  const api = t.context.api
  const token = t.context.token
  const event = new Event({api, token})
  const resp = await event.getEventCategories()
  console.log({resp, msg: 'the resp from getEventCategories'})
  t.deepEqual(resp, t.context.categories)
})

test('test getEventSubCategories', async t => {
  nock(t.context.api)
    .get(`/api/events/subcategories`)
    .reply(200, t.context.subcategories)
  const api = t.context.api
  const token = t.context.token
  const event = new Event({api, token})
  const resp = await event.getEventSubCategories()
  t.deepEqual(resp, t.context.subcategories)
})

test('test getEvents', async t => {
  nock(t.context.api)
    .get(`/api/events`)
    .query({start_time: t.context.event.start_time})
    .reply(200, [t.context.event])
  const api = t.context.api
  const token = t.context.token
  const filter = {start_time: t.context.event.start_time}
  const event = new Event({api, token})
  const resp = await event.getEvents({filter})
  t.deepEqual(resp, [t.context.event])
})

test('test updateEvent', async t => {
  nock(t.context.api)
    .post(`/api/events/${t.context.event.id}`, t.context.event)
    .reply(200, t.context.event)
  const api = t.context.api
  const token = t.context.token
  const event = new Event({api, token})
  const id = t.context.event.id
  const resp = await event.updateEvent({id, updates: t.context.event})
  t.deepEqual(resp, t.context.event)
})

test('test deleteEvent', async t => {
  nock(t.context.api)
    .delete(`/api/events/${t.context.event.id}`)
    .reply(202, t.context.event)
  const api = t.context.api
  const token = t.context.token
  const event = new Event({api, token})
  const id = t.context.event.id
  const resp = await event.deleteEvent({id})
  t.truthy(resp, `Has just deleted`)
})
