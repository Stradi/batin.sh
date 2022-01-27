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
      <p className="py-2 text-sm bg-black text-white">
        { props.text }
        <br></br>
        <div className="font-bold">
          { props.copyright } &copy; 2021
        </div>
      </p>
    </footer>
  )
}

export { Footer };