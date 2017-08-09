import request from 'request-promise-native'
import queryString from 'query-string'
export class Content {
  constructor ({api, log}) {
    this.api = api
    this.log = log
  }

  async createContent ({content}) {
    const options = {
      uri: `${this.api}/api/contents`,
      method: `POST`,
      body: content,
      json: true,
      headers: { 'Accept': 'application/json' }
    }
    const resp = await request(options)
    return resp
  }

  async getContent ({id}) {
    const resp = await request.get(`${this.api}/api/contents/${id}`)
    return resp
  }
  async getContents ({filter}) {
    const resp = await request.get(`${this.api}/api/contents/?${queryString.stringify(filter)}`)
    return resp
  }
  async updateContent ({id, updates}) {
    const options = {
      uri: `${this.api}/api/contents/${id}`,
      method: `POST`,
      json: true,
      body: updates
    }
    const resp = await request(options)
    return resp
  }

  async deleteContent ({id}) {
    const options = {
      uri: `${this.api}/api/contents/${id}`,
      method: `DELETE`
    }
    const resp = await request(options)
    return resp
  }
}
