import React,{useState} from "react";
import { Button, ButtonGroup, Card, CardText, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [isActiveAll, setIsActiveAll] = useState(true);
  const [isActiveAv, setIsActiveAv] = useState(false);
  const history = useHistory();

  function handleAllProducts() {
    history.push("/all-products");
    setIsActiveAll(true)
    setIsActiveAv(false)
  }

  function handleAvailableNow() {
    history.push("/available-now");
    setIsActiveAll(false)
    setIsActiveAv(true)
  }

  return (
    <div>
      <Card body className="headerCard">
        <CardTitle className="header-title">Our Collection</CardTitle>
        <CardText  className="header-text">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </CardText>
        <ButtonGroup className="button-group">
          <Button outline onClick={handleAllProducts} className={`button ${isActiveAll ? 'active' : 'header-button'}`}>
            All Products
          </Button>
          <Button outline onClick={handleAvailableNow} className={`button ${isActiveAv ? 'active' : 'header-button'}`}>
            Available Now
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}
