$(document).ready(function(){
  debugger
$("#myform1").validate({
  rules:{
    Firstname: {
      required:true,
      minlength:3,
      non_numeric: true
    },
    Lastname:{
      required:true,
      minlength:3,
      non_numeric: true
    },
    StreetAddress : {
      required:true
    },
    Address2:{
      required:true
    },
    Address3:{
      required:true
    },
    Address4:{
      required:true
    },
    Address5:{
      required:true,
      number:true,
      minlength:6
    },
    phn_num:{
      required:true,
      number:true,
      minlength:10,
    },
    mail_id:{
      required:true,
      mail:true
    },
    info:{
      requiredSelect:true
    },
    feedback:{
      maxlength:5
    },
    suggestions:{
      maxlength:5
    },
    check_box:{
      required:true
    },
    gender:{
      required:true
    }

  },
  messages:{
    Firstname:{
      required:"Please enter your first name.",
      minlength:"More than 3 characters required."
    },
    Lastname:{
      required:"Please enter your last name.",
      minlength:"More than 3 characters required." 
    },
    StreetAddress:{
      required:"Please enter your street address."
    },
    Address2 : {
      required:"Please enter your street address"
    },
    Address3:{
      required:"Please enter your city"
    },
    Address4:{
      required:"Please enter your state/province"
    },
    Address5:{
      required:"Please enter your Zip/Postal code.",
      minlength:"Zip code must have only 6 digits",
      number:"Only numbers allowed."
    },
    phn_num:{
      required:"Please enter your phone number",
      number:"Only numbers allowed",
      minlength:"Phone numbers must have only 10 digits",
    },
    mail_id:{
      required:"Please enter your mail id"
    },
    info:{
      requiredSelect:"Please select an option"
    },
    feedback:{
      maxlength:"Only 5 characters allowed"
    },
    suggestions:{
      maxlength:"Only 5 characters allowed"
    },
    check_box:{
      required:"Please select the checkbox"
    },
    gender:{
      required:"Please select your gender."
    }

  }
});
});


$('#submitform').on('click', function(event){
    debugger
    var fname = $("#Firstname").val();
    var lname = $("#Lastname").val();
    var add1 = $("#StreetAddress").val();
    var add2 = $("#Address2").val();
    var add3 = $("#Address3").val();
    var add4 = $("#Address4").val();
    var add5 = $("#Address5").val();
    var phonenum = $("#phn_num").val();
    var email_id = $("#mail_id").val();
    var ref = $("#info").val();
    var feedb = $("#feedback").val();
    var suggest = $("#suggestions").val();
    var check = $("#check_box").val();
    var gend = $(" input[type='radio'][name='gender']:checked").val();
   
    $('#myTable tbody').append('<tr class="child"><td>'+fname+'</td><td>'+lname+'</td><td>'
        +add1+'</td><td>'+add2+'</td><td>'+add3+'</td><td>'+add4+'</td><td>'+add5+'</td><td>'
        +phonenum+'</td><td>'+email_id+'</td><td>'+ref+'</td><td>'+feedb+'</td><td>'+suggest+'</td><td>'+check+'</td><td>'+
        gend+'</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a><br><a href="javascript:void(0);" class="remCF2 btn btn-small btn-danger">Update</a></td></tr>');
   
    event.preventDefault();
  });
  $(document).on('click','.remCF1',function(){
    debugger
    $(this).parent().parent().remove();
    $('#myTable tbody tr').each(function(i){            
     $($(this).find('td')[0]).html(i+1);          
    });
    });

    


 