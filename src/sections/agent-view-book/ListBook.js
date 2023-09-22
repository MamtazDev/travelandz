import { Container } from "@mui/material";
import AgentAddPriceMenualy from "./AgentAddPriceMenualy";
import BookCard from "./BookCard";
import BookedCard from "./BookedCard";
import EditBook from "./EditBook";

const ListBook = ({ type }) => {
  return (
    <Container className="revase_margin_top">
      <ul className="list_books">
        <BookCard />
        <BookedCard />
        <EditBook />
        <AgentAddPriceMenualy />
      </ul>
    </Container>
  );
};

export default ListBook;
