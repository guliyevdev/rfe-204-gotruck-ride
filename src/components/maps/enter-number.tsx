import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const PhoneNumberInput = () => {
    const [phone, setPhone] = useState('');
    return (
        <div>
            <PhoneInput
                defaultCountry="az"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />
        </div>
    );
}

export default PhoneNumberInput