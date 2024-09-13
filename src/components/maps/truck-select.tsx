
import React from 'react';
import styles from '@/components/maps/map.module.scss';
import { Button, Card, Col, Row, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faManatSign, faUpRightAndDownLeftFromCenter, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import TruckImage from "@/assets/image/trailer-truck.png"

interface TruckSelectProps {
    // Add any props you need here
}
const { Text } = Typography;


const TruckSelect: React.FC<TruckSelectProps> = () => {
    // Add your component logic here

    return (
        <div className={styles.mapSideIn}>
            <div>
                <div className="">
                    <h2 className='text-2xl font-bold'>Qiymət təxmini</h2>
                </div>
                <div>

                </div>
                <div className='truckList mt-5'>
                    <Card style={{ width: "100%" }}>
                        <Row justify="space-between" align="middle">
                            <Col>
                                <img className="w-20" src={TruckImage} />
                            </Col>
                            <Col>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text className='text-lg font-bold'>Tentli TIR</Text>
                                    <Text className='text-lg font-bold'><FontAwesomeIcon icon={faWeightScale} size='lg' /> 26 ton</Text>
                                    <Text className='text-lg font-bold'><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size='lg' /> 96 kub</Text>
                                </div>
                            </Col>
                            <Col>
                                <Text className='text-lg font-bold'><FontAwesomeIcon icon={faManatSign} /> 200 - 250 </Text>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>

            <Button className='mt-4 p-5' style={{ backgroundColor: 'black', color: 'white' }} type="primary" size='large'>Davam et</Button>
        </div>
    );
};

export default TruckSelect;