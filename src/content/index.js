import request from 'request-promise-native'
export class Content {
  constructor ({api, token, log}) {
    this.api = api
    this.log = log
    this.token = token
  }

  async createContent ({content}) {
    const options = {
      uri: `${this.api}/api/contents`,
      method: `POST`,
      body: content,
      json: true,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
    const resp = await request(options)
    return resp
  }

  async getContent ({id}) {
    const options = {
      uri: `${this.api}/api/contents/${id}`,
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
  async getContents ({filter}) {
    const options = {
      uri: `${this.api}/api/contents`,
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
  async updateContent ({id, updates}) {
    const options = {
      uri: `${this.api}/api/contents/${id}`,
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

  async deleteContent ({id}) {
    const options = {
      uri: `${this.api}/api/contents/${id}`,
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
