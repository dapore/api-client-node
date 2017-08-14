import axios from 'axios'
export class Content {
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

  async createContent ({content}) {
    const resp = (await this.instance.post(`/contents`, content)).data
    return resp
  }

  async getContent ({id}) {
    const resp = (await this.instance.get(`/contents/${id}`)).data
    return resp
  }

  async getContents ({filter}) {
    const resp = (await this.instance.get(`/contents`, {params: filter})).data
    return resp
  }

  async updateContent ({id, updates}) {
    const resp = (await this.instance.post(`/contents/${id}`, updates)).data
    return resp
  }

  async deleteContent ({id}) {
    const resp = (await this.instance.delete(`/contents/${id}`)).data
    return resp
  }
}
