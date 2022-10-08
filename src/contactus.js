import {useFormik} from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';


const formValidationSchema = yup.object({
    email: yup
    .string()
    .min(5, "please enter proper email")
    .max(20, "Too long of an email")
    .required("Why not fill the email?")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matched"),
    summary: yup
    .string()
    .min(7, "Please enter longer message")
    .max(50, "Too much message")
    .required("Why not write a message?"),

})

export function BasicForm(){
    const formik = useFormik({
        initialValues: { email: "", summary: ""},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            alert(values.summary);
        }
    })

    return (
        <form className="contactusform" onSubmit={formik.handleSubmit}>
            <input className="ttt"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            placeholder="Email"
            />
            <br className="ttt"/>
            {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
            <br />
            <input className="ttt"
            id="summary"
            name="summary"
            value={formik.values.summary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="input"
            placeholder="Summary"
            />
            <br className="ttt"/>
            {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            <br />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}











// export default function ContactUs(){
//     return(
//         <div className="contactuscard">
//             <h3>Add necessary infor about the site.</h3>
//             <form typeof="submit">

//                 <input type="text" placeholder="name"></input>
//                 <input type="text" placeholder="emial-id"></input>
//                 <input type="text" placeholder="Message"></input>
//                 <input type="submit" value="submit"></input>

//             </form>
//         </div>
//     )
// }