import request from 'request-promise-native'

export class Location {
  constructor ({api, log, token}) {
    this.api = api
    this.log = log
    this.token = token
  }

  async createLocation ({location}) {
    const options = {
      uri: `${this.api}/api/locations`,
      method: `POST`,
      body: location,
      json: true,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }

  async getLocation ({id}) {
    const options = {
      uri: `${this.api}/api/locations/${id}`,
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

  async getLocations ({filter}) {
    const options = {
      uri: `${this.api}/api/locations`,
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

  async updateLocation ({id, updates}) {
    const options = {
      uri: `${this.api}/api/locations/${id}`,
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

  async deleteLocation ({id}) {
    const options = {
      uri: `${this.api}/api/locations/${id}`,
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
