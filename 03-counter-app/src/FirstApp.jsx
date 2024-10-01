import PropTypes from 'prop-types'

const newMessage = {
  message: 'Hola Mundo',
  title: 'Fernando'
};

const suma = (a, b) => {return a + b};

export const FirstApp = ( { title, subtitle} ) => {
  //console.log(props);

  return (
    <>
      <h1>{ title }</h1>
      <code>{ JSON.stringify(newMessage) }</code>
      <p>{subtitle}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string
}
