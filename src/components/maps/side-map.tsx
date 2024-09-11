import { Button } from 'antd';
import { AutoCompleteCustom } from './autocomplete-custom';
import styles from './map.module.scss';

interface Props {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}



const SideMap = ({ onPlaceSelect }: Props) => {
    return (
        <div className='ml-5 autocomplete-control'>
            <div className={styles.sideDiv}>
                <div className={styles.cordinatesForm}>
                    <AutoCompleteCustom onPlaceSelect={onPlaceSelect} />

                    <Button type="primary" size='large'>Davam et</Button>
                </div>
            </div>
        </div>
    );
};

export default SideMap;