

export default function ConditionalComponent() {
  const display = true;
  return (
    <div id="condition" className="text-center">
      <h3>{display ? "This is a Conditional Component" : "Code everyday"}</h3>
    </div>
  );
}
