import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../../Context/ProductContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
export default function OneProd({ item }) {
  const { deleteProduct } = useContext(productContext);
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={item.img} alt="photo" />
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          {item.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          {item.type}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => deleteProduct(item.id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
