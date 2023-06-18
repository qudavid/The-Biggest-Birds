import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  fileCard: {
    adding: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px dashed #cbd5e0',
    minWidth: '380px',
    minHeight: '230px',
  },
  fileInputs: {
    position: 'relative',
    marginBottom: '1.5em',
  },
  input: {
    position: 'relative',
    top: '150px',
    fontFamily: 'calibri',
    width: '150px',
    padding: '10px',
    radius: '5px',
    border: '1px dashed #BBB',
    textAlign: 'center',
    backgroundColor: '#DDD',
    cursor: 'pointer',
  },
}));

