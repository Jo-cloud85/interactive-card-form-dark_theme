// Card img selectors
const cardDNum = $('.card-d-number'),
      cardDExpMM = $('.card-d-exp-mm'),
      cardDExpYY = $('.card-d-exp-yy'),
      cardDName = $('.card-d-name'),
      cardDCvc = $('.card-d-cvc');

// Card input selectors
const cardholderName = $("#cardholder-name"),
      cardNum = $("#card-number"),
      expMonth = $("#exp-month"),
      minMValue = Number(expMonth.attr('min')),
      maxMValue = Number(expMonth.attr('max')),
      expYear = $("#exp-year"),
      minYValue = Number(expYear.attr('min')),
      cvc = $("#cvc");
      
// Error message selectors
const nameErr = $("#name-err"),
      cardNumErr = $("#card-number-err"),
      expErr = $("#exp-err"),
      cvcErr = $("#cvc-err");


// Function to limit input length
const limitInputLength = (inputElement, maxLength) => {
    let value = inputElement.val().slice(0, maxLength);
    inputElement.val(value); // Update the input value with the formatted value
    return value;
}

// Function to format card number
const formatCardNumber = (inputElement) => {
    let value = inputElement.val();
    value = value.replace(/[^A-Za-z0-9]/g, ''); // Remove any non-alphanumeric characters from the input value
    value = value.replace(/(.{4})/g, '$1 ').trim(); // Format the value as 4-digit groups separated by spaces
    inputElement.val(value); // Update the input value with the formatted value
    return value;
}

// Listen for input events on the cardholder name field
cardholderName.on('input', function() {
    let nameValue = limitInputLength($(this), 24);
    cardDName.text(nameValue);
});

// Listen for input events on the card number field
cardNum.on('input', function() {
    let numValue = limitInputLength($(this), 19);
    numValue = formatCardNumber($(this));
    cardDNum.text(numValue);
});

// Listen for input events on the card exp month field
expMonth.on('input', function() {
    let expMValue = limitInputLength($(this), 2);
    cardDExpMM.text(expMValue + '/');
});

// Listen for input events on the card exp year field
expYear.on('input', function() {
    let expYValue = limitInputLength($(this), 2);
    cardDExpYY.text(expYValue);
});

// Listen for input events on the card cvc field
cvc.on('input', function() {
    let cvcValue = limitInputLength($(this), 3);
    cardDCvc.text(cvcValue);
});


// Function to check validity of inputs before passing on the confirm button
const validateInput = () => {
    const validNumRegex = /^[0-9 ]*$/;
    const validNameRegex = /^[a-zA-Z ]*$/;

    const fields = [
        {input: cardholderName, err: nameErr, regex: validNameRegex, errMsg: "Wrong format, alphabets only"},
        {input: cardNum, err: cardNumErr, regex: validNumRegex, errMsg: "Wrong format, numbers only"},
        {input: expMonth, err: expErr, errMsg: "Invalid date", attrName: 'exp-month', minVal: minMValue, maxVal: maxMValue},
        {input: expYear, err: expErr, errMsg: "Invalid date", attrName: 'exp-year', minVal: minYValue},
        {input: cvc, err: cvcErr, errMsg: "Invalid cvc"},
    ];

    let isValidInput = true;

    fields.forEach(field => {
        const value = field.input.val().trim();

        if (value === '') {
            isValidInput = false;
        } else if (field.regex && !field.regex.test(value)) {
            isValidInput = false;
        } else if (field.attrName && (value < field.minVal || value > field.maxVal)) {
            isValidInput = false;
        }

        if (!isValidInput) {
            field.input.addClass("border-orange");
            field.err.addClass("err-msg");
            field.err.text(field.errMsg);
        } else {
            field.input.removeClass("border-orange");
            field.err.removeClass("err-msg");
            field.err.text("");
        }
    });

    if (isValidInput) {
        $('.modal-container').css('display', 'grid');
        $('.input-section').css('display', 'none');

        const resetInputs = [cardholderName, cardNum, expMonth, expYear, cvc];
        const resetErrs = [nameErr, cardNumErr, expErr, cvcErr];

        $('#continue-btn').on('click', function(event) {
            event.preventDefault();

            resetInputs.forEach(input => input.val(''));
            resetErrs.forEach(err => err.text(""));

            $('.modal-container').css('display', 'none');
            $('.input-section').css('display', 'block');

            $(this).off('click');
        });
    }
}

// Function to listen for the confirm button being clicked
function submitForm() {
    $(".confirm-btn").off('click').on('click', validateInput);
}

submitForm();