import PropTypes from "prop-types";
// @mui
import Box from "@mui/material/Box";
//
import LeadCard from "./lead-card";

// ----------------------------------------------------------------------

export default function LeadCardList({ users }) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
    >
      {users.map((user) => (
        <LeadCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

LeadCardList.propTypes = {
  users: PropTypes.array,
};
