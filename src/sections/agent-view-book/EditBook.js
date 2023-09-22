import Box from "@mui/material/Box";
import { useState } from "react";
import img1 from "../../assets/agent/book/1.png";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "0px 0px 10px 0px rgba(26, 26, 51, 0.08)",
  p: 4,
  borderRadius: "16px",
};

const EditBook = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editPrice = async () => {
    // do something with the edit price api endpoint

    handleClose();
  };

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
      <div></div>
      <div></div>

      <div>
        <h3 className="agent_book_heading">AGENCY PRICE</h3>
        <h2 className="agent_book_title">56€</h2>
      </div>
      <div>
        <div>
          <button onClick={handleOpen} className="btn_outline">
            Edit
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modal_close">
                <svg
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 5L15 15M5 15L15 5"
                    stroke="#1A1A33"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="pera">
                Edit the price the activity website <br /> provided you:
              </p>
              <input className="input_agent_boook" />
              <button onClick={editPrice} className="btn_add_price">
                Add price
              </button>
            </Box>
          </Modal>
        </div>
      </div>
    </li>
  );
};

export default EditBook;
