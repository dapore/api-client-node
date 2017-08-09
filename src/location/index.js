import request from 'request-promise-native'
import queryString from 'query-string'
export class Location {
  constructor ({api, log}) {
    this.api = api
    this.log = log
  }

  async createLocation ({location}) {
    const options = {
      uri: `${this.api}/api/locations`,
      method: `POST`,
      body: location,
      json: true,
      headers: { 'Accept': 'application/json' }
    }
    const resp = await request(options)
    return resp
  }

  async getLocation ({id}) {
    const resp = await request.get(`${this.api}/api/locations/${id}`)
    return resp
  }
  async getLocations ({filter}) {
    const resp = await request.get(`${this.api}/api/locations/?${queryString.stringify(filter)}`)
    return resp
  }
  async updateLocation ({id, updates}) {
    const options = {
      uri: `${this.api}/api/locations/${id}`,
      method: `POST`,
      json: true,
      body: updates
    }
    const resp = await request(options)
    return resp
  }

  async deleteLocation ({id}) {
    const options = {
      uri: `${this.api}/api/locations/${id}`,
      method: `DELETE`
    }
    const resp = await request(options)
    return resp
  }
}
