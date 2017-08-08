import React, { Component } from 'react';
import _ from 'lodash';
import sizeMe from 'react-sizeme';
import {
  Form,
  Text,
  Textarea
} from 'react-form';


export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  render() {
    const { size } = this.props;
    const isMobile = size.width < 768;
    const styles = createStyles(isMobile);

    return (
      <div style={styles.container}>
        {!this.state.submitted ?
            <h2 className="title is-2" style={{ textAlign: 'center' }}>Want to know more?</h2> : null
        }
        <Form
          onSubmit={() => {
            this.setState({
                submitted: true
            });
          }}

          validate={({ firstName, lastName, email, message }) => {
            return {
              firstName: !firstName ? 'Your first name is required' : undefined,
              lastName: !lastName ? 'Your last name is required' : undefined,
              email: !email ? 'An email is required' : undefined,
              message: !message ? 'Please provide a message' : undefined
            }
          }}
        >
          {({submitForm}) => {
            return !this.state.submitted ?
            (
              <form onSubmit={submitForm} style={styles.form.container}>
                <div className="columns" style={styles.form.textRow}>
                  <div className="column is-4">
                    <Text field="email" type="email" placeholder="Your email" style={styles.form.text}/>
                  </div>
                  <div className="column is-4">
                    <Text field="firstName" placeholder="Your first name" style={styles.form.text}/>
                  </div>
                  <div className="column is-4">
                    <Text field="lastName" placeholder="Your last name" style={styles.form.text}/>
              </div>
            </div>
              <Textarea
                field="message"
                placeholder="How can we help? Please add your phone number too if you wish us to call you."
                style={styles.form.textarea}
              />
              <div className="columns is-centered">
                <div className="column is-4"/>
                <div className="column is-4">
                  <button
                    style={styles.form.button}
                    className="button"
                    type="submit"
                  >
                    Contact Us
                  </button>
                </div>
                <div className="column is-4"/>
              </div>
              </form>
            ) : (
              <div style={{ fontWeight: 'bold' }}>
                Thank you for reaching out to us. You will hear from us soon!
              </div>)
          }}
        </Form>
      </div>
    );
  }
}

export default sizeMe()(Contact);

const createStyles = (isMobile) => {
  const defaults = {
    container: {
      marginTop: '80px',
      padding: '0 80px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    form: {
      container: {},
      text: {
        height: '45px',
        fontSize: '18px',
        padding: '10px',
        border: '0',
        backgroundColor: '#F3F1EF'
      },
      textarea: {
        width: '100%',
        height: '145px',
        fontSize: '18px',
        padding: '10px',
        resize: 'none',
        border: '0',
        backgroundColor: '#F3F1EF'
      },
      button: {
        marginTop: '20px',
        backgroundColor: '#E2632A',
        fontSize: '20px',
        color: 'white',
        width: '100%',
        height: '50px',
        borderRadius: '0'
      }
    }
  };
  const mobile = isMobile ? {
    container: {
      width: '100%',
      margin: '0 10px'
    }
  } : null;

  return _.merge(defaults, mobile);
}
