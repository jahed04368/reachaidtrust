async function handler(req, res) {
  const urlEndPoint =
    'https://react-getting-started-ae102-default-rtdb.firebaseio.com/events.json';
  const getData = await fetch(urlEndPoint)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  res.status(200).json(getData);
}

export default handler;
