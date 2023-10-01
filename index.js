// code your solution her
function saturdayFun(String="roller-skate"){
 return `This Saturday, I want to ${String}!`;
}

const mondayWork = function ( activity='go to the office' ){
 let result = `This Monday, I will ${activity}.`;
 return result;
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(farah='*'){
          return function(String="special"){
            return `You are ${farah}${String}${farah}!`;
          }
}
console.log( wrapAdjective("%")("a dedicated programmer")); 
