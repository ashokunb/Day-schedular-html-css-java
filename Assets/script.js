//updates the day and time for schedular//
function update(){
    //replaces placeholder text with the moment time/day formatting
    $('#todaysDate').text(moment().format('MMM Do YY, h:mm:ss a'))
    $('#todaysday').text(moment().format('dddd'))
}
update();

function checkTime(){
    //checks for time in millitary time
    var currentTime = moment().format('H');
    console.log(currentTime);
    //.each is a loop that uses (this) for the refered element
    $('.time').each(function(){
       let block = $(this).attr('name');
        console.log(block); 

        if (currentTime === block) {
            $(this).addClass('present')
        }else if (currentTime < block) {
            $(this).addClass('past')
        }
        else{$(this).addClass('future')}  
    }); 
};

checkTime();

function saveButton() {
    var num = [1,2,3,4,5,6,7,8,9]
    for(i=0, i <= num.length, i++) {
        var buttonUpdater = ('"#button"' + '"num"')
        var textUpdater = ('"#text"' + '"num"')
        var containerUpdater = ('"container"' + '"num"')
        $(buttonUpdater).click(function(event){
            var textArea = $(textUpdater);
            console.log(textUpdater)
            event.preventDefault()
            localStorage.setItem(containerUpdater,textArea.val());
        });
    };
    
};
saveButton();


//save button functions makes sure everything is saved to the local storage
function saveButton() {
    $('#button1').click(function(event){
        var textArea = $('#text1');
        event.preventDefault()
        localStorage.setItem('container1',textArea.val());
    });
    $('#text1').val(localStorage.getItem('container1'));

    $('#button2').click(function(event){
        var textArea = $('#text2');
        event.preventDefault()
        localStorage.setItem('container2',textArea.val());
    });
    $('#text2').val(localStorage.getItem('container2'));

    $('#button3').click(function(event){
        var textArea = $('#text3');
        event.preventDefault()
        localStorage.setItem('container3',textArea.val());
    });
    $('#text3').val(localStorage.getItem('container3'));

    $('#button4').click(function(event){
        var textArea = $('#text4');
        event.preventDefault()
        localStorage.setItem('container4',textArea.val());
    });
    $('#text4').val(localStorage.getItem('container4'));

    $('#button5').click(function(event){
        var textArea = $('#text5');
        event.preventDefault()
        localStorage.setItem('container5',textArea.val());
    });
    $('#text5').val(localStorage.getItem('container5'));

    $('#button6').click(function(event){
        var textArea = $('#text6');
        event.preventDefault()
        localStorage.setItem('container6',textArea.val());
    });
    $('#text6').val(localStorage.getItem('container6'));

    $('#button7').click(function(event){
        var textArea = $('#text7');
        event.preventDefault()
        localStorage.setItem('container7',textArea.val());
    });
    $('#text7').val(localStorage.getItem('container7'));

    $('#button8').click(function(event){
        var textArea = $('#text8');
        event.preventDefault()
        localStorage.setItem('container8',textArea.val());
    });
    $('#text8').val(localStorage.getItem('container8'));

    $('#button9').click(function(event){
        var textArea = $('#text9');
        event.preventDefault()
        localStorage.setItem('container9',textArea.val());
    });
    $('#text9').val(localStorage.getItem('container9'));
};

//Button to clear task items and refresh the page
$('#button10').click(function() {
    localStorage.clear();
    location.reload();
});

saveButton();