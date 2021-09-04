import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteDialog({open,onResolved, onRejected}) {
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={onRejected}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"האם למחוק את הנתונים?"}</DialogTitle>
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
}