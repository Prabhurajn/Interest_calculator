/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calculate_interest() {
    var pa = document.getElementById('field_pa').value;
    var sd = document.getElementById('field_s_date').value;
    var ed = document.getElementById('field_e_date').value;
    var rot = document.getElementById('field_rot').value;
    alert(DateDiff(sd, ed));
}
function calculateDifference(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    var diff = Math.floor(endDate.getTime() - startDate.getTime());
    return (diff);
    var milliSeconds =  1000 * 60 * 60 * 24;;

    var days = Math.floor(diff/milliSeconds);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    return ("Difference is " + years + " years " + months + " months " + days + " days.");
}
