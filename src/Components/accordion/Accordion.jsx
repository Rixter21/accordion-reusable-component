import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useContext } from 'react';
import { createContext } from 'react';
import useToggle from '../hooks/useToggle';
// create Context Api
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, content } = props;
    // boolean state custom hook
  const {status: expand, toggleStatus: toggleExpand} = useToggle();

  const value = {
    expand,
    toggleExpand
  }

  return (
    <Provider value={value}>
      <div className='accordion'>
        <AccordionHeader>{title}</AccordionHeader>
        {/* condition */}
        <AccordionContent>{content}</AccordionContent>
      </div>
    </Provider>
    
  )
}

// Header
const AccordionHeader = ({ children }) => {
  const { toggleExpand } = useContext(AccordionContext)

  return (
    <button onClick={toggleExpand}>
      {children} 
      <AccordionIcon 
        iconOpened={<FaChevronRight />}
        iconClosed={<FaChevronDown />}
      />
    </button>
  );
}

// content
const AccordionContent = ({ children }) => {
  const { expand } = useContext(AccordionContext);

  return <>{expand && <div className="content">{children}</div>}</>;
}

// icon
const AccordionIcon = ({ iconOpened, iconClosed }) => {
  const { expand } = useContext(AccordionContext);

  return <span>{expand ? iconOpened : iconClosed}</span>;
}

export default Accordion