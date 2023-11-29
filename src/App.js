import "./App.css";
import { Container, Box, Typography } from "@mui/material";
import FormDemo from "./screen/form-demo";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: grey[200] }}>
      <Box sx={{ my: 4 }}>
        <FormDemo />
      </Box>
    </Container>
  );
}

export default App;
