import React from "react";
import Layout from "../Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import './ContactForm.css';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div style={{backgroundColor:' #333',height:'84vh',borderTopRightRadius:'50px',borderTopLeftRadius:'50px',border:'4px solid orange'}}>
      
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" style={{color:'wheat'}}>Contact Us</Typography>
        <p style={{color:'wheat'}}>
        We're here to assist you every step of the way! Whether you have questions, feedback, or need support, our dedicated team is ready to help. Feel free to reach out to us through any of the following channels:
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  <a href="mailto:727823tuec802@skct.edu.in">expensesplitter@gmail.com</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    <Footer/>
    </Layout>
    </div>
  );
};

export default Contact;