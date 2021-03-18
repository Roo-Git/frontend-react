// import moment from 'moment';

//FUNCIONES ÚTILES Y MISCELANEA.

const checkError = (datosCheck) => {
    

  for(let field in datosCheck){


    switch(field) {

      case 'firstName' : 

        if(! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(datosCheck[field])){

          return "El nombre introducido solo puede contener letras";
        }

      break;

      case 'lastName' : 

      if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(datosCheck[field])){

        return "El apellido introducido solo puede contener letras";
      }

  break;

      case 'email' :
        
        if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field]) ){
            
          return "El email introducido no es correcto";
        }

      break;


      case 'password' :

        if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(datosCheck[field])){
          return "El password debe contener 8 caracteres, mayúsculas, minúsculas, número y algún caracter especial";
        }
          
      break;

      case 'phoneNumber' : 

      if(! /^[0-9]{9,11}$/.test(datosCheck[field])){

        return "Introduce nueve dígitos, por favor.";
      }

      case 'address' : 

      if(! /^\d+\s[A-z]+\s[A-z]/.test(datosCheck[field])){

        return "La calle introducida es incorrecta.";
      }

    break;

      default: 

      break;

    }
  }

};

// const checkAge = (birth, age) => {


//     let actualDate = moment().format('YYYY-MM-DD');
        
//     let years = moment(actualDate).diff(birth, "years");
   
//     if(years <= age){
        
//         return "La edad especificada debe ser mayor de " + age;
//     }else{
//         return;
//     }
// }

export {
    checkError,
   // checkAge
};