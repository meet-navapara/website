import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Check, ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import './PreconditionsBar.css';

const CustomToggle = React.forwardRef(({ children, onClick, className }, ref) => (
  <div
    ref={ref}
    className={className}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

const PreconditionsBar = ({ conditionsAccepted, setConditionsAccepted }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleAccept = () => {
    setConditionsAccepted(true);
  };

  return (
    <div className="preconditions-wrapper">
      <Dropdown show={isOpen} onToggle={(nextOpen) => setIsOpen(nextOpen)} className="preconditions-dropdown">
        <Dropdown.Toggle as={CustomToggle} className={`preconditions-bar ${conditionsAccepted ? 'accepted' : 'pending'}`}>
          <span>Hey, Accept Preconditions before you start the listing!</span>
          <div className="status-container">
            {conditionsAccepted ? (
              <div className="status-badge accepted">
                <Check className="me-1" /> Accepted
              </div>
            ) : (
              <div className="status-badge pending">
                <span className="pending-dot me-2"></span>Pending
              </div>
            )}
            {isOpen ? <ChevronUp className="toggle-arrow" /> : <ChevronDown className="toggle-arrow" />}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="dropdown-content">
            <p>
              Before you can proceed with your listing, please make sure to review all required preconditions. Accepting these is mandatory to continue. It ensures your submission meets our platformstandards and avoids delays. Listings that don't meet these terms may be rejected. Take a moment to go through them carefully before moving ahead. Once accepted, you'll be able to start listing right away.
            </p>
            {!conditionsAccepted && (
              <Button onClick={handleAccept} className="accept-button">
                Accept
              </Button>
            )}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default PreconditionsBar; 