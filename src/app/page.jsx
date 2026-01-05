import Section from "@/components/common/Section";
import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <>
      <Section>
        <Banner />
      </Section>
      <Section>
        <Products />
      </Section>
    </>
  );
}
