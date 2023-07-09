import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-5 lg:my-20 xl:my-20 md:my-10 flex justify-center">
      <SignUp
        path="/SignUp"
        routing="path"
        signInUrl="/SignIn"
        redirectUrl={"/"}
      />
    </div>
  );
}
