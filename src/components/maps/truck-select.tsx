
import React, { useEffect, useState } from 'react';
import styles from '@/components/maps/map.module.scss';
import { Button, Card, Col, Row, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faManatSign, faUpRightAndDownLeftFromCenter, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import TruckImage from "@/assets/image/trailer-truck.png"
import apiClient from '../../utils/apiClient';
import { useSelector } from "react-redux";

interface TruckData {
    name: string;
    weight: number;
    capacity: number;
}
const { Text } = Typography;

interface Props {
    onNext: () => void;
  }
  

const TruckSelect = ({ onNext }: Props) => {

    const distance = useSelector((state: any) => state.MapDirections.distance);
    const [data, setData] = useState<TruckData[] | null>(null);
    const [pay, setPay] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    useEffect(() => {
        apiClient.get('/category/all')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        apiClient.post('/price/calculate', {
            distance: distance,
            weight: 0,
            truckCategoryId: 1
        }).then(response => {
            setPay(response.data);
        }).catch(error => {
            console.log(error);
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
                {data && data.map((item) => (
                    <div className='truckList mt-5'>
                        <Card style={{ width: "100%" }}>
                            <Row justify="space-between" align="middle">
                                <Col>
                                    <img className="w-20" src={TruckImage} />
                                </Col>
                                <Col>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text className='text-lg font-bold'>{item.name}</Text>
                                        <Text className='text-lg font-bold'><FontAwesomeIcon icon={faWeightScale} size='lg' /> {item.weight / 1000} ton</Text>
                                        <Text className='text-lg font-bold'><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size='lg' /> {item.capacity} kub</Text>
                                    </div>
                                </Col>
                                <Col>
                                    <Text className='text-lg font-bold'><FontAwesomeIcon icon={faManatSign} /> {pay}</Text>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                ))}
            </div>
            <Button className='mt-4 p-5' style={{ backgroundColor: 'black', color: 'white' }} onClick={onNext}  type="primary" size='large'>Davam et</Button>
        </div>
    );
};

export default TruckSelect;