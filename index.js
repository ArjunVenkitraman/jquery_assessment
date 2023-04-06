function validate(){
    $(document).ready(function(){
        $('#formid').validate({
            rules:{
                password:{
                    required:true,
                    minlength:7,
                    maxlength:15,
                    pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#])[A-Za-z\d@$#]{8,16}$/
                },
                number:{
                    required:true,
                    pattern:/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/
                },
                email:{
                    required:true,
                    pattern:/^[a-z0-9]+[@]+([cgvak]{5})+[\.]+([com]{3})+$/
                }

            },
            messages:{
                password:{
                    required:"Please Enter Password",
                    minlength:"It should be minimum of 7 characters",
                    maxlength:"It should contain 15 characters only",
                    pattern:"Follow the pattern"
                },
                number:{
                    required:"Please Enter Number",
                    pattern:"Follow 999-9999-9999 format"
                },
                email:{
                    required:"Please Enter Email",
                    email:"Follow email format abc@123"
                }
            }
        })
    })
}