import { useRef } from 'react';

const useTabs = () => {
  const gre = useRef();
  const ielts = useRef();
  const gmat = useRef();
  const bocconi = useRef();

  const tabs = e => {
    if (e.target.getAttribute('data-name') === 'gre') {
      gre.current.style.setProperty('--width', '82%');
      ielts.current.style.setProperty('--width', '87%');
      gmat.current.style.setProperty('--width', '92%');
    } else if (e.target.getAttribute('data-name') === 'ielts') {
      gre.current.style.setProperty('--width', '1%');
      ielts.current.style.setProperty('--width', '87%');
      gmat.current.style.setProperty('--width', '92%');
    } else if (e.target.getAttribute('data-name') === 'gmat') {
      gre.current.style.setProperty('--width', '1%');
      ielts.current.style.setProperty('--width', '1%');
      gmat.current.style.setProperty('--width', '92%');
    } else if (e.target.getAttribute('data-name') === 'bocconi') {
      gre.current.style.setProperty('--width', '1%');
      ielts.current.style.setProperty('--width', '1%');
      gmat.current.style.setProperty('--width', '1%');
    }
  };

  return {
    tabs,
    gre,
    ielts,
    gmat,
    bocconi
  };
};

export default useTabs;
