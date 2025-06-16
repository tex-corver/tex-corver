import BoardOfDirectors from "@/components/sections/board-of-directors";
import Hero from "@/components/sections/hero";
import HighlightedProducts from "@/components/sections/highlighted-products";
import OurClients from "@/components/sections/our-clients";
import OurVision from "@/components/sections/our-vision";
import TeamMembers from "@/components/sections/team-members";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40 -z-10" />

        {/* Main content */}
        <div className="relative z-10">
          <Hero />
          <OurVision />
          <HighlightedProducts />
          <OurClients />
          <BoardOfDirectors />
          <TeamMembers />
        </div>
      </div>
    </Fragment>
  );
}
