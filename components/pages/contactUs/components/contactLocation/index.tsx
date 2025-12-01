import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import React from "react";
import Link from "next/link";
import PhoneIcon from "@/assets/svgs/phone.svg";
import EmailIcon from "@/assets/svgs/email.svg";
import LocationIcon from "@/assets/svgs/location.svg";

const PHONE_NUMBER = "+234 911 106 6140";
const EMAIL_ADDRESS = "info@therasimvr.com";

const ContactLocation = () => {
  return (
    <section className="py-16 md:py-28 bg-[#01375D] overflow-hidden text-white">
      <Container>
        <Typography
          variant="heading-5"
          tabletVariant="heading-2"
          className="text-center font-semibold mb-8 md:mb-14"
        >
          Our contact and location
        </Typography>
        <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-5 justify-center font-semibold">
          <Link
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2"
          >
            <PhoneIcon />
            <Typography variant="body" tabletVariant="body-medium">
              {PHONE_NUMBER}
            </Typography>
          </Link>
          <Link
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center gap-2"
          >
            <EmailIcon />
            <Typography variant="body" tabletVariant="body-medium">
              {EMAIL_ADDRESS}
            </Typography>
          </Link>
          <div className="flex items-center gap-2">
            <LocationIcon />
            <Typography
              className="flex-1"
              variant="body"
              tabletVariant="body-medium"
            >
              Block A, Phase II, Sani Zangon Daura Estate, Kado, Abuja, Nigeria
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactLocation;
