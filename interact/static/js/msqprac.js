var $questionSolution = $('.questionSolution')
var $description = $('#description')
var $answers = $('.selectionGroup')
var $answersChosen = $('.active')
var $selectButton = $('#selectButton')
var $nextPage = $('#nextPage')
var $isCorrect = false
var chosenAnswers = []
var $isCorrect = false
var correctAnswers = []
var answerObjects = $questionSolution.each(function(index) {$(this).attr('value')})

$answers.click(function() {
  $nextPage.show()
})

$nextPage.click(function() {
  checkAnswers(correctAnswers, chosenAnswers)
  if ($isCorrect) {
    $curr = parseFloat(window.location.href.split('/')[4])
    $next = $curr + 1
    console.log($curr, typeof($curr))
    window.location.href = "/practice/" + $next + "/"
  }
})

$(window).on('load', function () {
  console.log('loaded');
  $nextPage.hide()
});


function checkAnswers(correctAnswers, chosenAnswers) {
  $('.answers').each(function(index) {
      if ($( this ).is(':checked') == true) {
          chosenAnswers.push($(this).val())}})
  $isCorrect = $(correctAnswers).not(chosenAnswers).length === 0 && $(chosenAnswers).not(correctAnswers).length === 0
}

for(i=0; i < answerObjects.length; i++){
  correctAnswers.push(answerObjects[i].value)
}
