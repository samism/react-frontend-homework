import nock from 'nock';

import Axios from './Axios';

describe('Axios', () => {
  it('is a singleton', () => {
    expect(Axios).toBeTruthy();
  });

  it('is able to retry the request given an occasional 500 error', async () => {
    const url = 'http://example.com/';

    const requests = [
      nock(url)
        .get('/')
        .reply(500),
      nock(url)
        .get('/')
        .reply(500),
      nock(url)
        .get('/')
        .reply(500),
      nock(url)
        .get('/')
        .reply(200, 'helloworld')
    ];

    const res = await Axios.get(url);
    expect(res.data).toEqual('helloworld');

    requests.forEach(s => s.done());
  });
});
