import { useState } from 'react';
import styles from '@/components/maps/map.module.scss';
import inputStyle from '@/components/maps/phoneInput.module.scss';
import 'react-international-phone/style.css';
import { Button, Input } from 'antd';
interface Props {
    onNext: () => void;
}


const SmsVerification = ({ onNext }: Props) => {
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); 
        setOtp(value);
    };
    return (
        <div className={styles.mapSideIn}>
            <div className="">
                <h2 className='text-2xl font-bold'>SMS kodu daxil et</h2>
            </div>
            <div className={`mt-5 ${inputStyle.phoneInputWrapper}`}>
                <Input
                    value={otp}
                    onChange={handleChange}
                    maxLength={6}
                    placeholder="Enter OTP"
                    type="text"
                />
            </div>
            <Button disabled={!(otp.length > 5)} onClick={onNext} className='mt-4 p-5' style={{ backgroundColor: 'black', color: 'white' }} type="primary" size='large'>Davam et</Button>
        </div>
    );
}

export default SmsVerification