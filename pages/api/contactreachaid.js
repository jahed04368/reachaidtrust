import fs from 'fs';
import path from 'path';

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const contactInfo = {
      email: email,
      text: feedbackText,
    };
    // To save customer details on a file /data/contactInfo.json
    // const filePath = path.join(process.cwd(), 'data', 'contactInfo.json');
    // const fileData = fs.readFileSync(filePath);
    // const data = JSON.parse(fileData);
    // data.push(newFeedback);
    // fs.writeFileSync(filePath, JSON.stringify(data));
    // res.status(201).json({ message: 'Success!', feedback: newFeedback });

    const contactEndpoint =
      'https://react-getting-started-ae102-default-rtdb.firebaseio.com/contact.json';
    fetch(contactEndpoint, {
      method: 'POST',
      body: JSON.stringify(contactInfo),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    res.status(201).json({ message: 'Success!', feedback: contactInfo });
  } else {
    res.status(200).json({
      message: 'this works',
    });
  }
}

export default handler;
