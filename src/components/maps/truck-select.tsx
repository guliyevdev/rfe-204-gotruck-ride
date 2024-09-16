
import React, { useEffect, useState } from 'react';
import styles from '@/components/maps/map.module.scss';
import { Button, Card, Col, Row, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faManatSign, faUpRightAndDownLeftFromCenter, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import TruckImage from "@/assets/image/trailer-truck.png"
import apiClient from '../../utils/apiClient';

interface TruckSelectProps {
    // Add any props you need here
}
const { Text } = Typography;


const TruckSelect: React.FC<TruckSelectProps> = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        apiClient.get('/category/all')
            .then(response => {
                console.log(response.data);
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className={styles.mapSideIn}>
            <div>
                <div className="">
                    <h2 className='text-2xl font-bold'>Qiymət təxmini</h2>
                </div>
                {data && data.map((item, index) => (
                <div className='truckList mt-5'>
                    <Card style={{ width: "100%" }}>
                        <Row justify="space-between" align="middle">
                            <Col>
                                <img className="w-20" src={TruckImage} />
                            </Col>
                            <Col>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text className='text-lg font-bold'>{item.name}</Text>
                                    <Text className='text-lg font-bold'><FontAwesomeIcon icon={faWeightScale} size='lg' /> {item.weight/1000} ton</Text>
                                    <Text className='text-lg font-bold'><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size='lg' /> {item.capacity} kub</Text>
                                </div>
                            </Col>
                            <Col>
                                <Text className='text-lg font-bold'><FontAwesomeIcon icon={faManatSign} /> 200 - 250 </Text>
                            </Col>
                        </Row>
                    </Card>
                </div>
                 ))}
            </div>
            <Button className='mt-4 p-5' style={{ backgroundColor: 'black', color: 'white' }} type="primary" size='large'>Davam et</Button>
        </div>
    );
};

export default TruckSelect;