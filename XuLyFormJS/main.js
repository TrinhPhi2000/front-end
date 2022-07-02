//Doi tuong 'Validator'
function Validator(options) {


    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    
    //Ham thuc hien validate
    function validate(inputElenmet, rule) {
        //var errorElement = getParent(inputElement, '.form-goup')
        var erorrElement = getParent(inputElenmet, options.formGroupSelector).querySelector(options.erorrSelector);
         // Lay ra cac rules cua selector
        var rules = selectorRules[rule.selector];
        // Lap qua tung rules va kiem tra
        //Neu co loi thi dung viec kiem tra
        for(var i = 0; i < rules.length; ++i) {

            switch(inputElenmet.type) {
                case 'radio':
                case 'checkbox':
                    erorrMess = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    erorrMess = rules[i](inputElenmet.value);

            }

            if(erorrMess) break;
        }

        if(erorrMess) {
            erorrElement.innerText = erorrMess;
            getParent(inputElenmet, options.formGroupSelector).classList.add('invalid');
        } else {
            erorrElement.innerText = '';
            getParent(inputElenmet, options.formGroupSelector).classList.remove('invalid');
        }
        return !erorrMess;
    }
    // Ham lay element cua form can validate
    var formElement = document.querySelector(options.form);
        if (formElement) {
            // Khi submit form
            formElement.onsubmit = function(e) {
                e.preventDefault(); 
                var isFormValid = true;
                // Lap qua tung rules va validate
                options.rules.forEach(function (rule) {
                    var inputElenmet = formElement.querySelector(rule.selector);
                 

                    var isValid = validate(inputElenmet, rule);
                    if(!isValid) {
                        isFormValid = false;    
                    }
                });
                if(isFormValid) {
                    //Truong hop submit voi js
                    if(typeof options.onSubmit === 'function') {
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
                        options.onSubmit(formValues);
                    } 
                    //Submit voi hanh vi mac dinh
                    // else {
                    //     formElement.submit();
                    // }
                }
            }
            // Lap qua moi rule va xu ly (lang nghe su kien blur, input,...)
            options.rules.forEach(function(rule) {

                //Luu lai cac rule input
                if(Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test);
                } else {
                    selectorRules[rule.selector] = [rule.test];
                }

                var inputElenmets = formElement.querySelectorAll(rule.selector);
                Array.from(inputElenmets).forEach(function (inputElenmet) {
                    inputElenmet.onblur = function() {
                        // value: inputElement.value
                        // test function: rule.test
                      validate(inputElenmet, rule);
                    }
                    // Xu ly moi khi nguoi dung nhap vao inpu
                    inputElenmet.oninput = function() {
                        var erorrElement = getParent(inputElenmet, options.formGroupSelector).querySelector('.form-message');
                        erorrElement.innerText = '';
                        getParent(inputElenmet, options.formGroupSelector).classList.remove('invalid');
                    }
                });
                
               
            });
        }
}


// Dinh nghia cac rule
//Nguyen tac cua rule
//1. Khi co loi => Tra ra mess loi
//2. Khi hop le => Khong tra ra cai gi (unf)
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined:message || 'Vui long nhap truong nay'
        }
    }

};

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :message || 'Truong nay phai la email';
        }
    }
};
Validator.minLength = function(selector, min,message) {
    return {
        selector: selector,
        test: function(value) {
          return value.length >= min ? undefined :message || `Vui long nhap toi thieu ${min} ki tu`;
        }
    }
};

Validator.isComfirmed = function(selector, getCofirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getCofirmValue() ? undefined: message || 'Gia tri nhap vao khong chinh sac';
        }
    }
};