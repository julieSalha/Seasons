  var currentDate = new Date();
  // var currentDate = new Date(2018, 8, 26);
  var years = currentDate.getFullYear();

  const PrintempsMinDate = new Date(years, 2, 21);
  const PrintempsMaxDate =  new Date(years, 5, 22);
  const EteMinDate = new Date(years, 5, 22);
  const EteMaxDate =  new Date(years, 8, 23);
  const AutomneMinDate = new Date(years, 8, 23);
  const AutomneMaxDate =  new Date(years, 11, 21);
  const HiverMinDateOne = new Date(years, 11, 21);
  const HiverMaxDateOne =  new Date(years, 11, 31);
  const HiverMinDateTwo = new Date(years, 0, 1);
  const HiverMaxDateTwo =  new Date(years, 2, 21);

  const body = document.querySelector('body');
  
  body.classList.remove('body--spring', 'body--summer', 'body--autumn', 'body--winter');

  if (currentDate >= PrintempsMinDate && currentDate < PrintempsMaxDate ) {
      body.classList.add('body--spring'); 
  }
  else if(currentDate >= EteMinDate && currentDate < EteMaxDate ) {
      body.classList.add('body--summer'); 
  }
  else if(currentDate >= AutomneMinDate && currentDate < AutomneMaxDate ) {
      body.classList.add('body--autumn');
  }
  else if( (currentDate >= HiverMinDateOne && currentDate <= HiverMaxDateOne) || (currentDate >= HiverMinDateTwo && currentDate <= HiverMaxDateTwo) ) {
      body.classList.add('body--winter');
  }