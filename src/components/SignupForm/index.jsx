import { useForm } from "react-hook-form";
const SignupForm = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
       
        const handleClearClick = () => {
          reset();
        }
        const handleFormSubmit = (data) => {
            console.log(data);

            
        }

    return (
       <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>
                Name:
                <input {...register('name', {required: true})} />
            </label>
            <br />
            <label>
                Age:
                <input  {...register('age', {required: true})} />
            </label>
            <br />
            <label>
                Address:
                <input  {...register('address', {required: true})}/>
            </label>
            <br />
            <label>
                Zipcode:
                <input {...register('zipcode')} required/>
            </label>
            <br />
            <label>
                Phone:
                <input {...register('phone')} required/>
            </label>
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>

       </form>
    );

}

export default SignupForm;