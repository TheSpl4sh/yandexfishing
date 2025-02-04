import { Formik, Form, Field } from "formik"
import ReactInputMask from "react-input-mask";

const PhoneForm = () => {
  return (
    <Formik
      initialValues={{ phone: "" }}
      onSubmit={(values) => {
        console.log("Отправленные данные:", values);
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className="flex flex-col items-center gap-3 p-4 border rounded-lg">
          <label className="text-white">Введите номер телефона</label>

          {/* Поле ввода с маской */}
          <Field
            as={ReactInputMask}
            mask="+7 (999) 999 99 99"
            name="phone"
            placeholder="+7 (000) 000 00 00"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            className="p-3 border rounded-lg text-black"
          />

          {/* <button 
            type="submit" 
            className="p-2 bg-blue-500 text-white rounded-lg"
          >
            Отправить
          </button> */}
        </Form>
      )}
    </Formik>
  )
}

export default PhoneForm