import "./Modale.css";
import Form from "../Form/Form";

function Modale() {
   return (
      <div className="modale">
         <i className="fa fa-user-circle"></i>
         <h1>Sign In</h1>
         <Form>
            <div className="signIn-Modale-Username-Wrapper">
               <label htmlFor="username">Username</label>
               <input type="text" id="SignIn-Modale-Username" name="username" /> 
            </div>
            <div className="signIn-Modale-Password-wrapper">
               <label htmlFor="password">Password</label>
               <input type="password" id="signIn-Modale-Password" name="password" />
            </div>
            <div className="signIn-Modale-RememberMe-wrapper">
               <input type="checkbox" id="signIn-Modale-RememberMe" />
               <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="signIn-Modale-Submit-Wrapper">
               <input type="submit" id="signIn-Modale-Submit" value="Sign In"/>
            </div>
         </Form>
      </div>
   );
}

export default Modale;