import Navbar from "@/components/Navbar";

export default function Layouts({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
