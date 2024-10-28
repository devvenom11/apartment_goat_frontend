import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }) => {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    const phoneInput = intlTelInput(phoneInputRef.current, {
      initialCountry: 'us',
      separateDialCode: true,
    });

    phoneInputRef.current.addEventListener('countrychange', function() {
      setPhoneNumber(phoneInput.getNumber());
    });

    return () => {
      phoneInput.destroy();
    };
  }, [setPhoneNumber]);

  return (
    <div className="phone-input-container">
      <input
        ref={phoneInputRef}
        type="tel"
        className="phone-input"
        placeholder="Ph"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default PhoneNumberInput;
