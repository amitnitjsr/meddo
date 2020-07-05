import React from 'react';
import { Card, CardBody, CardTitle, Col, CardText } from 'reactstrap'
import './Home.css';
import { connect } from "react-redux";
import { Button } from '@material-ui/core';


const Home = (props) => {

    const logout = () => {
        props.signInFun(false);
        props.history.push('/');
    }

    const detailsHandler = (id) => {
        props.history.push(`./details/${id}`);
    }

    return (
        <div className="position" >
            <Col className="col-md-2 col-sm-2 ml-auto btn-pos" >
                <Button onClick={() => logout()}>Logout</Button>
            </Col>

            <div className="card-style">
                {props.list && props.list.map((val) => {
                    return (
                        <Card key={val.id} style={{
                            background: `${val.color}`,
                            width: '210px', margin: '8px', cursor: 'pointer',
                        }} onClick={() => detailsHandler(val.id)}>
                            <CardBody>
                                <CardTitle>{val.name}</CardTitle>
                                <CardText>{val.title === null ?
                                    val.listItem.map((val1) => {
                                        return (
                                            <ul key={val1.id} style={{ listStyleType: 'number' }}>
                                                <li key={val1.id} >{val1.item}</li>
                                            </ul>
                                        )

                                    })
                                    : val.title}</CardText>
                                <span>{val.date}</span>
                            </CardBody>
                        </Card>
                    )
                })}

            </div>
        </div >
    );

}


const mapStateToProps = state => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signInFun: (isSignedIn) => {
            dispatch({
                type: 'signInFun',
                payload: {
                    "isSignedIn": isSignedIn
                }
            })
        },

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
