import { useState } from "react";
import { IGetInTouchForm } from "../components/getInTouch/getInTouchForm";
import { FormikHelpers } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-simple-toasts";
import { contactUsFormSchema } from "../utils/contactUsSchema";

const EMAIL_SERVICE_ID = "service_31pm8l7";
const EMAIL_TEMPLATE_ID = "template_ws1bqdu";
const EMAIL_PUBLIC_KEY = "3otAwlWFpbHvvIeQS";

const useGetInTouchForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: IGetInTouchForm,
    helpers: FormikHelpers<IGetInTouchForm>
  ) => {
    try {
      setIsLoading(true);

      const templateParams = {
        ...values,
      };

      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, {
        publicKey: EMAIL_PUBLIC_KEY,
      });

      toast("Message sent successfully", {
        theme: "success",
      });
      helpers.resetForm();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast("Error sending message. Please try again.", {
        theme: "failure",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validationSchema = contactUsFormSchema();

  return { isLoading, handleSubmit, validationSchema };
};

export default useGetInTouchForm;
