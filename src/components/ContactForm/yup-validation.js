import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().min(8, 'Too Short!').required(),
});
