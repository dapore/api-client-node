import test from 'ava'
import { VibelyAPI } from './api'

test.beforeEach(async t => {})

test('test api', async t => {
  const api = new VibelyAPI({})
  t.truthy(api)

  const item = {
    name: `Sunday Special`,
    startTime: Date.now(),
    end_date: Date.now() + 18000000,
    info: `The best ABC in town`
  }

  const event = api.getEvent(item)

  t.truthy(event)

  const events = api.getEvents('token')

  t.truthy(events)
})
