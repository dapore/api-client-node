import request from 'request-promise-native'
export class Event {
  constructor ({api, log, token}) {
    this.api = api
    this.log = log
    this.token = token
  }

  async createEvent ({event}) {
    const options = {
      uri: `${this.api}/api/events`,
      method: `POST`,
      body: event,
      json: true,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }

  async getEvent ({id}) {
    const options = {
      uri: `${this.api}/api/events/${id}`,
      method: `GET`,
      json: true,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }
  async getEvents ({filter}) {
    const options = {
      uri: `${this.api}/api/events`,
      method: `GET`,
      json: true,
      qs: filter,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }
  async updateEvent ({id, updates}) {
    const options = {
      uri: `${this.api}/api/events/${id}`,
      method: `POST`,
      json: true,
      body: updates,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }

  async deleteEvent ({id}) {
    const options = {
      uri: `${this.api}/api/events/${id}`,
      method: `DELETE`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }
}
