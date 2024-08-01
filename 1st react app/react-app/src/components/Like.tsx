import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useState } from 'react'

interface Props {
    onClick: () => void;
}
const LIke = ({onClick}: Props) => {
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status ) return <AiFillHeart color="#ff6b81" size="20" onClick={toggle}/>;
    return <AiOutlineHeart  size="20" onClick={toggle}/>
//   return (
//     <div>
//         <AiFillHeart color="#ff6b81" size="20" />
//     </div>
//   )
}

export default LIke