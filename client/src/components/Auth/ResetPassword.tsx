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

import { sendResetPassword } from "../../Services/googleAPI";
import { validateEmail } from "../../Services/Validations";

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

// todo: fix the any
const ResetPassword: React.FC<{
  open: boolean;
  handleClose: any;
  handleResetSent: any;
}> = ({ open, handleClose, handleResetSent }) => {
  const [data, setData] = useState({
    email: "",
    emailError: "שדה חובה",
    emailFilled: false,
  });

  const handleResetPass = () => {
    sendResetPassword(data.email).then(() => {
      handleResetSent();
    });
  };

  const ClearEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData({
      ...data,
      email: "",
      emailFilled: false,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let error = "";
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        error = "כתובת דואר לא חוקית";
      }
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.name + "Filled"]: e.target.value,
      [e.target.name + "Error"]: error,
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
          error={data.emailError.length !== 0}
          helperText={data.emailError}
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
