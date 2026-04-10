import { TrainFront, Bus } from "lucide-react";
import AnimatedContainer from "../AnimatedContainer";
import AnimatedCard from "../AnimatedCard";

const trainLinks = [
    { name: "IRCTC", url: "https://www.irctc.co.in" },
    { name: "ConfirmTkt", url: "https://www.confirmtkt.com" },
    { name: "Paytm Trains", url: "https://paytm.com/trains" },
    { name: "NTES", url: "https://enquiry.indianrail.gov.in" },
];

const busLinks = [
    { name: "RedBus", url: "https://www.redbus.in" },
    { name: "AbhiBus", url: "https://www.abhibus.com" },
    { name: "APSRTC", url: "https://www.apsrtconline.in" },
];

const BookingSection = () => (
    <section className="px-5 py-6">
        <p className="ornament text-lg mb-2">✦</p>
        <h2 className="section-title text-center mb-5">Book Your Travel</h2>

        <AnimatedContainer className="space-y-4">
            <AnimatedCard>
                <div className="flex items-center gap-2 mb-3">
                    <TrainFront className="h-4 w-4 text-gold-dark" />
                    <h3 className="font-serif font-semibold text-sm">Train Booking</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {trainLinks.map((l) => (
                        <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="wedding-btn wedding-btn-outline justify-center text-xs py-2.5">
                            {l.name}
                        </a>
                    ))}
                </div>
            </AnimatedCard>

            <AnimatedCard>
                <div className="flex items-center gap-2 mb-3">
                    <Bus className="h-4 w-4 text-gold-dark" />
                    <h3 className="font-serif font-semibold text-sm">Bus Booking</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {busLinks.map((l) => (
                        <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="wedding-btn wedding-btn-outline justify-center text-xs py-2.5">
                            {l.name}
                        </a>
                    ))}
                </div>
            </AnimatedCard>
        </AnimatedContainer>
    </section>
);

export default BookingSection;
