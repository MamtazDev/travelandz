import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types';
// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function MailItem({ mail, selected, onClickMail, sx, ...other }) {
  return (
    <ListItemButton
      onClick={onClickMail}
      sx={{
        p: 1,
        mb: 0.5,
        borderRadius: 1,
        ...(selected && {
          bgcolor: 'action.selected',
        }),
        ...sx,
      }}
      {...other}
    >
     

      <>
        <ListItemText
          primary={mail.from.text}
          primaryTypographyProps={{
            noWrap: true,
            variant: 'subtitle2',
          }}
          secondary={mail.subject}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: mail.isUnread ? 'subtitle2' : 'body2',
            color: mail.isUnread ? 'text.primary' : 'text.secondary',
          }}
        />

        <Stack alignItems="flex-end" sx={{ ml: 2, height: 44 }}>
          <Typography
            noWrap
            variant="body2"
            component="span"
            sx={{
              mb: 1.5,
              fontSize: 12,
              color: 'text.disabled',
            }}
          >
            {formatDistanceToNowStrict(new Date(mail.date), {
              addSuffix: false,
            })}
          </Typography>

          {!!mail.isUnread && (
            <Box
              sx={{
                bgcolor: 'info.main',
                width: 8,
                height: 8,
                borderRadius: '50%',
              }}
            />
          )}
        </Stack>
      </>
    </ListItemButton>
  );
}

MailItem.propTypes = {
  mail: PropTypes.object,
  onClickMail: PropTypes.func,
  selected: PropTypes.bool,
  sx: PropTypes.object,
};
