$("#careerQuiz").submit(function(event){

  event.preventDefault();
  var answers = $(this).serializeArray();
  var scores = {
    sofEn: 0,
    law: 0,
    doc: 0,
    proSpo: 0
  };
  for(var answer of answers){
      scores[answer.value] += 1;
  }

  var maxCareer = "sofEn";
  for (var career in scores){
    if (scores[career] > scores[maxCareer]){
      maxCareer = career;
    }
  }
  $("#careerQuiz").css('display', 'none');
  $(".result#"+maxCareer).css('display', 'block');

});
