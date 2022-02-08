import Divisio from "./Divisio";
import "./styles.css";

let dividend = 0;
let divisor = 3;

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Divisio num1={dividend} num2={divisor} />
    </div>
  );
}
