export default function Divisio({ num1, num2 }) {
  if (num2 === 0) {
    return "Hey no pots";
  } else {
    return num1 / num2;
  }
}
