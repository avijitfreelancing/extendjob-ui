const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Extend-job by{" "}
        <a
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevTechMaster
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
