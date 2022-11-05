
const HEAD = <div className="HEAD"/>;

const BODY = <div className="BODY"/>;

const RIGHT_ARM = <div className="RIGHT_ARM"/>;

const LEFT_ARM = <div className="LEFT_ARM"/>;

const RIGHT_LEG = <div className="RIGHT_LEG"/>;

const LEFT_LEG = ( <div className="LEFT_LEG"/>);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];


type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {
  return (
    <div className="HangmanDrawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="smallbar"></div>
      <div className="horizintalbar"></div>
      <div className="standbar"></div>
      <div className="bottombar"></div>
    </div>
  );
};


export default HangmanDrawing;
  