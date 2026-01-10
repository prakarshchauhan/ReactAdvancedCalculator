import { useState } from "react";
import { solve_exp } from "./preprocessor";

export default function useCalculatorEngine(){
    const [expression,updateExp]=useState("");
    const [evaluator,updateEvalu]=useState("");
    
    const [f,updateFalse]=useState(false);
    const [f1,updateFalse1]=useState(false);

    function append(btn){
        if(f1==true){
             if(evaluator.at(-1)>=0 && evaluator.at(-1)<=9){
                updateEvalu("")
            }
            updateExp(btn)
            updateFalse1(false)
        }
        else{
            updateExp(expression+btn)
        }
    }

    function operator(btn){
        updateExp("")
        if(f==true){
            updateEvalu(expression+btn)
            updateFalse(false)
        }
        else{
            if(evaluator.at(-1)!=btn || expression!=""){
                updateEvalu(exp=>exp+expression+btn)
            }
        }
    }

    function evaluate(){
        const finalexp=evaluator+expression
        updateEvalu(finalexp)
        updateExp(eval(finalexp))
        
        updateFalse(true)
        updateFalse1(true)
    }

    function isExpressionComplete(exp){
        if(exp==""){return true;}
        var total_operand=exp.split(/[+\-*/]/);
        return total_operand.at(-1)!=""?true:false;
    }

    function preprocessor(pre){
    if(isExpressionComplete(evaluator)){
        switch(pre){
            case "x^2":
                updateEvalu("sqr("+expression+")")
            break;
            case "x^1/2":
                updateEvalu("sqrt("+expression+")")
                break
            case "1/x":
                updateEvalu("1/("+expression+")")
                break;
            }
            updateExp(solve_exp(expression,pre))
            updateFalse1(true)
            updateFalse(true)
    }else{
        updateEvalu(evaluator+solve_exp(expression,pre))
        updateExp("")
        updateFalse1(true)
    }
}

    function clear(){
        updateEvalu("")
        updateExp("")
    }
            
    return{
        append,
        operator,
        evaluate,
        clear,
        preprocessor,
        expression,
        evaluator
    };
}