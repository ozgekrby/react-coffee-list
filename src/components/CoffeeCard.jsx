import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
} from "reactstrap";
export default function CoffeeCard({data}) {
    return (
        <div className='product-card'>
          {data.map((item) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  position: 'relative'
                }}
                key={item.id}
              >
                <CardImg alt={item.name} src={item.image} />
                {item.popular && <CardImgOverlay >
                  <div className='popular'>Popular</div>
                </CardImgOverlay>}
                <CardBody>
                  <CardLink href="#">{item.name}</CardLink>
                  <div>{item.price}</div>
                </CardBody>
                <CardBody>
                  {item.rating === null && (
                    <div>
                      <img src="src/assets/Star.svg" />
                      <span>No Ratings</span>
                      {item.available===false && <span>Sold out</span>}
                    </div>
                  )}
                  {item.rating !== null && (
                    <div>
                      <img src="src/assets/Star_fill.svg" /> <p>{Number(item.rating).toFixed(2)}</p>
                      <span>{`(${item.votes} votes)`}</span>
                      {item.available===false && <span>Sold out</span>}
                    </div>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </div>
      )
}
