import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register, //used for tracking input fields for err handling, validation, checking val
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm();

  function onSubmit(data) {
    console.log("submitting", data);
    //handle submit provides submitted form data
  }
  return (
    <center>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            {...register("first", {
              required: "First name is required",
              minLength: { value: 3, message: "Length should be more than 3" },
            })}
          />
          {errors.first && <p>{errors.first.message}</p>}
          {/* register your input into the hook by invoking the "register" function */}
        </div>
        <div>
          <label htmlFor="">Mail</label>
          <input
            type="email"
            {...register("mail", { required: true, minLength: 12 })}
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="number" {...register("age")} />
        </div>
        <br />
        <button disabled={isSubmitting}>Submit</button>
      </form>
    </center>
  );
};

export default App;
