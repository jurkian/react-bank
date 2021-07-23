import React from 'react';

import './style.scss';

import cardChipImg from './card-chip.png';
import visaImg from './visa-logo.png';
import mastercardImg from './visa-logo.png';

type Props = {
   type: string;
};

const CardLogos: React.FC<Props> = (props) => {
   const cardType = props.type;

   return (
      <section className="card-logos">
         <img src={cardChipImg} alt="Credit card chip" />
         <img src={cardType === 'visa' ? visaImg : mastercardImg} alt="Credit card logo" />
      </section>
   );
};

export default CardLogos;
