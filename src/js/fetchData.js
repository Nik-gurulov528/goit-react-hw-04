import axios from 'axios';

export default async function fetchData(topicOfPhoto, numberOfPages) {
  axios.defaults.baseURL = 'https://api.unsplash.com/';
  const optionsData = {
    params: {
      query: topicOfPhoto,
      per_page: 15,
      page: numberOfPages,
    },
  };

  const data = await axios.get(
    `search/photos/?client_id=DQo52ob6X9fj6QHfqGqtJ3y-ixl93HGcROJmqp8GaZU`,
    optionsData
  );
  return data;
}
