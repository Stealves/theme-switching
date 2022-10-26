import React from "react";
import {
  CardsContainer,
  Card,
  CardReference,
  CardBody,
} from "./styles/Cards.styled";

const Quotes = () => {
  return (
    <CardsContainer>
      <Card>
        <CardBody>
          <p>
            I was never going to be as good a lady as you. So I had to be
            something else. I never could have survived what you survived.
          </p>
        </CardBody>
        <CardReference>Bran Stark</CardReference>
      </Card>

      <Card>
        <CardBody>
          <p>
            It's not easy being drunk all the time. If it were easy, everyone
            would do it.
          </p>
        </CardBody>
        <CardReference>Tyrion Lannister</CardReference>
      </Card>

      <Card>
        <CardBody>
          <p>
            Sometimes there is no happy choice Sam, only one less grievous than
            the others.
          </p>
        </CardBody>
        <CardReference>Jon Snow</CardReference>
      </Card>
    </CardsContainer>
  )
};

export default Quotes;