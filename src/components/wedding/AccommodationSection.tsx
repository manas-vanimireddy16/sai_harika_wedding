import { BedDouble } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import AnimatedContainer from "../AnimatedContainer";
import AnimatedCard from "../AnimatedCard";

const AccommodationSection = () => (
    <section className="px-5 py-6">
        <AnimatedContainer>
            <AnimatedCard>
                <BedDouble className="h-8 w-8 text-gold-dark mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-base mb-2">Accommodation</h3>
                <p className="text-sm text-muted-foreground">
                    {weddingConfig.accommodationMessage}
                </p>
            </AnimatedCard>
        </AnimatedContainer>
    </section>
);

export default AccommodationSection;
