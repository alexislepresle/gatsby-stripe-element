var stripe = require("stripe")("sk_test_BiZbA7CYWZbZ9rzU6ZaMSlDq");

module.exports.handler = (event, context, callback) => {

  const requestBody = JSON.parse(event.body);
  const token = requestBody.token.id;
  //const amount = requestBody.charge.amount; 
  //const currency = requestBody.charge.currency;
  //const email = requestBody.charge.email;

  return stripe.charges.create({ // Create Stripe charge with token
    amount : 1000,
    currency : "EUR",
    receipt_email: "lepresle.alexis@gmail.com",
    description: 'Serverless Stripe Test charge',
    source: token,
  })
    .then((charge) => { // Success response
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Charge processed succesfully!`,
          charge,
        }),
      };
      callback(null, response);
    })
    .catch((err) => { // Error response
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: err.message,
        }),
      };
      callback(null, response);
    })
};