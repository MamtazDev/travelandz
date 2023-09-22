import { format } from "date-fns";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the CSS for the editor
import { paths } from "src/routes/paths";

// @mui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// components
import { ConfirmDialog } from "src/components/custom-dialog";
import CustomPopover, { usePopover } from "src/components/custom-popover";
import Iconify from "src/components/iconify";
import Label from "src/components/label";
//
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
} from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import { useRouter } from "src/routes/hooks";
import TaskQuickEditForm from "./task-quick-edit-form";
import { CheckoutContext } from "../checkout/context/checkout-context";

// ----------------------------------------------------------------------

export default function TaskTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
}) {
  const {
    title,
    avatarUrl,
    company,
    role,
    status,
    email,
    deadline,
    priority,
    project,
    _id,
    description,
    user,
    updatedAt,
  } = row;
  const router = useRouter();
  console.log(row);
  const [solveDialogOpen, setSolveDialogOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [showEditorPopup, setShowEditorPopup] = useState(false); // Add state for editor pop-up
  const [loading, setLoading] = useState(false);

  const { setItinerary } = useContext(CheckoutContext);

  // console.log(itinerary, "fdfdf");

  const [emailData, setEmailData] = useState({
    recipient: "",
    message: "",
    sender: "",
    fromName: "",
    taskId: _id,
    title: title,
  });

  const confirm = useBoolean();

  const quickEdit = useBoolean();

  const popover = usePopover();

  const handleSolveNow = () => {
    setSolveDialogOpen(true);
  };

  const handleSolveDialogClose = () => {
    setSolveDialogOpen(false);
  };

  const handleView = useCallback(
    (id, response) => {
      console.log(id);
      setItinerary(response);
      router.push(paths.agentView);
    },
    [router]
  );

  const [proposalData, setProposalData] = useState({
    projectId: project,
    task: _id,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProposalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionSelect = async (option) => {
    setSelectedOption(option);
    setSolveDialogOpen(false); // Close the dialog
    setLoading(true); // Show the loading spinner

    switch (option) {
      case "SendEmail":
        // Your logic for handling "Send Email" goes here
        console.log("hola mani");
        console.log(
          title,
          avatarUrl,
          company,
          role,
          status,
          email,
          deadline,
          description,
          project,
          _id,
          user
        );
        try {
          // Make a POST request to your backend API
          const response = await fetch(
            `${process.env.REACT_APP_HOST_API}/tasks/ai/replytoEnquiry`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ company, project }),
            }
          );
          console.log("LA RESPUESTA ES");
          console.log(response);

          if (!response.ok) {
            // Handle error if needed
            console.error("Error sending email");
            return;
          }

          const data = await response.json(); // Wait for the JSON data to resolve
          console.log("this is what the backend replies");
          console.log(data);
          if (
            data &&
            data.choices &&
            data.choices.length > 0 &&
            data.choices[0].text
          ) {
            console.log("it seems like theres an answer");
            console.log(data.choices[0].text);
            setEditorContent(data.choices[0].text); // Set the editor content with the data from the backend
            setShowEditorPopup(true); // Open the editor popup
          } else {
            console.error("Received invalid data from the backend." + data);
          }
          /* await setEmailData((prevData) => ({
             ...prevData,
             text: data.text, // Use the 'text' property of the currently opened email
             from: data.from.text, // Set the 'from' field from the email data
             fromName: data.from.name, // Set the 'fromName' field from the email data
             subject: data.subject, // Set the 'subject' field from the email data
           }));*/

          // Handle success if needed
          console.log("Email sent successfully");
        } catch (error) {
          console.error("Error sending email:", error);
        }

        // navigate('/dashboard/email'); // Redirect the user to "dashboard/email"
        break;
      case "CreateProposal":
        console.log("creating proposal");
        console.log("Mohi");
        console.log(proposalData);

        try {
          const response = await fetch(
            "http://localhost:4000/createItineraryForProject",
            {
              // const response = await fetch(`${process.env.REACT_APP_HOST_API}/createItineraryForProject`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(proposalData),
            }
          );

          const resData = await response.json();

          if (response.ok) {
            // console.log("Proposal created successfully" + _id);
            // Redirect to the new page after successful proposal creation
            handleView(_id, resData);
            console.log(resData, "kkk");
            // handleView(_id)
          } else {
            console.error("Failed to create proposal");
          }
        } catch (error) {
          console.error("An error occurred while creating proposal", error);
        }
        // handleView(_id)

        // handleView(_id)

        break;
      case "MarkAsSolved":
        // Your logic for handling "Mark As Solved" goes here
        console.log("Marking task as solved...");
        try {
          // Make a POST request to your backend API
          const response = await fetch(
            `${process.env.REACT_APP_HOST_API}/tasks/edit/${_id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "solved" }),
            }
          );
          console.log("task updated successfully");

          if (!response.ok) {
            // Handle error if needed
            console.error("Error updating task");
            return;
          }
        } catch (error) {
          console.error("Error updating task:", error);
        }

        break;
      default:
        break;
    }
    setSolveDialogOpen(false); // Close the dialog after the option has been selected
  };
  const handleEditorClose = () => {
    // Close the Quill editor pop-up
    setShowEditorPopup(false);
  };

  const handleSaveEmailContent = async () => {
    // Implement saving the edited email content if needed
    try {
      // Make a fetch or axios request to your server-side endpoint
      emailData.taskStatus = "needs";
      emailData.message = "We have needs";
      console.log("voy a enviar los datos");
      console.log(emailData);
      const response = await fetch(
        `${process.env.REACT_APP_HOST_API}/emails/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Email sent successfully!");
        console.log(response);
        if (response.dateEmailSent) {
          console.log("email sent");
        }
      } else {
        // Handle error (e.g., show an error message)
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error sending email:", error);
    }
    console.log("Saving email content:", editorContent);
    handleEditorClose();
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={title} src={avatarUrl} sx={{ mr: 2 }} />

          <ListItemText
            primary={title}
            secondary={email}
            primaryTypographyProps={{ typography: "body2" }}
            secondaryTypographyProps={{
              component: "span",
              color: "text.disabled",
            }}
          />
        </TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>{description}</TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>{priority}</TableCell>

        <TableCell sx={{ whiteSpace: "nowrap" }}>
          {format(new Date(deadline), "dd-MM-yyyy HH:mm")}
        </TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={
              (row.status === "waiting" && "warning") ||
              (row.status === "pending" && "warning") ||
              (row.status === "banned" && "error") ||
              (row.status === "solved" && "success") ||
              (row.status === "cancelled" && "error") ||
              "default"
            }
          >
            {row.status}
          </Label>
        </TableCell>

        <TableCell align="right" sx={{ px: 1, whiteSpace: "nowrap" }}>
          <Tooltip title="Quick Edit" placement="top" arrow>
            <IconButton
              color={quickEdit.value ? "inherit" : "default"}
              onClick={quickEdit.onTrue}
            >
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Tooltip>

          <IconButton
            color={popover.open ? "inherit" : "default"}
            onClick={popover.onOpen}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
        <TableCell sx={{ whiteSpace: "nowrap" }}>
          {format(new Date(updatedAt), "dd-MM-yyyy HH:mm")}
        </TableCell>

        {/* New Menu Item */}
        <CustomPopover
          open={popover.open}
          onClose={popover.onClose}
          arrow="right-top"
          sx={{ width: 140 }}
        >
          <MenuItem onClick={handleSolveNow}>
            <Iconify icon="iconamoon:send-fill" />
            Solve Now
          </MenuItem>

          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: "error.main" }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem
            onClick={() => {
              onEditRow();
              popover.onClose();
            }}
          >
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>
        </CustomPopover>
        {/* End of New Menu Item */}

        <Dialog
          open={solveDialogOpen}
          onClose={() => setSolveDialogOpen(false)}
        >
          <DialogTitle>Select an Option</DialogTitle>
          <DialogContent>
            <List>
              <ListItem button onClick={() => handleOptionSelect("SendEmail")}>
                <ListItemText primary=" Send an Email to reply to customer" />
              </ListItem>
              <ListItem
                button
                onClick={() => handleOptionSelect("CreateProposal")}
              >
                <ListItemText primary="Create Personalized Travel Plan" />
              </ListItem>
              <ListItem
                button
                onClick={() => handleOptionSelect("MarkAsSolved")}
              >
                <ListItemText primary="Mark the Task As Solved" />
              </ListItem>
            </List>
          </DialogContent>
        </Dialog>

        {/* Quill Editor Pop-up */}
        <Dialog open={showEditorPopup} onClose={handleEditorClose}>
          <DialogTitle>Edit Email Content</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              type="email"
              margin="dense"
              variant="outlined"
              label="Your Email address"
              value={emailData.from}
              onChange={(e) =>
                setEmailData({ ...emailData, from: e.target.value })
              }
            />

            <TextField
              fullWidth
              type="email"
              margin="dense"
              variant="outlined"
              label="Customer's Email address"
              value={emailData.to}
              onChange={(e) =>
                setEmailData({ ...emailData, to: e.target.value })
              }
            />

            <ReactQuill value={editorContent} onChange={setEditorContent} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditorClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSaveEmailContent} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </TableRow>

      <TaskQuickEditForm
        currentTask={row}
        open={quickEdit.value}
        onClose={quickEdit.onFalse}
      />

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            handleSolveNow(); // Call the handleSendEmail function when "Send a New Email" is clicked
            popover.onClose();
          }}
        >
          <Iconify icon="iconamoon:send-fill" />
          Solve Now
        </MenuItem>
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem
          onClick={() => {
            onEditRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}

TaskTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
