import {
  AspectRatio,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { BsPlay } from 'react-icons/bs';
import { TTrailer } from 'types/commonTypes';

type TrailerProps = {
  data: string;
};

const Trailer: React.FC<TrailerProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        rounded="full"
        variant="ghost"
        rightIcon={<BsPlay size={20} />}
      >
        Play Trailer
      </Button>

      <Modal isCentered isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalBody m={0} p={0}>
            <AspectRatio maxW="4xl" ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${data}`}
                frameBorder="0"
                allowFullScreen
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Trailer;
