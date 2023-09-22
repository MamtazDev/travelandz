import PropTypes from "prop-types";
// @mui
import Box from "@mui/material/Box";
//
import ProviderCard from "./provider-card";

// ----------------------------------------------------------------------

export default function ProviderCardList({ users }) {
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
        <ProviderCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

ProviderCardList.propTypes = {
  users: PropTypes.array,
};
