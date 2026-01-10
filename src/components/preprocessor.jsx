export function solve_exp(expression,fun){
    switch(fun){
        case "%":return (expression/100).toString()
        break;
        case "x^2":return (expression*expression).toString()
        break;
        case "1/x":return (1/expression).toString()
        break;
        case "x^1/2":return Math.sqrt(expression).toString()
        break;
        case "+/-":return (-(expression)).toString();
        break;
        case "^":prompt(expression)
        break;
        case "10^x":return Math.pow(10,expression).toString();
        break;
        case "|x|":return Math.abs(expression).toString();
        break;
        case "log":return Math.log10(expression).toString();
        break;
        case "ln":return Math.log(expression).toString();
        break;
        case "n!":let f=1;for(let x=1;x<=expression;x++){f=f*x;}return f.toString();
        break;
        case "pi":return 3.1415926535897932384626433832795;
        break;
        case "e":return 2.7182818284590452353602874713527;
    }
}