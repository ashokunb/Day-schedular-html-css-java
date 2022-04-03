//updates the date and time for schedular//
$('#todaysDate').text(moment().format('MMM Do YY, h:mm:ss a'))
$('#todaysday').text(moment().format('dddd'))


function makeButtons() {
    for(i=0; i<9; i++){
        var currentInput = $('text' +i);
        $('#button' + [i]).click(function(event){
            event.preventDefault()
            localStorage.setItem('content' + i ,currentInput.val());
            console.log(currentInput);
        });
    };

};

$('text1').val(localStorage.getItem('content1'));
$('text1').val(localStorage.getItem('content2'));
$('text1').val(localStorage.getItem('content3'));
$('text1').val(localStorage.getItem('content4'));
$('text1').val(localStorage.getItem('content5'));
$('text1').val(localStorage.getItem('content6'));
$('text1').val(localStorage.getItem('content7'));
$('text1').val(localStorage.getItem('content8'));




