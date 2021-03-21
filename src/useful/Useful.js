// import moment from 'moment';

//FUNCIONES ÚTILES Y MISCELANEA.

const checkError = (datosCheck) => {
    

  for(let field in datosCheck){


    switch(field) {

      case 'firstName' : 

      // eslint-disable-next-line
        if(! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(datosCheck[field])){

          return "El nombre introducido solo puede contener letras";
        }

        break;

      case 'lastName' : 

      // eslint-disable-next-line
        if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(datosCheck[field])){

        return "El apellido introducido solo puede contener letras";
        }

        break;

      case 'email' :

      // eslint-disable-next-line
        if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field]) ){
            
        return "El email introducido no es correcto";
        }

      break;


      case 'password' :

      // eslint-disable-next-line
        if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\_.*])(?=.{8,})/.test(datosCheck[field])){
          return "El password debe contener 8 caracteres, mayúsculas, minúsculas, número y algún caracter especial";
        }
          
      break;

      case 'phoneNumber' : 

      // eslint-disable-next-line
        if(! /^[0-9]{9,11}$/.test(datosCheck[field])){

        return "Introduce nueve dígitos sin espacios, por favor.";
        }

      break;

        case 'address' :

        // eslint-disable-next-line
        if(! /^[#.0-9a-zA-Z\s,-\ñÑ]+$/.test(datosCheck[field])){

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