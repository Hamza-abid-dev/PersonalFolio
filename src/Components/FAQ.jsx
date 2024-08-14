import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import shadows from "@mui/material/styles/shadows";

const FAQ = () => {
  return (
    <div>
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 4, mt: 10 }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "40px" },
                fontWeight: "700",
              }}
            >
              FAQ
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" }, mt: 1 }}
            >
              Start building your online presence effectively with our upcoming
              course on leveraging <br /> LinkedIn and AI! Learn how to optimize
              your LinkedIn profile.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                background: "linear-gradient(to right top, #e0f3ec, #eaf0ea)",
                py: 3,
                px: 3,
                borderRadius: "15px",
              }}
            >
              <Typography sx={{ fontSize: "25px", fontWeight: "700", mb: 1 }}>
                This is what I can help you with.
              </Typography>
              <Typography>
                Rewriting your website? Check. <br />
                Ad copy, emails… ? Check. <br />
                LinkedIn? Triple check!!! <br />
                Working hand-in-hand with you to revamp your entire brand
                messaging framework for the future? Figuring <br />
                out social media? Enticing target audiences? Oh, now we're
                talking!
              </Typography>
            </Box>
          </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: '20px'}}>
            <Box>
            <div>
            </div>
              <Accordion sx={{py: 1, boxShadow: 'none', border: '1px solid green', borderRadius: '20px'}} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{fontSize: '25px', fontWeight: 'bold'}}
                >
                  This is how I work
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{py: 1, my: 2, borderRadius: '20px', border: '1px solid green'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{fontSize: '25px', fontWeight: 'bold'}}
                >
                  This is who I work with
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{py: 1, borderRadius: '20px', border: '1px solid green'}} >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{fontSize: '25px', fontWeight: 'bold'}}
                >
                  This is my style
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
              <Accordion sx={{py: 1, borderRadius: '20px', border: '1px solid green', mt: 2}} >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{fontSize: '25px', fontWeight: 'bold'}}
                >
                  This is how much I charge
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
              <div></div>
              <Box sx={{display:'flex', justifyContent: 'center', my: 2}}>
              <Box component='button' sx={{py:2, px: 3, bgcolor: 'black', color: 'white', borderRadius: '10px', border: '1px solid white', fontSize: '15px', ":hover":{bgcolor: 'white', color: 'black', border: '1px solid black'}, transition: 'all ease-in-out 0.3s', cursor: 'pointer'}}>
              Just say “hi” and I’ll reach out
              </Box>
              </Box>
            </Box>
            </Box>
        </Container>
      </Box>
    </div>
  );
};

export default FAQ;
