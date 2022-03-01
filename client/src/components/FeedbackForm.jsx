import * as React from 'react';
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, Stack }from '@mui/material';
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import addFeedback from "../actions/index";
import { teal } from '@mui/material/colors';
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';
import successAlert from '../assets/successAlert.png'


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          backgroundColor: teal[300],
          borderRadius: '18px',
          '&:hover': {
            backgroundColor: teal[300],
            borderColor: teal[300],
            boxShadow: 'none',
          },
        },
      },
    },
  },
});


export default function FeedbackForm() {

  const dispatch = useDispatch();
  
  const [feedback, setFeedback] = useState({
    experience: 0,
    payment_process: 0,
    coustomer_service: 0,
    comment: "",
  });

  const changeRating = (newRating, name) => {
    if (name === "experience") {
      setFeedback({ ...feedback, experience: newRating });
    } else if (name === "payment_process") {
      setFeedback({ ...feedback, payment_process: newRating });
    } else if (name === "coustomer_service") {
      setFeedback({ ...feedback, coustomer_service: newRating });
    } else if (name === "comment") {
      setFeedback({ ...feedback, comment: newRating });
    }
  };
  
  console.log(feedback);
  
  const sweetAlert = () => {
    Swal.fire({
      imageUrl: successAlert,
      html:
        "<p>Thank you for your message!</p>" +
        "<p>We will be in contact soon.</p>",
      imageWidth: 76,
      imageHeight: 112,
      confirmButtonText: "CLOSE",
      confirmButtonColor: "#11C4B0",
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addFeedback(feedback));
    setFeedback({experience: 0,
      payment_process: 0,
      coustomer_service: 0,
      comment: "",})
    sweetAlert()
  }


  return (
    <React.Fragment>
      <Container fixed><br/>
       <Stack spacing={1} textAlign="center">
            <h2 >Leave a feedback!</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
           <Typography component="legend">Rate your experience from 0 to 5 stars:</Typography>
           <Box textAlign="center" 
           sx={{
             marginBottom: 1,
             marginTop: 1,
             }}>
            <FormControlLabel
            control={ 
            <StarRatings
              rating={feedback.experience}
              starRatedColor="#11C4B0"
              starHoverColor="#11C4B0"
              changeRating={changeRating}
              numberOfStars={5}
              name="experience"
            />
          }
          />
           </Box>
            <Divider variant="middle" sx={{
              marginBottom: 1.5,
              marginTop: 1.5,
              }}/>
           <Typography component="legend">How satisfied are you with the payment process?</Typography>
           <Box textAlign="center"
           sx={{
             marginBottom: 1,
             marginTop: 1,
             }}>
            <FormControlLabel
            control={ 
            <StarRatings
              rating={feedback.payment_process}
              starRatedColor="#11C4B0"
              starHoverColor="#11C4B0"
              changeRating={changeRating}
              numberOfStars={5}
              name="payment_process"
            />
          }
          />
           </Box>
            <Divider variant="middle" sx={{
              marginBottom: 1.5,
              marginTop: 1.5,
              }} />
           <Typography component="legend">How satisfied are you with our customer service?</Typography>
           <Box textAlign="center"
           sx={{
             marginBottom: 1,
             marginTop: 1,
             }}>
            <FormControlLabel
            control={  
            <StarRatings
              rating={feedback.coustomer_service}
              starRatedColor="#11C4B0"
              starHoverColor="#11C4B0"
              changeRating={changeRating}
              numberOfStars={5}
              name="coustomer_service"
            />
          }
          />
           </Box>
            <Divider variant="middle" sx={{
              marginBottom: 1.5,
              marginTop: 1.5,
              }} />
           <Typography component="legend">Please leave a comment about your experience below:</Typography><br/>
           <Box textAlign="center"
           sx={{
             marginBottom: 1,
             marginTop: 1,
             }}>
               <TextField
                  id="comment"
                  name="comment"
                  label="Type your comment here..."
                  control="textarea"
                  type="text"
                  multiline={true}
                  rows={5}
                  fullWidth
                  sx={{ boxShadow: 3 }}
                  value={feedback.comment}
                  onChange={event=>changeRating(event.target.value, event.target.name)}    
                />
            </Box><br/>
            <ThemeProvider theme={theme}>
              <Button variant="contained" type="submit">
                Send feedback!
                </Button>
                </ThemeProvider>
                </form>
                </Stack>
                </Container>
                </React.Fragment>
  );
}
