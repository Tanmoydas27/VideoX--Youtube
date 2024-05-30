import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer
          className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
          <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
            © {year} Copyright :
            <a
              className="text-neutral-800 dark:text-neutral-400"
              href="https://tw-elements.com/"
            > {" "}Tanmoy Das</a>
          </div>
        </footer>
      );
}

export default Footer