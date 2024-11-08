import "../styles/card.css";

let MCard = ({ chachu, tau, mamu }) => {
  return (
    <div className="cardu">
      <p className="availability">{mamu}</p>
      <img src={chachu} className="card-img" />
      <p className="card-text">{tau}</p>
    </div>
  );
};

export default MCard;
