import ReliableAxios from '../../utils/Axios';

class HotelResultService {
  get() {
    return ReliableAxios.get('/rates')
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
