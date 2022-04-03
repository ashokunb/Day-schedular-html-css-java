//updates the date and time for schedular//
$('#todaysDate').text(moment().format('MMM Do YY, h:mm:ss a'))
$('#todaysday').text(moment().format('dddd'))


var inputTextarea1 = $('#text1')
console.log(inputTextarea1);

$('button').click(function(event){
    event.preventDefault()
    localStorage.setItem('content1',inputTextarea1.val());
    inputTextarea1.text(inputTextarea1.val());
})




