import {
  Form,
  Text,
  Select,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  NestedForm,
  FormError
} from 'react-form';

export default () => (
  <div style={styles.container}>
    <h2 className="title is-2" style={{ textAlign: 'center' }}>
      Want to know more?
    </h2>
    <Form
      onSubmit={console.log}
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
        return (
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
        )
      }}
    </Form>
  </div>
)

const styles = {
  container: {
    marginTop: '80px',
    paddingBottom: '80px',
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
}
