import MediaTable from '../components/MediaTable';
import {Typography} from '@mui/material';

const MyFiles = () => {
  return (
    <>
      <Typography component="h1" variant="h2">
        Home
      </Typography>
      <MediaTable allFiles={false} />
    </>
  );
};

export default MyFiles;
