import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoWatchlistButton = () => {
    const navigate = useNavigate();

    return (
        <Button 
        sx={{
            fontSize: 20,   
            backgroundColor: "rgb(132, 29, 243)",
            color: "#f6e9ff",
            "&:hover": {
                backgroundColor: "rgb(132, 29, 243)",
            },
            borderRadius: 3,
            }}

        onClick={() => {
            navigate("/watchlist");
        }}
            >
            ⏱︎ 
        </Button>
    );  
};

export default GoWatchlistButton;