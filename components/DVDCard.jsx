import React, {useRef} from "react";
import {Button, Card, Col, OverlayTrigger, Popover, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {dvdPropShape} from "./PropShapes";
import Image from 'next/image'

export default function DVDCard(
    {
        dvdData: {
            title, releaseYear, price, image, uuid
        },
        isInCart,
        clickHandler,
    },
) {

    return (
        <Card className={`dvdCard`} bg={'dark'} text={'white'}>
            <Card.Img as={Image} src={image} alt="" layout={'responsive'} width={500} height={750}/>

            <Card.Body>
                <Card.Title>{title} ({releaseYear})</Card.Title>
            </Card.Body>

            <Card.Footer>
                <Row>
                    <Col><b>${price}</b></Col>
                    <Col>
                        {isInCart
                            ? <span>In cart</span>
                            :
                            <Button variant="secondary" size="sm" onClick={clickHandler}>Add to
                                cart</Button>
                        }
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

DVDCard.propTypes = {
    dvdData: dvdPropShape.isRequired,
    isInCart: PropTypes.bool,
    clickHandler: PropTypes.func.isRequired,
};

DVDCard.defaultProps = {
    isInCart: false,
};
