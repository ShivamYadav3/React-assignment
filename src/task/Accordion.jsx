import React, { useState } from "react";

// import Accordion from "@mui/material/Accordion";
// import { AccordionDetails } from "@mui/material";
// // import AccordionDetails from "@mui/material/AccordionDetails";
// // import AccordionSummary from "@mui/material/AccordionSummary";

// const Accordion = () => {
//   const [showData, setShowData] = useState({
//     bookKeeping: false,
//     BankReconciliation: false,
//     ExpanseManagement: false,
//     FinancialManagement: false,
//   });

//   const showAccordion = (data) => {
//     const obj = { ...showData };

//     for (let i in obj) {
//       if (i == data) {
//         obj[i] = true;
//       } else {
//         obj[i] = false;
//       }
//     }
//     return setShowData(obj);
//   };
//   return (
//     <div>
//       <div>
//         <div onClick={() => showAccordion("bookKeeping")}>
//           Book Keeping <div>{<AccordionDetails />}</div>
//         </div>
//         {showData.bookKeeping && (
//           <div>
//             Recording and organising financial transactions, such as sales,
//             expenses, and invoices, accurately and systematically.
//           </div>
//         )}
//       </div>
//       <div>
//         <div onClick={() => showAccordion("BankReconciliation")}>
//           Bank Reconciliation
//         </div>
//         {showData.BankReconciliation && (
//           <div>
//             Comparing your business's financial records with bank statements to
//             ensure accuracy and identify any discrepancies.
//           </div>
//         )}
//       </div>
//       <div>
//         <div onClick={() => showAccordion("ExpanseManagement")}>
//           Expanse management
//         </div>
//         {showData.ExpanseManagement && (
//           <div>
//             Tracking and categorising business expenses, managing expense
//             reports, and ensuring compliance with company policies.
//           </div>
//         )}
//       </div>
//       <div>
//         <div onClick={() => showAccordion("FinancialManagement")}>
//           Financial Record Management
//         </div>
//         {showData.FinancialManagement && (
//           <div>
//             Maintaining organised and up-to-date financial records, including
//             general ledgers, trial balances, and financial statements.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Accordion;

// BY @mui/material

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Bookkeeping
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recording and organising financial transactions, such as sales,
            expenses, and invoices, accurately and systematically.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Bank Reconciliation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Comparing your business's financial records with bank statements to
            ensure accuracy and identify any discrepancies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Expanse management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tracking and categorising business expenses, managing expense
            reports, and ensuring compliance with company policies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Financial Record Management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Maintaining organised and up-to-date financial records, including
            general ledgers, trial balances, and financial statements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
