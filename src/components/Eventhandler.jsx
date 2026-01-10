
export default function on_click(btn,engine){
 
    switch(btn){
        case "=":
            engine.evaluate();
        break;
        case "c":
            engine.clear()
        break;
        case "ce":
            engine.clear()
        break;
        case "+/-":
            engine.preprocessor(btn);
        break;
        case "pi":
        case "e":
        case "x^2":
        case "x^1/2":
        case "1/x":
        case "%":
        case "|x|":
        case "10^x":
        case "log":
        case "ln":
        case "n!":
            engine.preprocessor(btn);
        break;
        case "+":
        case "-":
        case "*":
        case "/":
            engine.operator(btn)
        break;
        default:
            engine.append(btn);
    }
}