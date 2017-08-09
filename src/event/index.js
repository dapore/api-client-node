import request from 'request-promise-native'
import queryString from 'query-string'
export class Event {
  constructor ({api, log}) {
    this.api = api
    this.log = log
  }

  async createEvent ({event}) {
    const options = {
      uri: `${this.api}/api/events`,
      method: `POST`,
      body: event,
      json: true,
      headers: { 'Accept': 'application/json' }
    }
    const resp = await request(options)
    return resp
  }

  async getEvent ({id}) {
    const resp = await request.get(`${this.api}/api/events/${id}`)
    return resp
  }
  async getEvents ({filter}) {
    const resp = await request.get(`${this.api}/api/events/?${queryString.stringify(filter)}`)
    return resp
  }
  async updateEvent ({id, updates}) {
    const options = {
      uri: `${this.api}/api/events/${id}`,
      method: `POST`,
      json: true,
      body: updates
    }
    const resp = await request(options)
    return resp
  }

  async deleteEvent ({id}) {
    const options = {
      uri: `${this.api}/api/events/${id}`,
      method: `DELETE`
    }
    const resp = await request(options)
    return resp
  }
}
