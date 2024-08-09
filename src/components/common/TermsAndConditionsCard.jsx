// TermsAndConditionsCard.jsx
import React from 'react';
import styled from 'styled-components';

const TermsAndConditionsCard = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <CardWrapper>
      <div className="card-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Terms and Conditions</h2>
        <p>
          {/* Insert your terms and conditions text here */}
Last Updated: 05.08.2024<br></br>

Acceptance: By using our site, you agree to these Terms. We may update them, and continued use means you accept the changes.

Account Responsibility: Keep your account details confidential and update your information as needed.

Intellectual Property: All content is owned by us. Do not use it without permission.

User Content: You are responsible for content you post and grant us a license to use it.

Prohibited Activities: Do not engage in unauthorized access or illegal activities.

Third-Party Links: We are not responsible for third-party sites.

Disclaimer: Services are provided "as is" with no warranties.

Liability: We are not liable for any indirect damages.

Indemnification: You agree to cover us for any claims related to your use.

Contact: For questions, email us at nebulagames@services@gaming.in.
        </p>
      </div>
    </CardWrapper>
  );
};

export default TermsAndConditionsCard;

const CardWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  text-align: left;

  .card-content {
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin: 20px 0;
  }
`;
