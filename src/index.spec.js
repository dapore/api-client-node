import test from 'ava'
import { Event, Location, Content } from './index'
test.beforeEach(async t => {})

test('test exposed API', async t => {
  t.truthy(Event, `Event is exposed`)
  t.truthy(Location, `Location is exposed`)
  t.truthy(Content, `Location is exposed`)
})
