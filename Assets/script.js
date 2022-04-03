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
makeButtons();

$('text1').val(localStorage.getItem('content1'));
$('text2').val(localStorage.getItem('content2'));
$('text3').val(localStorage.getItem('content3'));
$('text4').val(localStorage.getItem('content4'));
$('text5').val(localStorage.getItem('content5'));
$('text6').val(localStorage.getItem('content6'));
$('text7').val(localStorage.getItem('content7'));
$('text8').val(localStorage.getItem('content8'));




