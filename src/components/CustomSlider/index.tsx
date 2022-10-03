import {
  Carousel,
  CarouselItem,
  CarouselItems,
  useCarousel
} from "chakra-framer-carousel";

import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { Flex } from '@chakra-ui/react';
import { SubscriptionCard } from '../SubscriptionCard';
import { plansData } from '../../utils/data';

export function CustomSlider() {
  const { onNext, onPrevious } = useCarousel();
  return (
    <Flex w='100%' maxW='1220px' mb='100px' alignItems='center'>
      <Carousel>
        <CarouselItems>
          {plansData.map((plan, index) => (
            <CarouselItem key={plan.id} index={index}>
              <SubscriptionCard plan={plan} />
            </CarouselItem>
          ))}
        </CarouselItems>
      </Carousel>
    </Flex>
  );
}