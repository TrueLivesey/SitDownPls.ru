import Inputmask from 'Inputmask';
import JustValidate from 'just-validate';

function formValidation(phone = null, name = null, email = null) {
  // PHONE MASK
  const im = new Inputmask('+7 (999)-999-99-99');

  im.mask(phone);

  // VALIDATION
  const validation = new JustValidate('#callback-form', {
    errorFieldStyle: {
      backgroundColor: 'rgba(255, 105, 114, 1)', // red_input
    },
    successFieldStyle: {
      backgroundColor: 'rgba(184, 236, 100, 1)', // green_input
    },
    validateBeforeSubmitting: true,
  });

  validation
    .addField(`#${name}`, [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
        validateBeforeSubmitting: false,
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недостаточное количество символов',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Вы ввели больше, чем положено',
      },
    ])
    .addField(`#${email}`, [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ])
    .addField(`#${phone.id}`, [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      },
      {
        rule: 'function',
        errorMessage: 'Недопустимый формат',
        validator: function () {
          const phoneMask = phone.inputmask.unmaskedvalue();
          return phoneMask.length === 10;
        },
      },
    ]);
}

export { formValidation };
