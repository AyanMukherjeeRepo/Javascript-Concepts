//function currying
function curry(fn){
    return function curried(...args){
        if(args.length>=fn.length){
            return fn.apply(this,args)
        }else{
            return function(...args2){
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

function sum(a,b,c,d){
    return a+b+c+d;
}
const curriedsum = curry(sum)
console.log(curriedsum(1,2,3)(4));