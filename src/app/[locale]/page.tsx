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
      <Hero />
      <OurVision />
      <HighlightedProducts />
      <OurClients />
      <BoardOfDirectors />
      <TeamMembers />
    </Fragment>
  );
}
