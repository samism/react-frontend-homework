import ReliableAxios from '../../utils/Axios';

class HotelResultService {
  get(endpoint) {
    return ReliableAxios.get(endpoint)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
