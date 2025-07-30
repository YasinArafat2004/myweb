import { useNavigate } from 'react-router-dom';
import '../App.css';

const Card = ({ shoe,image}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about', { state:{shoe,image}});
    };

    return (
        <div className="card">
            <img src={image} alt={shoe} />
            <button onClick={handleClick} className='btn'>order {shoe}</button>
        </div>
    );
};

export default Card;



