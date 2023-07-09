import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="py-5 lg:py-20 xl:py-20 md:py-10 flex justify-center bgr">
      <SignIn
        path="/SignIn"
        routing="path"
        signUpUrl="/SignUp"
        redirectUrl={"/"}
      />
    </div>
  );
}
