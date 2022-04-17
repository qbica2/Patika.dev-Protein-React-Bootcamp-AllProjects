import * as yup from "yup";


const Validations = yup.object().shape({
  name: yup.string()
    .matches(/^[a-zA-Z]+$/, "İsminiz ve soyisminiz sadece harflerden oluşmalıdır.")
    .min(2, "İsminiz ve soyisminiz en az 2 karakter olmalıdır.")
    .max(20, "İsminiz ve soyisminiz en fazla 20 karakter olmalıdır."),
  surname: yup.string()
    .matches(/^[a-zA-Z]+$/, "İsminiz ve soyisminiz sadece harflerden oluşmalıdır.")
    .min(2, "İsminiz ve soyisminiz en az 2 karakter olmalıdır.")
    .max(20, "İsminiz ve soyisminiz en fazla 20 karakter olmalıdır."),
  email: yup.string().email("Geçerli bir e posta giriniz").required("Eposta alanı zorunludur"),
  username: yup.string().required("Kullanıcı adı alanı zorunludur"),
  password: yup.string()
    .min(8,"Şifre en az 8 karakter olmalıdır")
    .max(20,"Şifre en fazla 20 karakter olmalıdır")
    .required("Şifre alanı zorunludur")
    .matches(/^(?=.*[a-z])/, "Şifre en az bir küçük harf içermelidir")
    .matches(/^(?=.*[A-Z])/, "Şifre en az bir büyük harf içermelidir")
    .matches(/^(?=.*[0-9])/, "Şifre en az bir rakam içermelidir"),
  passwordConfirm: yup.string().oneOf([yup.ref("password")],"Şifreler aynı olmalıdır").required("Şifre alanı zorunludur"),
  checkbox: yup.bool().oneOf([true], "Sözleşmeyi kabul etmelisiniz!")
});

export default Validations ;