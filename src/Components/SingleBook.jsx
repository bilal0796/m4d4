import React from 'react'
import { Card, InputGroup, FormControl } from 'react-bootstrap'

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Card
                style={{ width:'200px' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }

}

export default SingleBook