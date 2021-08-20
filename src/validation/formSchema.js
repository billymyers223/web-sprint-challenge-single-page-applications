import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2,'Name must be at least 2 characters'),
    special: yup
        .string(),
    size: yup
        .string()
        .required('Size is required')
        .oneOf(['Large','Medium','Small'], 'Size is required'),
    sauce: yup
        .string()
        .required('Sauce is required')
        .oneOf(['original', 'alfredo'], 'Sauce is required'),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    bacon: yup.boolean(),
    sausage: yup.boolean()
})

export default formSchema;