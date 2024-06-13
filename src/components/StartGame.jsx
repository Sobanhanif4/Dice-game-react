import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  /* BUTTON */
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  transition: 0.3s background ease-in;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: #3f3f3f;
    transition: 0.3s background ease-in;
  }
`;
