import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
import { toast} from "react-toastify";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui";
import styles from "./Form.module.scss";
import emailjs from '@emailjs/browser'
export const Form = ({ modalClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {

    emailjs.send('service_okoza0b', 'template_jw3f7uh', data, 'myx63XfRfUvzWa19x')
      .then((response) => {
			if(response.status == 200){
				toast.success(
					"Ваши данные были отправлены. Ожидайте обратной связи!"
				 );
			}
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
			toast.error(
				"Ошибка! Ваши данные не были отправлены"
			 );
        console.log('FAILED...', err);
      });
    reset();
    if (modalClose) {
      modalClose();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Поле 'Имя' обязательное",
          minLength: {
            value: 3,
            message: "Минимальное количество символов - 3",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder={"Введите ваше Имя"} />
        )}
      />
      {errors?.name && (
        <p className={styles.required}>{errors?.name?.message}</p>
      )}
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Поле 'email' обязательное",
          pattern: {
            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
            message: "Ваш email должен быть в формате: example@example.com(ru)",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder={"Введите ваш email"} />
        )}
      />
      {errors?.email && (
        <p className={styles.required}>{errors?.email?.message}</p>
      )}
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Поле 'телефон' обязательное",
          minLength: {
            value: 10,
            message: "Минимальное количество символов - 10",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder={"Введите ваш номер телефона"} />
        )}
      />
      {errors?.phone && (
        <p className={styles.required}>{errors?.phone?.message}</p>
      )}

      <Button>Отправить заявку</Button>
      <p className={styles.agreement}>
        Отправляя форму, вы принимаете
        <span>«Соглашение об обработке персональных данных»</span> и условия
        «Оферты», а также соглашаетесь с <span>«Условиями использования»</span>
      </p>
    </form>
  );
};
