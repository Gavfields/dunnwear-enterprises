import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import testImg from "../public/assets/Budda.png";

export default function Hero() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "calc(100vh - 64px)",
        }}
      >
        <Image src={testImg} fill quality={100} alt={"Phoenix Suns Logo"} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Paper
          elevation={24}
          sx={{
            "&.MuiPaper-root": {
              backgroundColor: "#ffffffBB",
            },
            padding: (theme) => theme.spacing(4),
            marginTop: (theme) => theme.spacing(48),
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 24,
            }}
          >
            Get the peice of your dreams made.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
