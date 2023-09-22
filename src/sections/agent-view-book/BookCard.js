import img1 from "../../assets/agent/book/1.png";

const BookCard = () => {
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
      <div>
        <h3 className="agent_book_heading">CUSTPMER PRICE</h3>
        <h2 className="agent_book_title">850€</h2>
      </div>
      <div>
        <h3 className="agent_book_heading">BENEFIT</h3>
        <h2 className="agent_book_title">12%</h2>
      </div>
      <div>
        <h3 className="agent_book_heading">AGENCY PRICE</h3>
        <h2 className="agent_book_title">790€</h2>
      </div>
      <div>
        <button className="btn_primary">Book</button>
      </div>
    </li>
  );
};

export default BookCard;
