import './button.css'
import PropTypes from 'prop-types'

const Button = ({ text = 'Кнопка', color = 'gray' }) => {
    return (
        <button 
            style={{ backgroundImage: color }}
            className='button'    
        >
                {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Button