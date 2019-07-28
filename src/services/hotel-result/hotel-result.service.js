import ReliableAxios from '../../utils/Axios';

class HotelResultService {
  get() {
    return ReliableAxios.get('/rates')
      .then(response => response.data)
      .catch(error => {
        console.log('Axios error: ', error);
      });
  }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
