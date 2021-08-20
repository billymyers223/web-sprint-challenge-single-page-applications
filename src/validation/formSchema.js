import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2,'name must be at least 2 characters'),
    special: yup
        .string(),
    size: yup
        .string()
        .oneOf(['Large','Medium','Small'], 'Size is required'),

    sauce: yup
        .string(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    bacon: yup.boolean(),
    sausage: yup.boolean()
})

export default formSchema;