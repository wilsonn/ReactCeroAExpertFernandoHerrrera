import PropTypes from 'prop-types'

const newMessage = {
  message: 'Hola Mundo',
  title: 'Fernando'
};

export const FirstApp = ( { 
  title = "No hay titulo",
  subtitle = 5,
  name = "Fernando Herrera"
} ) => {

  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
  name: PropTypes.string
}