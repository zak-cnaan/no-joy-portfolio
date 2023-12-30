// import React from "react"
import styled from "styled-components";

const Card = styled.div`
  background-color: var(--gray-2);
  border-radius: 0.25rem;
  position: relative;

  box-shadow: 0px 0px 0px 1px #000, 0px 0px 2px 1px #fff,
    0 0 8px rgba(0, 0, 0, 0.4), inset 0 -1px 1px rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
`;

// function Card(props: {children: React.ReactNode}){
//     return <div>
//         {props.children}
//     </div>
// }

 export default Card