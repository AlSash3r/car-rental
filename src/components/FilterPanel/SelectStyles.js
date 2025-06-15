export const SelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    border: "none",
    borderRadius: "12px",
    padding: "4px 8px",
    minHeight: "44px",
    boxShadow: state.isFocused ? "0 0 0 1px #3470ff" : "none",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#101828",
    fontWeight: "500",
    fontSize: "16px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#101828",
    fontWeight: "500",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 10,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
