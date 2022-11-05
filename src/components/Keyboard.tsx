
const a_code: number = "a".charCodeAt(0);
const KEYS: string[] = [];
for (let i = 0; i < 26; i++) {
  KEYS.push(String.fromCharCode(a_code + i));
}

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="Keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return <button
          className={`btn ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""
            }`}
          key={key}
          onClick={() => addGuessedLetter(key)}
          disabled={isInactive || isActive || disabled}
        >{key}</button>;
      })}

    </div>
  );
};


export default Keyboard;
