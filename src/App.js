import React from "react";
import QRCode from "react-qr-code";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

function App() {
  const classes = useStyles();

  // const generateQrCode = () => {
  //   try {
  //     const canvas = document.getElementById("123456");
  //     const pngUrl = canvas
  //       .toDataURL("image/png")
  //       .replace("image/png", "image/octet-stream");
  //     let downloadLink = document.createElement("a");
  //     downloadLink.href = pngUrl;
  //     downloadLink.download = "123456.png";
  //     document.body.appendChild(downloadLink);
  //     downloadLink.click();
  //     document.body.removeChild(downloadLink);

  //     const response = await QRCode.toDataURL("test qrcode generation");
  //     console.log(response);

  //   } catch (error) {
  //     console.log(error);
  //   }
  //};
  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Generate Download & Scan QR Code </h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} md={6} sm={12} xs={12}>
              <TextField label="Enter Text Here" />
              <div>
                <QRCode
                  id="123456"
                  value="https://www.youtube.com/watch?v=6piRLp7BV8o&ab_channel=RUN-UPRECORDS"
                  size={200}
                  level={"Q"}
                  includeMargin={true}
                />
              </div>

              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                // onClick={() => generateQrCode()}
              >
                Generate
              </Button>
            </Grid>
            <Grid item xl={4} md={6} sm={12} xs={12}></Grid>
            <Grid item xl={4} md={6} sm={12} xs={12}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

export default App;
