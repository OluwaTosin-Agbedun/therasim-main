import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import React from "react";
import GetInTouchForm from "./getInTouchForm";

const GetInTouch = () => {
  return (
    <section className="py-14 md:py-20 overflow-hidden">
      <Container>
        <Typography
          className="text-center font-semibold mb-3"
          variant="heading-5"
          tabletVariant="heading-2"
        >
          Get in touch with us
        </Typography>
        <Typography className="text-grey-color-500 text-center mb-10">
          We&apos;d love to hear from you. Please fill out this form.
        </Typography>
        <GetInTouchForm />
      </Container>
    </section>
  );
};

export default GetInTouch;
