import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Match from "@/components/templates/dashboard/match.part";
import HeaderDashBoard from "@/components/templates/dashboard/header.part";
import TinderSlider from "@/components/templates/dashboard/tinder-slider.part";

function DashboardPage() {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full min-h-screen">
      <ResizablePanel defaultSize={25} maxSize={50} minSize={15}>
        <Match />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} minSize={75} maxSize={85}>
        <div className="flex flex-col h-full">
          <HeaderDashBoard />
          <TinderSlider />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default DashboardPage;
