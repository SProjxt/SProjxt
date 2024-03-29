import * as Yup from 'yup';
import validationService from '../../../core/service/validationService';

export const PageValidationSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().required().concat(validationService.emailSchema),
  department: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string()
    .required()
    .test('password-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});
