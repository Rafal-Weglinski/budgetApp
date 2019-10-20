// This is not public, can't be accessed its private 
//1st module - independent
const budgetController = (function(){

   

})();

// 2nd module - independent
const UIController =  (function(){
    
    const DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: '.add__btn'
    }


    return {
        getInput: function (){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
        }
        }
        getDOMstrings: function(){
            return DOMstrings;
        }
    }


})();


//3rd module Global app controller

const controller = (function(budgetCTRL, UICtrl){

    let setupEventListeners = function(){
        const DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrAddItem);
    

        document.addEventListener("keypress", function(e){
            
            if (e.keyCode === 13 || e.which === 13){
                ctrAddItem()
            }
    
        });
    };

    

    const ctrAddItem = () => {
         //1. Get the filed input data

         let input = UICtrl.getInput();
         console.log(input); 
        //2. Add the item to the budget controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. Display the budget on the UI
    };

   return{
       init: function(){
           console.log("ok");
           setupEventListeners();
       }
   }

})(budgetController, UIController);

controller.init();