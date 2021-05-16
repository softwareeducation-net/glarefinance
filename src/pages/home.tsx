import React from 'react';
        import Link from '../components/Link';
        import { Row, Col } from 'antd';


        export default function home() {
        return (
        <Row justify="center">
        <Col>
                 <Link external to="google.com">
                "Enter App"
                </Link>
        </Col>
        </Row>


        );
        }
