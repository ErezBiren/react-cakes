import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MouseEventHandler } from "react";

const DeleteDialog: React.FC<{
  open: boolean;
  onResolved: MouseEventHandler;
  onRejected: MouseEventHandler;
}> = ({ open, onResolved, onRejected }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onRejected}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"האם למחוק את הנתונים?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={onRejected} color="primary">
            לא
          </Button>
          <Button onClick={onResolved} color="primary" autoFocus>
            כן
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
