import React from 'react';
import ConditionalForm from '../components/common/ConditionalForm';

const FormPage = () => {
  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-4">
              <h2 className="text-primary mb-2">Conditional Form Demo</h2>
              <p className="text-muted">
                This form demonstrates the pending/accepted state functionality with global state management.
              </p>
            </div>
          </div>
        </div>
        <ConditionalForm />
      </div>
    </div>
  );
};

export default FormPage; 