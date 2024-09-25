function Hello(){
  let user="Farkhanda";

  let greetAccToAge=(age)=>{
    if(age<30) return "my homie";
    else return "Madam";
  }

  return <div>
    <h1>WASSSUP {user} {greetAccToAge(21)}</h1>
    <h2>If arg is not mentioned the else statement will execute {greetAccToAge()}</h2>
  </div>
          
}

export default Hello;