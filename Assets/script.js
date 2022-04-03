//updates the date and time for schedular//
$('#todaysDate').text(moment().format('MMM Do YY, h:mm:ss a'))
$('#todaysday').text(moment().format('dddd'))


//save button functions makes sure everything is saved tot he local storage
function saveButton() {
    $('#button1').click(function(event){
        var inputTextAreaOne = $('#text1');
        event.preventDefault()
        localStorage.setItem('content1',inputTextAreaOne.val());
    });
    $('#text1').val(localStorage.getItem('content1'));

    $('#button2').click(function(event){
        var inputTextAreaOne = $('#text2');
        event.preventDefault()
        localStorage.setItem('content2',inputTextAreaOne.val());
    });
    $('#text2').val(localStorage.getItem('content2'));

    $('#button3').click(function(event){
        var inputTextAreaOne = $('#text3');
        event.preventDefault()
        localStorage.setItem('content3',inputTextAreaOne.val());
    });
    $('#text3').val(localStorage.getItem('content3'));

    $('#button4').click(function(event){
        var inputTextAreaOne = $('#text4');
        event.preventDefault()
        localStorage.setItem('content4',inputTextAreaOne.val());
    });
    $('#text4').val(localStorage.getItem('content4'));

    $('#button5').click(function(event){
        var inputTextAreaOne = $('#text5');
        event.preventDefault()
        localStorage.setItem('content5',inputTextAreaOne.val());
    });
    $('#text5').val(localStorage.getItem('content5'));

    $('#button6').click(function(event){
        var inputTextAreaOne = $('#text6');
        event.preventDefault()
        localStorage.setItem('content6',inputTextAreaOne.val());
    });
    $('#text6').val(localStorage.getItem('content6'));

    $('#button7').click(function(event){
        var inputTextAreaOne = $('#text7');
        event.preventDefault()
        localStorage.setItem('content7',inputTextAreaOne.val());
    });
    $('#text7').val(localStorage.getItem('content7'));

    $('#button8').click(function(event){
        var inputTextAreaOne = $('#text8');
        event.preventDefault()
        localStorage.setItem('content8',inputTextAreaOne.val());
    });
    $('#text8').val(localStorage.getItem('content8'));

    $('#button9').click(function(event){
        var inputTextAreaOne = $('#text9');
        event.preventDefault()
        localStorage.setItem('content9',inputTextAreaOne.val());
    });
    $('#text9').val(localStorage.getItem('content9'));
};

//Button to clear and refresh the page
$('#button10').click(function() {
    localStorage.clear();
    location.reload();
});

saveButton();