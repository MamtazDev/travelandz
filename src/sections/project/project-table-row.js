import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { paths } from 'src/routes/paths';

// @mui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/custom-dialog';
//
import ProjectQuickEditForm from './project-quick-edit-form';

// ----------------------------------------------------------------------

export default function ProjectTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
  const { title, customer, description, phase, startDate, priority, status, cities } = row;
  console.log(row)

  const confirm = useBoolean();

  const quickEdit = useBoolean();

  const popover = usePopover();

  return (
    <>

      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>
        <Link to={paths.dashboard.project.profile(row._id)} style={{ textDecoration: 'none' }}>

        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={customer} src={customer} sx={{ mr: 2 }}>{title?.charAt(0) ?? "U"}
        </Avatar>

          <ListItemText
            primary={title}
            secondary={cities}
            primaryTypographyProps={{ typography: 'body2' }}
            secondaryTypographyProps={{
              component: 'span',
              color: 'text.disabled',
            }}
          />
        </TableCell>
        </Link>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>
          {description ? description : "Unknown Customer"}
        </TableCell>


        <TableCell sx={{ whiteSpace: 'nowrap' }}>{phase}</TableCell>

        


        <TableCell sx={{ whiteSpace: 'nowrap' }}>{priority}</TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={
              (status === 'new' && 'success') ||
              (status === 'proposal' && 'warning') ||
              (status === 'pre-booking' && 'error') ||
              (status === 'booking' && 'success') ||
              (status === 'pre-travel' && 'warning') ||
              (status === 'in-travel' && 'error') ||
              (status === 'post-travel' && 'success') ||
              'default'
            }
          >
            {status}
          </Label>
        </TableCell>

       
        <TableCell sx={{ whiteSpace: 'nowrap' }}>
        {new Date(startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </TableCell>
      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
          
          <Tooltip name="Quick Edit" placement="top" arrow>
            <IconButton color={quickEdit.value ? 'inherit' : 'default'} onClick={quickEdit.onTrue}>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Tooltip>

          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>
     
      <ProjectQuickEditForm currentProject={row} open={quickEdit.value} onClose={quickEdit.onFalse} />

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
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
        name="Delete"
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

ProjectTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
