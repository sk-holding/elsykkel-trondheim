import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";
import Stores from "@/components/shared/Stores";
import { location } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Butikk - Elsykkel Trondheim",
  description:
    "Kom innom en av våre flotte butikker i Trondheim for en trivelig elsykkelprat. Våre dyktige medarbeidere står klare til å hjelpe deg.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          E-Wheels har butikker i hele landet. I Trondheim holder vi til i
          Midtbyen og i Elgeseter gate. Kom innom for en trivelig elsykkelprat!
        </h2>
      </div>
      <Butikker />
      <Stores location={location.butikk} />
    </main>
  );
};

export default Page;
