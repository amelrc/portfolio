import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useTransform } from "framer-motion";
import { useTracker } from "@14islands/r3f-scroll-rig";
import { useTrackerMotionValue } from "../../../components/useTrackerMotionValue.js";

const scroll = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(calc(-150% - 2rem));
  }
  `;

const Content = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: 2rem;
  padding: 6% 0 2% 0;
  will-change: transform;
  animation: ${scroll} 20s linear infinite;
  animation-direction: ${(props) => (props.reverse ? "reverse" : undefined)};
`;

const MarqueeText = styled.h2`
  font-size: 16vw;
  margin: 0;
  font-weight: 100;
  text-transform: uppercase;
`;

const MarqueeWrapper = styled(motion.div)`
  display: flex;
  user-select: none;
  gap: 2rem;
`;

const MarqueeContent = ({ children, reverse, style }) => {
  return (
    <Content reverse={reverse}>
      <MarqueeText style={style}>{children}</MarqueeText>
    </Content>
  );
};

const Marquee = ({ children, reverse, style }) => {
  const track = useRef();
  const tracker = useTracker(track);
  const progress = useTrackerMotionValue(tracker);

  const x = useTransform(
    progress,
    [0, 1],
    reverse ? ["10vw", "50vw"] : ["50vw", "10vw"],
    { clamp: false }
  );

  return (
    <div ref={track} style={style}>
      <MarqueeWrapper reverse={reverse} style={{ x }}>
        <MarqueeContent reverse={reverse} children={children} />
        <MarqueeContent reverse={reverse} children={children} />
      </MarqueeWrapper>
    </div>
  );
};

export default Marquee;
