function Inputfield({ onInput }) {
  return (
    <div>
      <input type="text" onInput={(e) => onInput(e.target.value)} />
    </div>
  );
}

export default Inputfield;