import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OurFoodSection from '@/components/OurFoodSection';
import BestDishesSection from '@/components/BestDishesSection';
import CombosSection from '@/components/CombosSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import DessertsSection from '@/components/DessertsSection';
import HalalSection from '@/components/HalalSection';

// Location configuration
const locationConfig = {
  saddletowne: {
    name: 'Saddletowne',
    address: '216 Saddletowne Circle NE',
    orderUrl: 'https://www.foodbooking.com/ordering/?restaurant_uid=6d6838bc-e92c-4bf5-8c60-661c72a7e147&site_url=aHR0cHM6Ly93d3cuZnJpdG91Y2hpY2tlbnBpenphLmNvbS8%3D',
    showDelivery: false
  },
  fritou130: {
    name: 'Fritou 130',
    address: '4307 130 Ave SE, Unit 33',
    orderUrl: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e31fe047-bc51-4ba1-bec4-481b429ff376',
    showDelivery: true
  }
};

export default async function LocationPage({ params }) {
  const { id } = await params;
  const locationData = locationConfig[id] || locationConfig.saddletowne;

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection locationId={id} orderUrl={locationData.orderUrl} />
      <AboutSection locationId={id} showDelivery={locationData.showDelivery} />
      <HalalSection />
      <BestDishesSection orderUrl={locationData.orderUrl} />
      <OurFoodSection orderUrl={locationData.orderUrl} />
      <CombosSection orderUrl={locationData.orderUrl} />
      <DessertsSection/>
      <TestimonialsSection />
      <ContactSection locationId={id} locationName={locationData.name} address={locationData.address} />
    </main>
  );
}
