import { Container } from "@mui/material";
import avatarImage from "../../assets/agent/avatar.png";
const Hero = () => {
  return (
    <div className="agent_book_view_hero">
      <Container>
        <div className="hero_wrap">
          <div className="hero_right">
            <img className="avatarImage" src={avatarImage} alt="avatarImage" />
            <div>
              <h4 className="agent_hero_title">
                Maria José trip is ready to book.
              </h4>
            </div>
          </div>
          <div className="hero_left">
            <div className="agent_left_btn">
              <button className="btn_view_export">
                <PdfIcon />
                Export PDF
              </button>
              <button className="btn_view_export">
                <SentIcon />
                Send quote
              </button>
            </div>
            <div className="agent_left_price">
              <div>
                <h4 className="agent_hero_title">2132 €</h4>
              </div>
              <div className="wrap_sds">
                <h4 className="agent_left_price_h4">422€</h4>
                <p className="agent_left_price_pera">1062€/ person</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M5.83317 17.5C4.9127 17.5 4.1665 16.7538 4.1665 15.8333V2.5H11.6665L15.8332 6.66667V15.8333C15.8332 16.7538 15.087 17.5 14.1665 17.5H5.83317Z"
      stroke="#5482F9"
      stokeWidth="1.66667"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8335 2.5V7.5H15.8335"
      stroke="#5482F9"
      stokeWidth="1.66667"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10.8334H12.5"
      stroke="#5482F9"
      stokeWidth="1.66667"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 14.1666H12.5"
      stroke="#5482F9"
      stokeWidth="1.66667"
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.16683 10L3.6634 5.46916C3.5193 4.17225 4.85407 3.22027 6.03335 3.77888L15.987 8.49377C17.2579 9.09578 17.2579 10.9042 15.987 11.5062L6.03335 16.2211C4.85407 16.7797 3.5193 15.8278 3.6634 14.5308L4.16683 10ZM4.16683 10H10.0002"
      stroke="#5482F9"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
