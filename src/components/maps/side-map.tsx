import { AutoCompleteCustom } from './auto-complete';
import PhoneNumberInput from './enter-number';
import styles from './map.module.scss';
import SmsVerification from './smsVerification';
import TruckSelect from './truck-select';
import { useState } from 'react';

interface Props {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}



const SideMap = ({ onPlaceSelect }: Props) => {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(step + 1);
      };
    return (
        <div className='autocomplete-control'>
            <div className={styles.mapSide}>
                {step === 1 && <AutoCompleteCustom onPlaceSelect={onPlaceSelect} onNext={nextStep} />}
                {step === 2 && <TruckSelect onNext={nextStep}/>}
                {step === 3 && <PhoneNumberInput onNext={nextStep}/>}
                {step === 4 && <SmsVerification onNext={nextStep}/>}
            </div>
        </div>
    );
};

export default SideMap;