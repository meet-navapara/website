import React, { useState } from 'react';
import { Form, Button, Card, Alert, Badge, Spinner } from 'react-bootstrap';
import { CheckCircle, XCircle, Clock, Send } from 'react-bootstrap-icons';
import './ConditionalForm.css';

const ConditionalForm = () => {
  const [conditionsAccepted, setConditionsAccepted] = useState(false);
  const [formStatus, setFormStatus] = useState('pending');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConditionsToggle = () => {
    if (!conditionsAccepted) {
      setConditionsAccepted(true);
      setFormStatus('accepted');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!conditionsAccepted) {
      setError('Please accept the terms and conditions first.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('submitted');
      setLoading(false);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          termsAccepted: false,
        });
        setFormStatus('pending');
        setConditionsAccepted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      setLoading(false);
    }
  };

  const getStatusBadge = () => {
    switch (formStatus) {
      case 'pending':
        return <Badge bg="warning" className="status-badge d-flex align-items-center gap-1"><Clock /> Pending</Badge>;
      case 'accepted':
        return <Badge bg="success" className="status-badge d-flex align-items-center gap-1"><CheckCircle /> Accepted</Badge>;
      case 'submitted':
        return <Badge bg="info" className="status-badge d-flex align-items-center gap-1"><Send /> Submitted</Badge>;
      default:
        return <Badge bg="secondary" className="status-badge">Unknown</Badge>;
    }
  };

  return (
    <div className="conditional-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <Card className="form-card shadow-lg border-0">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Conditional Form
                </h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h6 className="mb-0">Form Status:</h6>
                  {getStatusBadge()}
                </div>
                {error && (
                  <Alert variant="danger" dismissible onClose={() => setError(null)}>
                    <XCircle className="me-2" />
                    {error}
                  </Alert>
                )}
                {formStatus === 'submitted' && (
                  <Alert variant="success">
                    <CheckCircle className="me-2" />
                    Form submitted successfully! Thank you for your submission.
                  </Alert>
                )}
                <Card className={`conditions-card mb-4 ${conditionsAccepted ? 'accepted' : 'pending'}`}>
                  <Card.Body className="text-center">
                    <div className="mb-3">
                      {conditionsAccepted ? (
                        <CheckCircle size={48} className="text-success condition-icon" />
                      ) : (
                        <Clock size={48} className="text-warning condition-icon pending" />
                      )}
                    </div>
                    <h6 className="mb-3">
                      {conditionsAccepted ? 'Conditions Accepted' : 'Accept Terms & Conditions'}
                    </h6>
                    <p className="text-muted mb-3">
                      {conditionsAccepted 
                        ? 'You have accepted the terms and conditions. You can now fill out the form.'
                        : 'Please read and accept our terms and conditions to proceed with the form.'
                      }
                    </p>
                    {!conditionsAccepted && (
                      <Button 
                        variant="outline-primary" 
                        onClick={handleConditionsToggle}
                        className="px-4"
                      >
                        Accept Terms & Conditions
                      </Button>
                    )}
                  </Card.Body>
                </Card>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      disabled={!conditionsAccepted || loading}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      disabled={!conditionsAccepted || loading}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      disabled={!conditionsAccepted || loading}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message (optional)"
                      disabled={!conditionsAccepted || loading}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      disabled={!conditionsAccepted || loading}
                      label="I agree to the privacy policy and terms of service"
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={!conditionsAccepted || loading || !formData.termsAccepted}
                      className="py-2"
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="me-2" />
                          Submit Form
                        </>
                      )}
                    </Button>
                    {conditionsAccepted && (
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          setConditionsAccepted(false);
                          setFormStatus('pending');
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            message: '',
                            termsAccepted: false,
                          });
                        }}
                        disabled={loading}
                      >
                        Reset Form
                      </Button>
                    )}
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionalForm; 