import { useRef } from 'react';

import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import { Flex } from '@chakra-ui/react';
import { SubscriptionCardMemo } from '../SubscriptionCard';
import { plansData } from '../../utils/data';
import { Arrow } from "../Arrow";

export function CustomSlider() {
  const ref = useRef<any>();

  return (
    <Flex w='100%' maxW='1220px' mb='100px' alignItems='center' position='relative'>
      
      <Arrow isLeft onClick={() => ref.current?.goBack()} />
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3
          if (parentWidth <= 960) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={SubscriptionCardMemo}
              slideWidth={400}
              carouselWidth={parentWidth}
              data={plansData}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <Arrow isLeft={false} onClick={() => ref.current?.goNext()} />
    </Flex>
  );
}