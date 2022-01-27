import React from "react";

interface FooterProps {
  text?: string;
  copyright?: string;
}

Footer.defaultProps = {
  text: "Made with ❤️ and ☕.",
  copyright: "Brand"
}

function Footer(props: FooterProps) {
  return (
    <footer className="text-center">
      <div className="py-2 text-sm bg-black text-white">
        <p>{ props.text }</p>
        <div className="font-bold">
          { props.copyright } &copy; 2021
        </div>
      </div>
    </footer>
  )
}

export { Footer };