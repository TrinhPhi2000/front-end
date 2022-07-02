function Validator(formSelector) {
    var _this = this;
    var formRules = {
        // chứa các thuộc tính của RulesForm
    };
    function getParent(element, selector) {
     while(element.parentElement) {
        if(element.parentElement.matches(selector)){
            return element.parentElement;
        }
        element = element.parentElement;
     }
    }

    /*
        Quy ước tạo rule:
            1. Nếu có lỗi thì return erorr mesage
            2. Nếu không có lỗi thì return undfine
    */
    var validatorRules = {  
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function(min) {
           return function(value) {
            return value.length >= min ? undefined : `Vui long nhập ít nhất ${min} kí tự`;
           }
        },
        max: function(max) {
            return function(value) {
             return value.length <= max ? undefined : `Vui long nhập tối đa ${max} kí tự`;
            }
         }

    };
    

    //Lấy ra form element trong dom `formselector`
    var formElement = document.querySelector(formSelector);
    
    // Chỉ xử lý khi có element trong dom
    if(formElement) {

        var inputs = document.querySelectorAll('[name][rules]');

        for (var input of inputs) {

            var rules = input.getAttribute('rules').split('|'); 

            for(var rule of rules) {

                var ruleFunc;
                var isRuleHasValue =  rule.includes(':');
                
                if(isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            //Lắng nge sự kiện để validate (blur, change...)
            input.onblur = handleValidate;
            input.oninput = handleClearErorr;
        }
        //Hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;
            for(var rule of rules) {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }
            
           // Neu co loi thi hien thi mess loi ra UI
            if(errorMessage) {
                var formGroup = getParent(event.target, '.form-group');  
                if(formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message')
                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
                
            }
            return !errorMessage;
        }
        // Hàm clear message lỗi
        function handleClearErorr(event) {
            var formGroup = getParent(event.target, '.form-group');  
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message')
                if(formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }
    //Xu ly hanh vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();
     


        var inputs = document.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
            // console.log(input);
            if(!handleValidate({target: input})) {
                isValid = false;
            }
           //Khi khong co loi thi submit form
           if(isValid) {
               if(typeof _this.onSubmit === 'function') {
                var enableInputs  = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce(function(values, input) {
                    switch(input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if(!input.matches(':checked')) {
                                // values[input.name] = '';
                                return values;
                            } 
                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            } 
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files
                            break; 
                            default: 
                                values[input.name] = input.value; 
                    }
                    return values;
                }, {})
                        // Tra về gia trịn nhập các thẻ input của form
                   _this.onSubmit(formValues);
                } else {
                    formElement.submit();
            }
           }
        }
    }
}
