"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

const SelectContext = React.createContext(null);

const Select = ({ children, value, onValueChange }) => {
  const [items, setItems] = React.useState([]);

  // Extract items from children
  React.useEffect(() => {
    const extractedItems = [];
    React.Children.forEach(children, (child) => {
      if (child?.type?.displayName === "SelectContent") {
        React.Children.forEach(child.props.children, (item) => {
          if (item?.props?.value) {
            extractedItems.push({
              value: item.props.value,
              label: item.props.children
            });
          }
        });
      }
    });
    setItems(extractedItems);
  }, [children]);

  return (
    <SelectContext.Provider value={{ value, onValueChange, items }}>
      {children}
    </SelectContext.Provider>
  );
};

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        ref={ref}
        className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {isOpen && <SelectContentDropdown onClose={() => setIsOpen(false)} />}
    </div>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder }) => {
  const context = React.useContext(SelectContext);
  const selectedItem = context?.items?.find(item => item.value === context?.value);
  
  return (
    <span className={!context?.value ? "text-gray-500" : ""}>
      {selectedItem?.label || placeholder}
    </span>
  );
};

const SelectContentDropdown = ({ onClose }) => {
  const context = React.useContext(SelectContext);

  return (
    <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
      <div className="max-h-60 overflow-auto p-1">
        {context?.items?.map((item) => (
          <div
            key={item.value}
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-orange-100 focus:bg-orange-100"
            onClick={() => {
              context?.onValueChange(item.value);
              onClose();
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const SelectContent = ({ children }) => {
  return <>{children}</>;
};
SelectContent.displayName = "SelectContent";

const SelectItem = ({ value, children }) => {
  return null; // This component is just for structure, actual rendering happens in SelectContentDropdown
};

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
