//TEMPLATES//////////////////////////////////////////////////////////
// <script type="text/html" id="noteTmpl">
//   <article class="noteTem">
//   <h4><%= todaysDate =%></h4>
//   <p><%= myNote =%></p>
// </script>
// //////////////////////////////
// <script type="text/html" id="workoutTmpl">
//   <article class="workoutTem">
//   <%= todaysWorkout =%>
//   <p><%= noteForm =%></p>
// </script>

var Ourtemplates ={

  workingOut:[
    '<ul id="listWorkout">',
    '<li class="WorkItem"><h3 class="worktype">ARMS</h3>   <%=armWorkout.arm%></li>',
    '<li class="WorkItem"><h3 class="worktype">LEGS</h3>   <%=legWorkout.leg%></li>',
    '<li class="WorkItem"><h3 class="worktype">CORE</h3>   <%=coreWorkout.core%></li>',
    '<li class="WorkItem"><h3 class="worktype">CARDIO</h3>   <%=cardioWorkout.cardio%></li>',
    '</ul>',
    ].join(""),


};
