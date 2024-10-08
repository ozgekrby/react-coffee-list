import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
} from "reactstrap";

export default function CoffeeCard({ data }) {
  return (
    <div className='product-card'>
      {data.map((item) => {
        return (
          <Card className='cards'
            style={{
              width: "18rem",
              position: 'relative'
            }}
            key={item.id}
          >
            <CardImg alt={item.name} src={item.image} className='card-image' />
            {item.popular && <CardImgOverlay>
              <div className='popular'>Popular</div>
            </CardImgOverlay>}
            <CardBody className='card-name-price'>
              <CardLink>{item.name}</CardLink>
              <div className='card-price'>{item.price}</div>
            </CardBody>
            <CardBody className='cards-info'>
              {item.rating === null && (
                <div className='card-rating'>
                  <img src="/Star.svg" alt="Star" />
                  <span className='no-ratings'>No Ratings</span>
                  <p style={{ color: "#1b1d1f" }}>000</p>
                </div>
              )}
              {item.rating !== null && (
                <div className='card-rating'>
                  <img src="/Star_fill.svg" alt="Filled Star" />
                  <p className='card-number'>{Number(item.rating).toFixed(2)}</p>
                  <span className='card-votes'>{`(${item.votes} votes)`}</span>
                </div>
              )}
              {item.available === false && <span className='card-available'>Sold out</span>}
            </CardBody>
          </Card>
        );
      })}
    </div>
  )
}
