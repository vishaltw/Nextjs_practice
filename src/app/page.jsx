import CustomUseRouter from "@/components/customUseRouter";
import LearnClientComponent from "@/components/LearnClientComponent";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCSS from "@/components/LearnUseGlobalCSS";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink />
      <CustomUseRouter /> */}
      {/* <LearnServerComponent /> */}
      {/* <LearnClientComponent /> */}
      {/* <LearnUseGlobalCSS /> */}
      <LearnCSSModule />
    </main>
  );
}
