export class VibelyAPI {
  constructor ({api, log}) {
    this.api = api
    this.log = log
  }
  getEvent ({name, startTime, endDate, info}) {
    return {
      name: name,
      start_time: startTime,
      end_date: endDate,
      info: info,
      active: true
    }
  }
  getEvents ({token}) {
    return [
      {
        name: `Sunday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Monday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Tueday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Wednesday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Thursday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Friday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Saturday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      },
      {
        name: `Sunday Special`,
        startTime: Date.now(),
        end_date: Date.now() + 18000000,
        info: `The best ABC in town`
      }
    ].map(item => this.getEvent(item))
  }
}
