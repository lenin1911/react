function Card({ name, duration, logo, rating, fee, instructor }) {
  return (
    <div className="card">
      <img src={logo} alt={name} className="logo" />
      <h2>{name}</h2>
      <p>Instructor: <strong>  {instructor}</strong></p>
      <p>Duration: {duration}</p>
      <p>Rating: {rating}</p>
      <p>Fee: {fee}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default Card;