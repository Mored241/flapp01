import React from 'react';
import { useMotionValue, Reorder } from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";

const Contact = ({ contact }) => {
        const y = useMotionValue(0);
        // const boxShadow = useRaisedShadow(y);
      
        return (
          <Reorder.Contact value={contact} id={contact} style={{ y }}>
            <span>{contact}</span>
          </Reorder.Contact>
        );
}

export default Contact