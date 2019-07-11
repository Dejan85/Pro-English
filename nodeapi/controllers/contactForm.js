const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

exports.contactForm = (req, res) => {
  const { name, email, title, question } = req.body;

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us3.api.mailchimp.com/3.0/lists/35190d402b',
    method: 'POST',
    headers: {
      Authorization: process.env.API_MAILCHIMP
    },
    body: postData
  };

  request(options, (err, response, body) => {
    console.log('radi');
    if (err) {
      console.log(err);
    } else {
      if (response.statusCode === 200) {
        console.log('success');
      } else {
        console.log('nesto nece da radi');
      }
    }
  });

  return res.json(console.log('radi'));
};
