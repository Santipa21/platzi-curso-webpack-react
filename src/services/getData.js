const API = process.env.API  || 'https://randomuser.me/api/';

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    // devuelve todo, no solo el primero
    return data.results;

  } catch (error) {
    console.error('Fetch Error:', error);
    return null;
  }
};

export default getData;