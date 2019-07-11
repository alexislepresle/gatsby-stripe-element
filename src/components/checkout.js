import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements-universal';
import ReactNotification from "react-notifications-component";
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      mail: '',
      isSuccess: null,
      isError: null,
      isErrorRemplissage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }
  handleChange (e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  onSuccess(){
    this.setState({ isSuccess: true }); 
  }
  onError(){
    this.setState({ isError: true });
  }
  addNotification() {
    if(this.state.isSuccess === true){
      this.notificationDOMRef.current.addNotification({
        title: "Successful",
        message: "Thank you so much for your purchase  😊🤝!",
        type: "success",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismissable: { click: true }
      });
    }
    else {
      this.notificationDOMRef.current.addNotification({
        title: "Upssss",
        message: "An error with your credit card!  😓",
        type: "danger",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismissable: { click: true },
        dismiss: { duration: 4000 }
      });
    }
  }
  handleSubmit(ev){
    ev.preventDefault();
    let reponse = this.props.stripe.createToken().then(({token}) =>{
      const charge = JSON.stringify({
        token,
        charge: {
          amount: 1000,
          currency: 'usd',
          email: this.state.mail,
        },
      })
      axios.post('https://stripe-element.netlify.com/.netlify/functions/purchase', charge)
      .catch(this.onError())
      if(reponse.ok){
        this.onSuccess()
      }
      this.addNotification()
    })
  }
  render() {
    return (
    <div>
      <ReactNotification ref={this.notificationDOMRef} />
      <div className="checkout box" style={{width:"300px"}}>
      <p className="title"> 💸 Give me your money !</p>
      <p className="is-2 is-bold">Use any <b>name</b>, <b>email</b>, <b>4242 4242 4242 4242 as the credit card number</b>, any <b>3 digit number</b>, any <b>future date of expiration</b> and <b>postal code</b>.</p>
        <hr className="is-dark"/>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input 
                name="username"
                className="input" 
                type="text" 
                placeholder="Your name"               
                onChange={this.handleChange}
                value={this.state.username}
                required
              />
            </div>
          </div>  
          <div className="field">
            <div className="control">
              <input 
                name="mail"
                className="input" 
                type="text" 
                placeholder="Your E-mail"               
                onChange={this.handleChange}
                value={this.state.mail}
                required
              />
            </div>
          </div> 
          <div className="field">
            <div className="control">
              <CardElement/>
            </div>
          </div>           

          <hr/>
          <button  className="button is-rounded is-dark" style={{display: "flex", margin: "auto"}} type="submit">Buy for 10.00$</button>
        </form>
      </div>
    </div>
    );
  }
}

export default injectStripe(CheckoutForm);