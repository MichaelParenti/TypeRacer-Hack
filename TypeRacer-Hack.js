//                            TypeRacer Hack

//*****************************Instructions************************************
// 1. Copy and paste the code below into the developer console.
// 2. If you get an error repeat step 1.
// 3. Press any of the keys  to move forward (until you reach next space key). 
// 4. Press the space key to move to the next word.
// 5. Repeat steps 3 and 4 until you reach the end of the race.

var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();
(function($)
{
var inputText;
var flag = true;
var i = 0;
$('body').on('keypress','.txtInput',function(e)
{
if(flag)
{
inputText = $('.inputPanel tr:first').text();
flag = false;
}
if(inputText[i] == " ")
{
if((e.which || e.keyCode)==32)
i++;
else
e.preventDefault();
}
else
{
e.preventDefault();
$( '.txtInput' ).val($( '.txtInput' ).val()+inputText[i]);
i++;
}
});
})(jQuery);