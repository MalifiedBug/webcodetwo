import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';



export function AddProduct() {

  useEffect(()=>{},[])

 
  return (
    <div className='addproductformdiv'>
      <Formik

initialValues={{ category: [], img: '', issponsored: false,name:'', rating: null, peoplerated: null,isdeal: false,mrp:null,discount:null,deliverydate:'',available:true,quantity:null }}

onSubmit={(values, { setSubmitting }) => {

  
fetch('https://632464475c1b435727a76571.mockapi.io/rental', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values)
})
  .then(()=>console.log("data sent"))

  setTimeout(() => {

    alert(JSON.stringify(values, null, 2));

    setSubmitting(false);

    window.location.reload()
  }, 400);

}}

>

{({ values }) => (

<Form  className="addproductform">

  <Field placeholder="img" name="img" type="text" />
  <label>
            <Field type="checkbox" name="issponsored" />
            {` issponsored - ${values.issponsored}`}
   </label>
  <Field placeholder="name- mention category after name (i.e biking or camping)" name="name" type="text" />
  <Field placeholder="rating" name="rating" min="0" max="5" type="number" />
  <Field placeholder="peoplerated" name="peoplerated" type="number" />
  <label>
            <Field type="checkbox" name="isdeal" />
            {` isdeal - ${values.isdeal}`}
   </label>  <Field placeholder="mrp" name="mrp" type="number" />
  <Field placeholder="discount" name="discount" type="number" />
  <Field placeholder="deliverydate" name="deliverydate" type="date" />
  <label>
            <Field type="checkbox" name="available" />
            {` available - ${values.available}`}
   </label>  <Field placeholder="quantity" name="quantity" type="number" />

  <button type="submit">Submit</button>

</Form>
)}
</Formik>

    </div>
  );
}
