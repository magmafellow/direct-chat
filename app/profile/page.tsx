import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header className="px-3" />
      <main className="flex-grow">
        <section className="px-4 tracking-wider font-medium text-stone-300">
          <h2 className="drop-shadow-author text-fuchsia-300 font-bold text-center text-lg mb-4 md:text-left">
            MagmaFellow
          </h2>
          <div>
            email: <span className="text-stone-50">magmafellow@gmail.com</span>
          </div>
          <div>
            telegram: <span className="text-stone-50">@polrekost</span>
          </div>
          <div>
            phone: <span className="text-stone-50">+ 7 (926) 939 34-57</span>
          </div>
        </section>
      </main>
      <Footer className="px-3" />
    </div>
  );
}
