  var currentDate = new Date();
  // var currentDate = new Date(2018, 8, 26);
  var years = currentDate.getFullYear();
  var PrintempsMinDate = new Date(years, 2, 21);
  var PrintempsMaxDate =  new Date(years, 5, 22);
  var EteMinDate = new Date(years, 5, 22);
  var EteMaxDate =  new Date(years, 8, 23);
  var AutomneMinDate = new Date(years, 8, 23);
  var AutomneMaxDate =  new Date(years, 11, 21);
  var HiverMinDateOne = new Date(years, 11, 21);
  var HiverMaxDateOne =  new Date(years, 11, 31);
  var HiverMinDateTwo = new Date(years, 0, 1);
  var HiverMaxDateTwo =  new Date(years, 2, 21);
  $('#Bienvenue').removeClass('printemps ete automne hiver');
  $('.background-site').removeClass('printemps ete automne hiver');
  $('body.personalLogin').removeClass('printemps ete automne hiver');
  if (currentDate >= PrintempsMinDate && currentDate < PrintempsMaxDate ){
      $('#Bienvenue').addClass('printemps');
    
  }
  else if(currentDate >= EteMinDate && currentDate < EteMaxDate ){
      $('#Bienvenue').addClass('ete');
   
  }
  else if(currentDate >= AutomneMinDate && currentDate < AutomneMaxDate ){
      $('#Bienvenue').addClass('automne');
 
  }
  else if( (currentDate >= HiverMinDateOne && currentDate <= HiverMaxDateOne) || (currentDate >= HiverMinDateTwo && currentDate <= HiverMaxDateTwo) ){
      $('#Bienvenue').addClass('hiver');
     
  }