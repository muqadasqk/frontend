import React from "react";

const Button = ({ type, text, onClick, loading = false, disabled = false, className = "btn btn-success",  }) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={loading || disabled}>
      {loading ? "Processing..." : text}
    </button>
  );
};

export default Button;
