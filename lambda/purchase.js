const stripe = require("stripe")("sk_test_BiZbA7CYWZbZ9rzU6ZaMSlDq");

module.exports.handler = (event, context, callback) => {

  //const headers = {"Content-Type": "text/plain"}
  const requestBody = JSON.parse(event.body);
  const token = requestBody.token.id;
  //const amount = requestBody.charge.amount;
  //const currency = requestBody.charge.currency;
  //const email = requestBody.charge.email;

  return stripe.charges.create({ // Create Stripe charge with token
    amount: 2000,
    currency: "usd",
    //receipt_email: email,
    description: 'Serverless Stripe Test charge',
    source: token,
  }).then(callback(null,{
      statusCode: 200,
      body: "Charge processed succesfully!",
    }))
};