import StatsSection from "@/components/sections/StatsSection";
import ServerRequestChart from "@/components/charts/ServerRequestChart";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function DashboardPage() {
  return (
    <>
      <StatsSection />

      <ServerRequestChart />

      <AnalyticsSection />

      <ReviewsSection />
    </>
  );
}