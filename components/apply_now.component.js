import _ from 'lodash';
import sizeMe from 'react-sizeme';
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

const ApplyNow = ({ size, onClick }) => {
  const isMobile = size.width < 768;
  const styles = createStyles(isMobile);

  return (
    <div style={styles.container}>
      <h2 className="title is-2" style={{ textAlign: 'center' }}>
        Apply Now
      </h2>
      <Form
        onSubmit={onClick}
        validate={({ name, email }) => {
          return {
            name: !name ? 'Your name is required' : undefined,
            email: !email ? 'An email is required' : undefined
          }
        }}
      >
        {({submitForm}) => {
          return (
            <form onSubmit={submitForm} style={styles.form.container}>
              <div className="columns" style={styles.form.textRow}>
                <div className="column is-6">
                  <Text field="name" type="text" placeholder="Name" style={styles.form.text}/>
                </div>
                <div className="column is-6">
                  <Text field="email" type="email" placeholder="E-mail" style={styles.form.text}/>
                </div>
              </div>
              <Textarea
                field="message"
                placeholder="Introduce yourself..."
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
                    Submit
                  </button>
                </div>
                <div className="column is-4"/>
              </div>
            </form>
          )
        }}
      </Form>
    </div>
  );
}

export default sizeMe()(ApplyNow);

const createStyles = (isMobile) => {
  const defaults = {
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
  };
  const mobile = isMobile ? {
    container: {
      width: '100%',
      margin: '0 10px'
    }

  } : null;
  return _.merge(defaults, mobile);
}
