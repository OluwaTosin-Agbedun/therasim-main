"use client";

import Button from "@/components/common/button";
import Form from "@/components/common/forms/form";
import FormCheckbox from "@/components/common/forms/formCheckbox";
import FormInput from "@/components/common/forms/formInput";
import FormTextArea from "@/components/common/forms/formTextArea";
import React from "react";
import useGetInTouchForm from "../../../hooks/useGetInTouchForm";

export interface IGetInTouchForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  agree: boolean;
}

const initialValues: IGetInTouchForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
  agree: false,
};

const GetInTouchForm = () => {
  const { handleSubmit, isLoading, validationSchema } = useGetInTouchForm();

  return (
    <Form
      className="max-w-[500px] mx-auto"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="flex-1">
          <FormInput
            name="firstName"
            placeholder="Enter first name"
            label="First name"
            disabled={isLoading}
          />
        </div>
        <div className="flex-1">
          <FormInput
            name="lastName"
            placeholder="Enter first name"
            label="Last name"
            disabled={isLoading}
          />
        </div>
      </div>
      <FormInput
        name="email"
        placeholder="Enter email"
        label="Email"
        type="email"
        disabled={isLoading}
      />
      <FormInput
        name="phoneNumber"
        placeholder="Enter phone number"
        label="Phone number"
        type="tel"
        disabled={isLoading}
      />
      <FormTextArea
        name="message"
        label="Message"
        placeholder="Enter message"
        disabled={isLoading}
      />
      <FormCheckbox
        name="agree"
        label="You agree to our friendly privacy policy."
        disabled={isLoading}
      />
      <div>
        <Button
          type="submit"
          loading={isLoading}
          label="Send message"
          fullWidth
        />
      </div>
    </Form>
  );
};

export default GetInTouchForm;
