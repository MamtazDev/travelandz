import img1 from "../../assets/agent/book/1.png";

const BookedCard = () => {
  return (
    <li className="agent_view_book_card">
      <div className="book_details">
        <img className="agent_book_image" src={img1} alt="dfdfd" />
        <div>
          <h3 className="agent_book_heading">NAME</h3>
          <h2 className="agent_book_title">
            Palace Barcelona Hotel. Junior Suite.
          </h2>
        </div>
      </div>
      <div className="card_des">
        <h3 className="agent_book_heading">CUSTPMER PRICE</h3>
        <h2 className="agent_book_title">850€</h2>
      </div>
      <div className="card_des">
        <h3 className="agent_book_heading">BENEFIT</h3>
        <h2 className="agent_book_title">12%</h2>
      </div>
      <div className="card_des">
        <h3 className="agent_book_heading">AGENCY PRICE</h3>
        <h2 className="agent_book_title">790€</h2>
      </div>
      <div>
        <button className="btn_primary_booked">
          <CheckMark />
          Booked
        </button>
      </div>
    </li>
  );
};

export default BookedCard;

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M17 4L7 14L2 9"
      stroke="#1A1A33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M17 4L7 14L2 9"
        stroke="#1A1A33"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </svg>
);
