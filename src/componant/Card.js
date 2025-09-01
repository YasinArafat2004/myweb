import { useNavigate } from 'react-router-dom';
import '../App.css';

const Card = ({ shoe, image, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to order page and send data
    navigate('/order', { state: { shoe, image, price } });
  };

  return (
    <div className="card">
      <img src={image} alt={shoe} />
      <h3>Name  : {shoe}</h3>
      <h2>Price : {price}</h2>
      <button onClick={handleClick} className='btn'>Order Now</button>
    </div>
  );
};

export default Card;




