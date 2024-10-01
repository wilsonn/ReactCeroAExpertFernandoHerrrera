import PropTypes from 'prop-types'

const newMessage = {
  message: 'Hola Mundo',
  title: 'Fernando'
};

export const FirstApp = ( { title, subtitle, name } ) => {
  //console.log(props);

  return (
    <>
      <h1>{ title }</h1>
      <code>{ JSON.stringify(newMessage) }</code>
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

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Fernando Herrera"
}
