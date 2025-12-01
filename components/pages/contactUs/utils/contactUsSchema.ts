import { Shape } from "@/validations/constants/shape";
import * as yup from "yup";
import { IGetInTouchForm } from "../components/getInTouch/getInTouchForm";

export const contactUsFormSchema = () =>
  yup.object().shape<Shape<IGetInTouchForm>>({
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter email"),
    phoneNumber: yup.string().required("Please enter phone number"),
    message: yup.string().required("Please enter message"),
    agree: yup.boolean().oneOf([true], "Kindly agree to the policy"),
  });
