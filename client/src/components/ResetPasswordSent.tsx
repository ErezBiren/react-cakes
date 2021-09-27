import { Box, IconButton, Modal, Typography } from "@material-ui/core";
import { Clear as ClearIcon } from "@material-ui/icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const ResetPasswordSent: React.FC<{
  open: boolean;
  handleClose: any;
}> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton onClick={handleClose}>
          <ClearIcon />
        </IconButton>

        <Typography>אימייל איפוס סיסמא נשלח לכתובת שהוזנה.</Typography>
      </Box>
    </Modal>
  );
};

export default ResetPasswordSent;
