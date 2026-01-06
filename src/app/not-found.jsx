import Link from "next/link";
import { FaSearch, FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <FaSearch className="mx-auto text-6xl text-warning mb-4" />

        <h1 className="text-3xl font-bold mb-2">পেজটি খুঁজে পাওয়া যায়নি</h1>

        <p className="text-base-content/70 mb-6">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো নেই বা সরিয়ে ফেলা হয়েছে।
        </p>

        <Link href="/" className="btn btn-primary gap-2">
          <FaHome />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
