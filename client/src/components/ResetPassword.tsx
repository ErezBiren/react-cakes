import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Clear as ClearIcon,
  MailOutline as MailIcon,
} from "@material-ui/icons";
import { ChangeEvent, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// todo: fix the any
const ResetPassword: React.FC<{ open: boolean; handleClose: any }> = ({
  open,
  handleClose,
}) => {
  const [data, setData] = useState({
    email: "",
    emailFilled: false,
  });

  const handleResetPass = () => {
    // todo :call google api for reset password
  };

  const ClearEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData({
      ...data,
      email: "",
      emailFilled: false,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.name + "Filled"]: e.target.value,
    });
  };

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

        <Typography id="modal-modal-title" variant="h6" component="h2">
          כתובת האימייל איתה נרשמת למערכת:
        </Typography>

        <TextField
          value={data.email}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="דואר אלקטרוני"
          name="email"
          autoComplete="email"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {data.emailFilled && (
                  <IconButton onClick={ClearEmail}>
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleResetPass}
        >
          איפוס
        </Button>

        <Typography>
          במידה ותוך מספר דקות לא קיבלתם את אימייל איפוס הסיסמה יש לבדוק בתיבת
          הספאם / דואר זבל בחשבון האימייל שלכם.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ResetPassword;
