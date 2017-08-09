import test from 'ava'
import nock from 'nock'
import { Content } from './index'

test.beforeEach(async t => {
  t.context.api = `https://www.example.com`
  t.context.content = {
    id: `sample-content-id`,
    name: `sample-content-name`,
    info: `sample-content-info`,
    type: `sample-event-type`,
    uri: `sample-event-uri`,
    event: `sample-event-id`,
    active: true
  }
})

test('test createContent', async t => {
  nock(t.context.api)
    .post(`/api/contents`)
    .reply(201, t.context.content)

  const api = t.context.api

  const name = `sample-content-name`
  const info = `sample-content-info`
  const type = `sample-event-type`
  const uri = `sample-event-uri`
  const event = `sample-event-id`
  const active = true

  const content = new Content({api})
  const resp = await content.createContent({name, info, type, uri, event, active})
  t.deepEqual(resp, t.context.content, `Must return content after create`)
})

test('test getContent', async t => {
  nock(t.context.api)
    .get(`/api/contents/${t.context.content.id}`)
    .reply(200, t.context.content)
  const api = t.context.api
  const id = t.context.content.id
  const content = new Content({api})
  const resp = await content.getContent({id})
  t.deepEqual(JSON.parse(resp), t.context.content)
})

test('test getContents', async t => {
  nock(t.context.api)
    .get(`/api/contents/`)
    .query({event: t.context.content.event})
    .reply(200, [t.context.content])
  const api = t.context.api
  const filter = {event: t.context.content.event}
  const content = new Content({api})
  const resp = await content.getContents({filter})
  t.deepEqual(JSON.parse(resp), [t.context.content])
})

test('test updateContent', async t => {
  nock(t.context.api)
    .post(`/api/contents/${t.context.content.id}`, t.context.content)
    .reply(200, t.context.content)
  const api = t.context.api
  const content = new Content({api})
  const id = t.context.content.id
  const resp = await content.updateContent({id, updates: t.context.content})
  t.deepEqual(resp, t.context.content)
})

test('test deleteContent', async t => {
  nock(t.context.api)
    .delete(`/api/contents/${t.context.content.id}`)
    .reply(202, t.context.content)
  const api = t.context.api
  const content = new Content({api})
  const id = t.context.content.id
  const resp = await content.deleteContent({id})
  t.truthy(resp, `Has just deleted`)
})
