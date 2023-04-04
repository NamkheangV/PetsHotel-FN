import Navbar from "@/components/Navbar";
import myFooter from "@/components/Footer";

export default function Layouts({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <myFooter />
    </div>
  );
}
