import { useEffect, useState } from "react";

export default function DropdownWithIcon({
  options,
  onSelect,
  required = false,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // onSelect(option);
    setIsOptionsVisible(false);
  };

  useEffect(() => {
    // Close the options list when clicking outside of it
    const handleClickOutside = (event) => {
      if (event.target.closest(".custom-select") === null) {
        setIsOptionsVisible(false);
      }
    };

    // .default-form .form-group select

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="custom-select">
        <div
          className="selected-option"
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          {selectedOption ? (
            <>
              <img
                src={selectedOption.flags.svg}
                alt={selectedOption.name}
                width={30}
                height={30}
                className="option-image"
              />
              {selectedOption.name}
            </>
          ) : (
            "Select an option"
          )}
        </div>
        {isOptionsVisible && (
          <div className="chosen-single form-select">
            {options.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleOptionClick(option)}
              >
                <img
                  src={option.flags.svg}
                  alt={option.name}
                  width={30}
                  height={30}
                  className="option-image"
                />
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
