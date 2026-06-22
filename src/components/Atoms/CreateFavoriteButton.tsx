import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateFavoriteButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      color="inherit"
      sx={{ backgroundColor: "#30e4ae", mr: 3 }}
      onClick={() => {
        navigate("/favorites/create");
      }}
    >
      Add Favorite
    </Button>
  );
};

export default CreateFavoriteButton;
