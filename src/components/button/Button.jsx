import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="main-btn">
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
