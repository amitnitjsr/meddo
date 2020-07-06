import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';
import './Detail.css';
import { connect } from "react-redux";

function Details(props) {
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        let data = props.list.filter((val) => (parseInt(val.id, 10) === parseInt(props.match.params.id, 10)));
        setDetail(data)
    }, []);

    const backToHomeHandlet = () => {
        props.history.push('/home')
    }


    return (
        <div >
            <Col className="col-md-2 col-sm-2 ml-auto add-prod-btn" >
                <button className="btn-style" onClick={() => backToHomeHandlet()}>Back to Home</button>
            </Col>

            {detail && detail.map((val) => {
                return (
                    <Card key={val.id} style={{ margin: '20px', flexDirection: 'row' }} >
                        <CardBody>
                            <CardTitle>{val.name}</CardTitle>
                            <CardText>{val.description}</CardText>
                            <span>{val.date}</span>
                        </CardBody>
                    </Card>
                )
            })}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        list: state.list
    };
};



export default connect(
    mapStateToProps,
    null
)(Details);

