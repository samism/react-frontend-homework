import axios from 'axios';

class Axios {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: 5000
    });

    this.instance.interceptors.response.use(
      response => response,
      error => {
        const {
          config,
          response: { status }
        } = error;

        if (status === 500) {
          return new Promise(resolve => resolve(axios(config)));
        }

        return Promise.reject(error);
      }
    );
  }

  get(url) {
    return this.instance.get(url);
  }
}

const ReliableAxios = new Axios(
  'https://homework-app.rocketmiles.com/fe-homework/'
);

export default ReliableAxios;
