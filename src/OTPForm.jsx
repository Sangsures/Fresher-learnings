import axios from 'axios';
import { useState } from 'react';

const OTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-otp', { phoneNumber });
      console.log('OTP sent successfully:', response.data);
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending OTP:', error.response ? error.response.data : error.message);
      alert('Failed to send OTP: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
    </div>
  );
};

export default OTPForm;
