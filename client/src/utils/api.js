const API_BASE_URL = 'http://localhost:3000/proxy';

export async function getChatData(page) {
  const url = `${API_BASE_URL}?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching chat data');
  }
}
