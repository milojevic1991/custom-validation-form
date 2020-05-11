export const validate = (info) => {
  let errors = {};

  if (!info.name) {
    errors.name = 'You forgot your name';
  }

  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(info.email)) {
    errors.email = 'You forgot your email';
  }

  return errors;
  console.log('validation');
};
