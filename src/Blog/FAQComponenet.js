import * as React from 'react';
import '../Blog/FAQComponent.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
function FAQComponent() {
  
   const navigate = useNavigate
   const HandleClick = () =>
   {
     navigate("/Splitter");
   }
  return (
    <div class = "b">
      <div class="Container">
    
        <h1>FAQ'S </h1>
      <Accordion defaultExpanded>
        <AccordionSummary className="Accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="Accordion-summary-content">What is Expense Splitter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-summary-content">
          Expense Splitter is an easy way to capture shared expenses you've paid for and keep track of who has and hasn't paid you back. 
          You can also generate a pre-populated text message so your friends know what they owe you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className="Accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="Accordion-summary-content">How do I open Expense Splitter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-summary-content">
         There are two ways:
         <br></br>1. Login, tap the Services icon at the bottom of the accounts screen and then tap Expense Splitter (under My Payments). 
      <br></br> 2. Login, tap on one of your accounts, tap on a transaction, then tap Expense Splitter.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className="Accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="Accordion-summary-content">Can I split an expense unevenly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. After you’ve created an expense just tap ‘equally’ and change to ‘unequally”. 
          You’ll then be able to edit the amount each contact owes you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className="Accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="Accordion-summary-content">How do I delete an expense?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-summary-content">
          Login, tap Services, tap Expense Splitter.
          Tap Expenses at the top, then tap the expense you wish to delete, tap the Delete link at the top of the screen and confirm.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className="Accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Typography className="Accordion-summary-content">Are there a maximum number of expenses or contacts that can be added to Expense Splitter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-summary-content">
          Yes. You can add up to 50 expenses and up to 50 contacts per expense.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
   
    <Footer/>
    </div>
  );
}
export default FAQComponent;