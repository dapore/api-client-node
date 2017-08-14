import axios from 'axios'
export class Location {
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

  async createLocation ({location}) {
    const resp = (await this.instance.post(`/locations`, {data: location})).data
    return resp
  }

  async getLocation ({id}) {
    const resp = (await this.instance.get(`/locations/${id}`)).data
    return resp
  }

  async getLocations ({filter}) {
    const resp = (await this.instance.get(`/locations`, {params: filter})).data
    return resp
  }

  async updateLocation ({id, updates}) {
    const resp = (await this.instance.post(`/locations/${id}`, {data: updates})).data
    return resp
  }

  async deleteLocation ({id}) {
    const resp = (await this.instance.delete(`/locations/${id}`)).data
    return resp
  }
}
