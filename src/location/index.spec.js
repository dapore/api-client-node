import test from 'ava'
import nock from 'nock'
import { Location } from './index'

test.beforeEach(async t => {
  t.context.api = `https://www.example.com`
  t.context.location = {
    id: `sample-location-id`,
    name: `sample-location-name`,
    info: `sample-location-info`,
    geo: [0.343903, -9.930493],
    tags: [`achimota`, `legon`],
    active: true
  }
})

test('test createLocation', async t => {
  nock(t.context.api)
    .post(`/api/locations`)
    .reply(201, t.context.location)

  const api = t.context.api

  const name = `sample-location-name`
  const info = `sample-location-info`

  const location = new Location({api})
  const resp = await location.createLocation({name, info})
  t.deepEqual(resp, t.context.location, `Must return location after create`)
})

test('test getLocation', async t => {
  nock(t.context.api)
    .get(`/api/locations/${t.context.location.id}`)
    .reply(200, t.context.location)
  const api = t.context.api
  const id = t.context.location.id
  const location = new Location({api})
  const resp = await location.getLocation({id})
  t.deepEqual(resp, t.context.location)
})

test('test getLocations', async t => {
  nock(t.context.api)
    .get(`/api/locations`)
    .query({name: t.context.location.name})
    .reply(200, [t.context.location])
  const api = t.context.api
  const filter = {name: t.context.location.name}
  const location = new Location({api})
  const resp = await location.getLocations({filter})
  t.deepEqual(resp, [t.context.location])
})

test('test updateLocation', async t => {
  nock(t.context.api)
    .post(`/api/locations/${t.context.location.id}`, t.context.location)
    .reply(200, t.context.location)
  const api = t.context.api
  const location = new Location({api})
  const id = t.context.location.id
  const resp = await location.updateLocation({id, updates: t.context.location})
  t.deepEqual(resp, t.context.location)
})

test('test deleteLocation', async t => {
  nock(t.context.api)
    .delete(`/api/locations/${t.context.location.id}`)
    .reply(202, t.context.location)
  const api = t.context.api
  const location = new Location({api})
  const id = t.context.location.id
  const resp = await location.deleteLocation({id})
  t.truthy(resp, `Has just deleted`)
})
