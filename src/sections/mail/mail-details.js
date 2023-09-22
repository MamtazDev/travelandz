import PropTypes from 'prop-types';
// @mui
import { darken, lighten, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog'; // Add this import
import DialogTitle from '@mui/material/DialogTitle'; // Add this import
import DialogContent from '@mui/material/DialogContent'; // Add this import
import DialogActions from '@mui/material/DialogActions'; // Add this import
import TextField from '@mui/material/TextField';

// utils
import { fDateTime } from 'src/utils/format-time';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Editor from 'src/components/editor';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import Scrollbar from 'src/components/scrollbar';
import TextMaxLine from 'src/components/text-max-line';
import EmptyContent from 'src/components/empty-content';
import FileThumbnail from 'src/components/file-thumbnail';
import React, { useState, useEffect } from 'react';
import { useCompany } from "src/components/session";

// ----------------------------------------------------------------------

export default function MailDetails({ mail, renderLabel }) {

  const [project, setProject] = useState(null); // State variable to store the project details
  const [isModalOpen, setModalOpen] = useState(false); // State variable to control the visibility of the modal
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
    from: '',
    fromName: '',
  });

  // Set the initial state values for editable fields once the 'project' state is set
  useEffect(() => {
    if (project) {
      setEditedName(project.customerName || '');
      setEditedCustomer(project.customer || '');
      setEditedCustomerName(project.customerName || '');
      setEditedStartDate(project.startDate || '');
      setEditedEndDate(project.endDate || '');
      setEditedDescription(project.description || '');
      setEditedCities(project.cities || '');
      setEditedAdults(project.adults || '');
      setEditedKids(project.kids || '');

    }
  }, [project]);

  const [editedName, setEditedName] = useState('');
  const [editedAdults, setEditedAdults] = useState('');
  const [editedKids, setEditedKids] = useState('');
  const [editedCustomerName, setEditedCustomerName] = useState('');
  const [editedCustomer, setEditedCustomer] = useState('');
  const [editedStartDate, setEditedStartDate] = useState('');
  const [editedEndDate, setEditedEndDate] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedCities, setEditedCities] = useState('');


  const handleSendNeedsOkEmail = async () => {
    try {

      // Make a fetch or axios request to your server-side endpoint
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/emails/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully!');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error sending email:', error);
    }
  };

  const handleCreateEnquiry = async () => {


    const updatedEmailData = {
      ...emailData, // Use the existing emailData values
      text: mail.html,
      //fromEmail: mail.from.value[0].address,
      from: mail.from.text,
      fromName: mail.from.value[0].name,
      subject: mail.subject,
      date: mail.date,
    };
  
    try {
      console.log('updatedEmailData', updatedEmailData)
      const response = await fetch(
        `${process.env.REACT_APP_HOST_API}/tasks/ai/extractEntities`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedEmailData), // Use updatedEmailData here
        }
      );
      
  
      if (response.ok) {
        console.log("CONTENT OF THE EMAIL")
       
        const responseData = await response.json(); // Parse the JSON data here
        console.log(responseData);
        console.log(responseData.customer)
  
        // Assuming responseData is the API response data containing the project details
        // Create a new project object using the data from the API response
        const newProject = {
          title: emailData.subject, // Convert array to string
          customerName: responseData.name,
          customer: responseData.customer,
          startDate: new Date(responseData.startDate),
          endDate: responseData.endDate ? new Date(responseData.endDate) : null,
          userCreated: responseData.user, // Replace with the actual user ID
          responsible: responseData.responsible, // Replace with the actual responsible user ID
          priority: 'Low', // Replace with the actual priority value
          company: responseData.company, // Replace with the actual company ID
          size: 'small', // Replace with the actual size value
          status: responseData.status,
          createdOn: new Date(responseData.created),
          phase: responseData.phase,
          country: 'Country Value', // Replace with the actual country value
          notes: responseData.notes,
          cities: responseData.cities.join(', '), // Convert array to string
          grandTotal: responseData.grandTotal,
          days: responseData.duration,
          adults: responseData.adults,
          kids: responseData.kids
        };
  
        setProject(newProject);
        setModalOpen(true);

  
        console.log('Project saved successfully!');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error sending email:', error);
    }
    
  };
  const { userId, companyId } = useCompany(); 

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleSaveChanges = async  () => {
    try {
      const projectData = {
        title: editedName,
        company: companyId,
        responsible: userId,
        customerName: editedCustomer,
        customer: editedCustomer,
        description: editedDescription,
        startDate: editedStartDate,
        endDate: editedEndDate,
        userCreated: false,
        priority: 'Low',
        country: 'ES',
        cities: editedCities,
        phase: 'needs',
        adults: editedAdults,
        kids: editedKids
      };

      const response = await fetch(`${process.env.REACT_APP_HOST_API}/projects/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      console.log("WE HAVE TRIED TO CREATE PROJECT")
      console.log(response)

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Project created successfully!');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error creating project:', response.statusText);
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error creating project:', error);
    }
    setModalOpen(false);
  };
  
  

  const showAttachments = useBoolean(true);

  if (!mail) {
    return (
      <EmptyContent
        title="No Conversation Selected"
        description="Select a conversation to read"
        imgUrl="/assets/icons/empty/ic_email_selected.svg"
        sx={{
          borderRadius: 1.5,
          bgcolor: 'background.default',
        }}
      />
    );
  }
  

  const renderHead = (
    <Stack direction="row" alignItems="center" flexShrink={0} sx={{ height: 56, pl: 2, pr: 1 }}>
      <Stack direction="row" spacing={1} flexGrow={1}>
        {mail.labelIds && mail.labelIds.length > 0 && // Add a conditional check here
          mail.labelIds.map((labelId) => {
            const label = renderLabel(labelId);
  
            return label ? (
              <Label
                key={label.id}
                sx={{
                  bgcolor: alpha(label.color, 0.16),
                  color: (theme) =>
                    theme.palette.mode === 'light'
                      ? darken(label.color, 0.24)
                      : lighten(label.color, 0.24),
                }}
              >
                {label.name}
              </Label>
              
            ) : null;
          })}
      </Stack>
  
      {/* The rest of your code remains unchanged */}
    </Stack>
  );
  

  const renderSubject = (
    <Stack spacing={2} direction="row" flexShrink={0} sx={{ p: 2 }}>
      <TextMaxLine variant="subtitle2" sx={{ flexGrow: 1 }}>
        {mail.subject}
      </TextMaxLine>

      <Stack spacing={0.5}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <IconButton size="small">
            <Iconify width={18} icon="solar:reply-bold" />
          </IconButton>

          <IconButton size="small">
            <Iconify width={18} icon="solar:multiple-forward-left-broken" />
          </IconButton>

          <IconButton size="small">
            <Iconify width={18} icon="solar:forward-bold" />
          </IconButton>
          <Button variant="contained" color="primary" endIcon={<Iconify icon="solar:restart-bold" />} onClick={handleCreateEnquiry}>
          Generate Project
        </Button>
        <Box sy={{ width: '10rem' }} /> {/* Add a 1rem (16px) wide space between the buttons */}
          {/* Modal dialog */}
          <Dialog open={isModalOpen} onClose={handleCloseModal}>
            <DialogTitle>Edit Project Details</DialogTitle>
            <DialogContent>
              <TextField
                label="Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Customer Email"
                value={editedCustomer}
                onChange={(e) => setEditedCustomer(e.target.value)}
                fullWidth
                margin="normal"
              />
               <TextField
                label="Description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                  label="Cities (comma-separated)"
                  value={editedCities}
                  onChange={(e) => setEditedCities(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              <TextField
                  label="Start Date"
                  type="date"
                  value={editedStartDate}
                  onChange={(e) => setEditedStartDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="End Date"
                  type="date"
                  value={editedEndDate}
                  onChange={(e) => setEditedEndDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                 <TextField
                  label="Adults"
                  type="number"
                  value={editedAdults}
                  onChange={(e) => setEditedAdults(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                 <TextField
                  label="Kids"
                  type="number"
                  value={editedKids}
                  onChange={(e) => setEditedKids(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              {/* Add more TextField components for other editable fields as needed */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Close
              </Button>
              <Button onClick={handleSaveChanges} color="primary">
                Save Changes
              </Button>
            </DialogActions>
          </Dialog>

        </Stack>

        <Typography variant="caption" noWrap sx={{ color: 'text.disabled' }}>
          {fDateTime(mail.date)}{mail.lastModified}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderSender = (
    <Stack
      flexShrink={0}
      direction="row"
      alignItems="center"
      sx={{
        p: (theme) => theme.spacing(2, 2, 1, 2),
      }}
    >
      {mail.from && mail.from.value ? (
        <>
         <Avatar alt={mail.from.value[0].name} src={mail.from.value[0].name} sx={{ mr: 2 }}>
          {mail.from.value && mail.from.value[0].name.charAt(0).toUpperCase()}
        </Avatar>

  
          <ListItemText
            primary={
              <>
                {mail.from.text}
                <Box component="span" sx={{ typography: 'body2', color: 'text.disabled' }}>
                  {` <${mail.from.text}>`}
                </Box>
              </>
            }
            secondary={
              <>
                {mail.to ? (
                  <>
                    {`To: `}
                    {mail.to.value.map((person) => (
                      <Link key={person.name} sx={{ color: 'text.secondary' }}>
                        {`${person.address}, `}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Typography>Recipient information not available</Typography>
                )}
              </>
            }
            secondaryTypographyProps={{
              mt: 0.5,
              noWrap: true,
              component: 'span',
              typography: 'caption',
            }}
          />
        </>
      ) : (
        <Typography>Loading sender information...</Typography>
      )}
    </Stack>
  );
  
  const renderAttachments = (
    <Stack
      spacing={1}
      sx={{
        p: 1,
        borderRadius: 1,
        bgcolor: 'background.neutral',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <ButtonBase
          onClick={showAttachments.onToggle}
          sx={{
            color: 'text.secondary',
            typography: 'caption',
            borderRadius: 0.5,
          }}
        >
          <Iconify icon="eva:attach-2-fill" sx={{ mr: 0.5 }} />
          {mail.attachments?.length ?? 0} attachments {/* Add conditional check here */}
          <Iconify
            icon={
              showAttachments.value ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'
            }
            width={16}
            sx={{ ml: 0.5 }}
          />
        </ButtonBase>
  
        <Button startIcon={<Iconify icon="eva:cloud-download-fill" />}>Download</Button>
      </Stack>
  
      <Collapse in={showAttachments.value} unmountOnExit timeout="auto">
        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {mail.attachments?.map((attachment) => ( /* Add conditional check here */
            <Stack
              key={attachment.id}
              alignItems="center"
              justifyContent="center"
              sx={{
                width: 40,
                height: 40,
                flexShrink: 0,
                borderRadius: 1,
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'background.neutral',
              }}
            >
              <FileThumbnail
                tooltip
                imageView
                file={attachment.filename}
                onDownload={() => console.info('DOWNLOAD')}
                sx={{ width: 24, height: 24 }}
              />
            </Stack>
          )) ?? null} {/* Add conditional check here */}
        </Stack>
      </Collapse>
    </Stack>
  );

  const renderContent = (
    <Box sx={{ py: 3, overflow: 'hidden', flexGrow: 1 }}>
      <Scrollbar>
        <Markdown
          children={mail.html}
          sx={{
            px: 2,
            '& p': {
              typography: 'body2',
            },
          }}
        />
      </Scrollbar>
      
    </Box>
    
  );

  const renderEditor = (
    
    <Stack spacing={2} sx={{ p: (theme) => theme.spacing(0, 2, 2, 2) }}>
      <Editor simple id="reply-mail" />

      <Stack direction="row" alignItems="center">
        <Stack direction="row" alignItems="center" flexGrow={1}>
          <IconButton>
            <Iconify icon="solar:gallery-add-bold" />
          </IconButton>

          <IconButton>
            <Iconify icon="eva:attach-2-fill" />
          </IconButton>
          
        </Stack>

        

        <Button variant="contained" color="primary" endIcon={<Iconify icon="iconamoon:send-fill" />} onClick={handleSendNeedsOkEmail}>
          Send
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <Stack
      flexGrow={1}
      sx={{
        width: 1,
        minWidth: 0,
        borderRadius: 1.5,
        bgcolor: 'background.default',
      }}
    >
   

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderSubject}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderSender}

      {!!mail.attachments && mail.attachments.length > 0 && (
        <Stack sx={{ px: 2 }}>{renderAttachments}</Stack>
      )}

      {renderContent}

      
    </Stack>
  );
}

MailDetails.propTypes = {
  mail: PropTypes.object,
  renderLabel: PropTypes.func,
};
