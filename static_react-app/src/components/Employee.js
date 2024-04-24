function Employee(props){

  return(
    <>

    <h1>
      Hello I am an employee in the <em> {props.Tile ? props.Tile : "No information provided"} </em> Department, and my name is <em> {props.Name ? props.Name : "No information provided"} </em>
    </h1>

    <h2> 
      The end
    </h2>

    </>
  );

}
export default Employee;