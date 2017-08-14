import axios from 'axios'
export class Event {
  constructor ({api, token, log}) {
    this.api = api
    this.log = log
    this.token = token
    this.instance = axios.create({
      baseURL: `${api.replace('/api', '')}/api`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    })
  }

  async createEvent ({event}) {
    const resp = (await this.instance.post(`/events`, {data: event})).data
    return resp
  }

  async getEvent ({id}) {
    const resp = (await this.instance.get(`/events/${id}`)).data
    return resp
  }

  async getEvents ({filter}) {
    const resp = (await this.instance.get(`/events`, {params: filter})).data
    return resp
  }

  async updateEvent ({id, updates}) {
    const resp = (await this.instance.post(`/events/${id}`, {data: updates})).data
    return resp
  }

  async deleteEvent ({id}) {
    const resp = (await this.instance.delete(`/events/${id}`)).data
    return resp
  }
}
