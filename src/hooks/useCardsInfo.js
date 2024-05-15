import { useState } from 'react';
import Image_53972 from '../images/Minion Clipart 53972.png';
import Image_53983 from '../images/Minion Clipart 53983.png';
import Image_53990 from '../images/Minion Clipart 53990.png';
import Image_54028 from '../images/Minion Clipart 54028.png';
import Image_54040 from '../images/Minion Clipart 54040.png';
import Image_54043 from '../images/Minion Clipart 54043.png';
import Image_54080 from '../images/Minion Clipart 54080.png';
import Image_54081 from '../images/Minion Clipart 54081.png';
import Image_54089 from '../images/Minion Clipart 54089.png';
import Image_54123 from '../images/Minion Clipart 54123.png';
import Image_54132 from '../images/Minion Clipart 54132.png';
import Image_54139 from '../images/Minion Clipart 54139.png';

export default function useCardInfo() {
  const [cards, setCards] = useState([
    {
      id: 0,
      url: Image_53972,
      name: 'Evrica!',
    },
    {
      id: 1,
      url: Image_53983,
      name: 'Newton',
    },
    {
      id: 2,
      url: Image_53990,
      name: 'Appealing',
    },
    {
      id: 3,
      url: Image_54028,
      name: 'Crazy monster',
    },
    {
      id: 4,
      url: Image_54040,
      name: 'Clever',
    },
    {
      id: 5,
      url: Image_54043,
      name: 'Banana-banana',
    },
    {
      id: 6,
      url: Image_54139,
      name: 'Ghost',
    },
    {
      id: 7,
      url: Image_54080,
      name: 'Vampire',
    },
    {
      id: 8,
      url: Image_54081,
      name: 'Swimming',
    },
    {
      id: 9,
      url: Image_54089,
      name: 'Merry Christmas',
    },
    {
      id: 10,
      url: Image_54123,
      name: 'Official',
    },
    {
      id: 11,
      url: Image_54132,
      name: 'Hawaii',
    },
  ]);

  const shuffle = () => {
    console.log('Shuffle');
    let copy = Object.assign([], cards);
    for (let i = copy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setCards(copy);
  };

  return [cards, shuffle];
}
