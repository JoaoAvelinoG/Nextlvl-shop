import { Header } from "../../components/layout/Header";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div>
      <Header className="bg-white border-b border-zinc-200 p-4" />
      {children}
    </div>
  );
}
