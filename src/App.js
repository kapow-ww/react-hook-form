import "./App.css";
import { Container, Box } from "@mui/material";
import FormDemo from "./screen/form-demo";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: grey[200] }}>
      <Box sx={{ my: 4, position: "relative" }}>
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="https://github.com/kapow-ww/react-hook-form"
          target="_blank"
        >
          <div
            style={{
              position: "fixed",
              zIndex: 99,
              right: 0,
              top: "10px",
              padding: "10px",
              backgroundColor: grey[400],
              fontSize: "14px",
            }}
          >
            See code
          </div>
        </a>
        <FormDemo />
      </Box>
    </Container>
  );
}

export default App;
