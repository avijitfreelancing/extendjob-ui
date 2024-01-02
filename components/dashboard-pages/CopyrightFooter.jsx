const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Extend by{" "}
        <a
          href="https://devtechmasters.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Tech Masters
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
