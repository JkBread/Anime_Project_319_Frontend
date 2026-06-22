import { Button } from "@mui/material";

const BackButton = () => {
  return (
    <Button color="inherit" onClick={() => history.back()}>
      Back
    </Button>
  );
};

export default BackButton
