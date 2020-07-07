import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Home.css';
import { connect } from "react-redux";


const Home = (props) => {
    const detailsHandler = (id) => {
        props.history.push(`./details/${id}`);
    }

    return (
        <div className="position" >

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
                                    <ol className="ol-style">{
                                        val.listItem.map((val1) => {
                                            return (
                                                <li key={val1.id} >{val1.item}</li>
                                            )
                                        })}
                                    </ol>
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



export default connect(
    mapStateToProps,
    null
)(Home);
