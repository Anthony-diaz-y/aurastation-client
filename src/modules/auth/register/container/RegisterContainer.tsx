import RegisterHeader from "../components/RegisterHeader";
import RegisterForm from "../components/RegisterForm";

export default function RegisterContainer() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-linear-to-br from-[#1d57bb] to-[#0f2d6e] px-6 py-8">
      <div className="w-full max-w-sm flex flex-col items-center">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </main>
  );
}
