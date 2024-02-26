/**
 * Returns text
 */
const fetchText = async (url: string): Promise<string> => {
  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    throw new ReferenceError(response.statusText);
  }

  return response.text();
};

export default fetchText;
