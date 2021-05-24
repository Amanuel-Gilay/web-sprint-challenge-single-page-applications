import * as yup from "yup"
export default yup.object().shape({
    name: yup.string().required("Your name is required to continue").min(2, "it has to be over 2 chars"),
    size: yup.string().required(" size required"),
    peperoni: yup.boolean().oneOf([true,false],""),
    sausage: yup.boolean().oneOf([true,false],""),
    beacon: yup.boolean().oneOf([true,false],""),
    onions: yup.boolean().oneOf([true,false],""),
    instructions: yup.string(),
});