// import Typography from "@/components/common/typography";
import { Path } from "@/navigations/routes";
import { FooterColumnProps } from "../components/footer/footerColumn";
// import LinkedInIcon from "@/assets/svgs/linkedin.svg";
// import YoutubeIcon from "@/assets/svgs/youtube.svg";
// import FacebookIcon from "@/assets/svgs/facebook.svg";
// import TiktokIcon from "@/assets/svgs/tiktok.svg";

export const footerData: FooterColumnProps[] = [
  {
    header: "Company",
    links: [
      {
        label: "About Us",
        path: Path.About,
      },
      {
        label: "Our team",
        path: "",
      },
    ],
  },
  {
    header: "Contact",
    links: [
      {
        label: "Contact",
        path: Path.ContactUs,
      },
      {
        label: "Help and support",
        path: "",
      },
    ],
  },
  // {
  //   header: "Follow Us",
  //   links: [
  //     {
  //       label: (
  //         <div className="flex items-center gap-2">
  //           <LinkedInIcon />
  //           <Typography as="div">LinkedIn</Typography>
  //         </div>
  //       ),
  //       path: "",
  //       target: "_blank",
  //     },
  //     {
  //       label: (
  //         <div className="flex items-center gap-2">
  //           <YoutubeIcon />
  //           <Typography as="div">Youtube</Typography>
  //         </div>
  //       ),
  //       path: "",
  //       target: "_blank",
  //     },
  //     {
  //       label: (
  //         <div className="flex items-center gap-2">
  //           <FacebookIcon />
  //           <Typography as="div">Facebook</Typography>
  //         </div>
  //       ),
  //       path: "",
  //       target: "_blank",
  //     },
  //     {
  //       label: (
  //         <div className="flex items-center gap-2">
  //           <TiktokIcon />
  //           <Typography as="div">TikTok</Typography>
  //         </div>
  //       ),
  //       path: "",
  //       target: "_blank",
  //     },
  //   ],
  // },
];
