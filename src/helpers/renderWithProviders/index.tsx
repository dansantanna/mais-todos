import { render } from "@testing-library/react";
import Application from "components/Application";

const renderWithProviders = (comp: React.ReactNode) => {
  return render(<Application>{comp}</Application>);
};

export default renderWithProviders;
