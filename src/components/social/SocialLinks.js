import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const links = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Ragtop-Media-112531074552903",
    Icon: FaFacebookSquare,
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com/_R_T_Media",
    Icon: FaTwitterSquare,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ragtopmedia",
    Icon: FaInstagramSquare,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-gionfriddo-1a660048",
    Icon: FaLinkedin,
  },
];

export function SocialLinks({ iconClassName }) {
  return (
    <>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </>
  );
}
